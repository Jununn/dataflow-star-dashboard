import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadGithubToken } from "./env-token.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const appPath = join(root, "app.js");
const zipPath = join(root, "dataflow-star-dashboard.zip");
const githubToken = loadGithubToken(root);
const recalculationWindowDays = 4;
const repoNames = [
  "datajuicer/data-juicer",
  "Eventual-Inc/Daft",
  "OpenDCAI/DataFlow",
  "huggingface/datatrove",
  "NVIDIA-NeMo/DataDesigner",
  "NVIDIA-NeMo/Curator",
  "tinyfish-io/bigset",
  "OpenDataArena/OpenDataArena-Tool",
  "InternScience/SciDataCopilot"
];

function utcDate(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date, days) {
  const next = new Date(`${date}T00:00:00Z`);
  next.setUTCDate(next.getUTCDate() + days);
  return utcDate(next);
}

function datesBetween(start, end) {
  const out = [];
  for (let d = new Date(`${start}T00:00:00Z`), last = new Date(`${end}T00:00:00Z`); d <= last; d.setUTCDate(d.getUTCDate() + 1)) {
    out.push(utcDate(d));
  }
  return out;
}

function readConstArray(source, name) {
  const match = source.match(new RegExp(`const ${name} = (\\[[\\s\\S]*?\\n\\]);`));
  if (!match) throw new Error(`Cannot find ${name}`);
  return Function(`return ${match[1]};`)();
}

function readConstObject(source, name) {
  const match = source.match(new RegExp(`const ${name} = (\\{[\\s\\S]*?\\n\\});`));
  if (!match) throw new Error(`Cannot find ${name}`);
  return Function(`return ${match[1]};`)();
}

function readConstString(source, name) {
  const match = source.match(new RegExp(`(?:const|let) ${name} = "([^"]+)";`));
  if (!match) throw new Error(`Cannot find ${name}`);
  return match[1];
}

function readStartTotal(source) {
  const match = source.match(/(?:const|let) startTotal = (\d+);/);
  if (!match) throw new Error("Cannot find startTotal");
  return Number(match[1]);
}

function replaceStartTotal(source, value) {
  return source.replace(/(?:const|let) startTotal = \d+;/, `let startTotal = ${value};`);
}

async function github(path, options = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      "User-Agent": "dataflow-dashboard-updater",
      ...(githubToken ? { Authorization: `Bearer ${githubToken}` } : {}),
      ...(options.headers || {})
    }
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API ${res.status} for ${path}: ${body.slice(0, 240)}`);
  }
  return res.json();
}

async function recentStarsAfter(repoName, afterDate) {
  const repo = await github(`/repos/${repoName}`);
  const maxPage = Math.ceil(repo.stargazers_count / 100);
  let count = 0;
  for (let page = maxPage; page >= 1; page -= 1) {
    const rows = await github(`/repos/${repoName}/stargazers?per_page=100&page=${page}`, {
      headers: { Accept: "application/vnd.github.star+json" }
    });
    if (!rows.length) break;
    let shouldStop = false;
    for (const row of rows) {
      const date = row.starred_at?.slice(0, 10);
      if (!date) continue;
      if (date > afterDate) {
        count += 1;
      } else {
        shouldStop = true;
      }
    }
    if (shouldStop) break;
  }
  return count;
}

async function safeRecentStarsAfter(repoName, afterDate) {
  try {
    return await recentStarsAfter(repoName, afterDate);
  } catch (error) {
    console.warn(`Skip detailed recent stars for ${repoName}: ${error.message}`);
    return null;
  }
}

async function recentStargazersThrough(totalStars, cutoffDate) {
  const maxPage = Math.ceil(totalStars / 100);
  const cutoffTimestamp = `${cutoffDate}T00:00:00Z`;
  const rows = [];
  for (let page = maxPage; page >= 1; page -= 1) {
    const pageRows = await github(`/repos/OpenDCAI/DataFlow/stargazers?per_page=100&page=${page}`, {
      headers: { Accept: "application/vnd.github.star+json" }
    });
    if (!pageRows.length) break;
    rows.push(...pageRows);
    const oldest = pageRows
      .map((item) => item?.starred_at)
      .filter(Boolean)
      .sort()[0];
    if (oldest && oldest < cutoffTimestamp) break;
  }
  return rows;
}

function renderRows(rows) {
  const parts = rows.map(([date, count]) => `["${date}", ${count}]`);
  const lines = [];
  for (let i = 0; i < parts.length; i += 4) {
    lines.push(`  ${parts.slice(i, i + 4).join(", ")}`);
  }
  return `[\n${lines.join(",\n")}\n]`;
}

function renderPoints(points) {
  return `[\n${points.map(([date, value]) => `      ["${date}", ${value}]`).join(",\n")}\n    ]`;
}

function renderCompetitors(repos) {
  const body = repos.map((repo) => `  {
    name: "${repo.name}",
    total: ${repo.total},
    yesterday: ${repo.yesterday},
    twoDayChange: ${repo.twoDayChange ?? repo.yesterday},
    color: "${repo.color}",
    points: ${repo.points ? renderPoints(repo.points) : "null"}
  }`).join(",\n");
  return `[\n${body}\n]`;
}

function renderSnapshots(snapshots) {
  return `{\n${Object.entries(snapshots).map(([date, totals]) => `  "${date}": {\n${Object.entries(totals).map(([name, total]) => `    "${name}": ${total}`).join(",\n")}\n  }`).join(",\n")}\n}`;
}

function replaceConstArray(source, name, rows) {
  return source.replace(new RegExp(`const ${name} = \\[[\\s\\S]*?\\n\\];`), `const ${name} = ${renderRows(rows)};`);
}

function replaceConstString(source, name, value) {
  return source.replace(new RegExp(`((?:const|let) ${name} = ")[^"]+(";)`), `$1${value}$2`);
}

function replaceConstObject(source, name, object) {
  return source.replace(new RegExp(`const ${name} = \\{[\\s\\S]*?\\n\\};`), `const ${name} = ${renderSnapshots(object)};`);
}

function replaceCompetitors(source, repos) {
  return source.replace(/const competitorRepos = \[[\s\S]*?\n\];\n\nconst actions = \[/, `const competitorRepos = ${renderCompetitors(repos)};\n\nconst actions = [`);
}

function renderPhase({ id, label, start, end, note }) {
  return `  {
    id: "${id}",
    label: "${label}",
    start: "${start}",
    end: "${end}",
    note: "${note}"
  }`;
}

function replacePhase(source, id, phase) {
  const pattern = new RegExp(`  \\{\\n    id: "${id}",[\\s\\S]*?\\n  \\}`);
  if (pattern.test(source)) {
    return source.replace(pattern, renderPhase(phase));
  }
  return source.replace(/\n\];\n\nconst phaseRegionStats/, `,\n${renderPhase(phase)}\n];\n\nconst phaseRegionStats`);
}

function updateCurrentPhases(source, endDate, total) {
  if (endDate <= "2026-06-30") {
    return replacePhase(source, "june", {
      id: "june",
      label: "6 月：高位续航",
      start: "2026-06-01",
      end: endDate,
      note: `6/1-${endDate.slice(5).replace("-", "/")} 为滚动快照，公开总数已到 ${total.toLocaleString("en-US")}；日增按 starred_at 统计，累计差额通过基线对齐。`
    });
  }

  source = replacePhase(source, "june", {
    id: "june",
    label: "6 月：高位续航",
    start: "2026-06-01",
    end: "2026-06-30",
    note: "6/1-6/30 为完整月数据；日增按 starred_at 统计，月柱为 Gross 新增口径。"
  });
  return replacePhase(source, "july", {
    id: "july",
    label: "7 月：高位续航",
    start: "2026-07-01",
    end: endDate,
    note: `7/1-${endDate.slice(5).replace("-", "/")} 为当前滚动月，数据随每日更新继续补齐。`
  });
}

function cumulative(startTotal, rows) {
  return startTotal + rows.reduce((sum, [, count]) => sum + count, 0);
}

async function main() {
  let source = readFileSync(appPath, "utf8");
  const startTotal = readStartTotal(source);
  const dailyCounts = readConstArray(source, "dailyCounts");
  const competitorRepos = readConstArray(source, "competitorRepos");
  const competitorSnapshots = readConstObject(source, "competitorSnapshots");

  const dataflow = await github("/repos/OpenDCAI/DataFlow");
  const totalStars = dataflow.stargazers_count;
  const oldLastDate = dailyCounts.at(-1)[0];
  const cutoff = addDays(oldLastDate, -recalculationWindowDays);
  const recentStars = (await recentStargazersThrough(totalStars, cutoff)).filter((item) => item?.starred_at);
  const byDay = new Map();
  for (const item of recentStars) {
    const day = item.starred_at.slice(0, 10);
    byDay.set(day, (byDay.get(day) || 0) + 1);
  }

  const latestStarDate = [...byDay.keys()].sort().at(-1) || oldLastDate;
  const currentUtcDate = utcDate(new Date());
  const endDate = [latestStarDate, currentUtcDate, oldLastDate].sort().at(-1);
  const existing = new Map(dailyCounts);
  const updatedRows = dailyCounts.filter(([date]) => date < cutoff);
  for (const date of datesBetween(cutoff, endDate)) {
    updatedRows.push([date, byDay.has(date) ? byDay.get(date) : (existing.get(date) || 0)]);
  }

  const adjustedStartTotal = startTotal + (totalStars - cumulative(startTotal, updatedRows));

  const repoInfos = new Map();
  for (const name of repoNames) {
    repoInfos.set(name, await github(`/repos/${name}`));
  }
  const currentSnapshot = Object.fromEntries(repoNames.map((name) => [name, repoInfos.get(name)?.stargazers_count || 0]));
  competitorSnapshots[endDate] = currentSnapshot;
  const twoDaysAgo = addDays(endDate, -2);
  const comparisonSnapshot = competitorSnapshots[twoDaysAgo] || {};
  const inferredTwoDayChanges = new Map();
  if (!competitorSnapshots[twoDaysAgo]) {
    for (const name of repoNames) {
      inferredTwoDayChanges.set(name, await safeRecentStarsAfter(name, twoDaysAgo));
    }
  }
  const nextCompetitors = competitorRepos.map((repo) => {
    const info = repoInfos.get(repo.name);
    if (!info) return repo;
    const points = repo.points ? repo.points.slice(0, -1).concat([[endDate, info.stargazers_count]]) : null;
    const comparisonTotal = comparisonSnapshot[repo.name] ?? repo.total;
    const inferredTwoDayChange = inferredTwoDayChanges.get(repo.name);
    const twoDayChange = Number.isFinite(inferredTwoDayChange)
      ? inferredTwoDayChange
      : info.stargazers_count - comparisonTotal;
    return {
      ...repo,
      total: info.stargazers_count,
      yesterday: info.stargazers_count - repo.total,
      twoDayChange,
      points
    };
  });

  source = replaceStartTotal(source, adjustedStartTotal);
  source = replaceConstArray(source, "dailyCounts", updatedRows);
  source = replaceConstString(source, "competitorSnapshotDate", endDate);
  source = replaceConstString(source, "competitorPreviousSnapshotDate", twoDaysAgo);
  source = replaceConstObject(source, "competitorSnapshots", competitorSnapshots);
  source = replaceCompetitors(source, nextCompetitors);
  source = updateCurrentPhases(source, endDate, totalStars);
  writeFileSync(appPath, source);

  execFileSync("node", ["-c", appPath], { stdio: "pipe" });
  const written = readFileSync(appPath, "utf8");
  const checkRows = readConstArray(written, "dailyCounts");
  const checkStartTotal = readStartTotal(written);
  const checkTotal = cumulative(checkStartTotal, checkRows);
  if (checkTotal !== totalStars) {
    throw new Error(`Cumulative mismatch: ${checkTotal} != ${totalStars}`);
  }
  execFileSync("zip", ["-j", zipPath, join(root, "index.html"), join(root, "styles.css"), appPath, join(root, "update-dashboard.mjs")], { stdio: "pipe" });

  const changedDates = updatedRows.filter(([date]) => date >= cutoff);
  console.log(JSON.stringify({
    ok: true,
    snapshotDate: endDate,
    dataflow: { stars: totalStars, forks: dataflow.forks_count },
    changedDates,
    competitors: nextCompetitors.map((repo) => [repo.name, repo.total, repo.twoDayChange]),
    zip: zipPath
  }, null, 2));
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
