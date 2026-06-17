import fs from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { loadGithubToken } from "./env-token.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const token = loadGithubToken(root);
const appPath = new URL("./app.js", import.meta.url);
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

async function github(path, extraHeaders = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      "Accept": "application/vnd.github+json",
      "User-Agent": "dataflow-star-dashboard",
      ...(token ? { "Authorization": `Bearer ${token}` } : {}),
      ...extraHeaders
    }
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API ${response.status}: ${body.slice(0, 200)}`);
  }
  return response.json();
}

function utcDate(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date, days) {
  const next = new Date(`${date}T00:00:00Z`);
  next.setUTCDate(next.getUTCDate() + days);
  return utcDate(next);
}

const snapshotDate = utcDate(new Date());
const comparisonDate = addDays(snapshotDate, -2);

async function recentStarsAfter(repoName, afterDate) {
  const repo = await github(`/repos/${repoName}`);
  const maxPage = Math.ceil(repo.stargazers_count / 100);
  let count = 0;
  for (let page = maxPage; page >= 1; page -= 1) {
    const rows = await github(`/repos/${repoName}/stargazers?per_page=100&page=${page}`, {
      "Accept": "application/vnd.github.star+json"
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
  return { total: repo.stargazers_count, twoDayChange: count };
}

const stats = Object.fromEntries(await Promise.all(repoNames.map(async (name) => {
  const stat = await recentStarsAfter(name, comparisonDate);
  return [name, stat];
})));

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

let source = await fs.readFile(appPath, "utf8");
source = source.replace(/let competitorSnapshotDate = "[^"]+";/, `let competitorSnapshotDate = "${snapshotDate}";`);
source = source.replace(/let competitorPreviousSnapshotDate = "[^"]+";/, `let competitorPreviousSnapshotDate = "${comparisonDate}";`);

for (const [name, stat] of Object.entries(stats)) {
  const repoBlock = new RegExp(`(name: "${escapeRegExp(name)}",[\\s\\S]*?total: )\\d+([\\s\\S]*?yesterday: )-?\\d+([\\s\\S]*?twoDayChange: )-?\\d+`, "m");
  source = source.replace(repoBlock, `$1${stat.total}$2${stat.twoDayChange}$3${stat.twoDayChange}`);
}

const snapshotBlock = `  "${snapshotDate}": {\n${repoNames.map((name) => `    "${name}": ${stats[name].total}`).join(",\n")}\n  },\n  "${comparisonDate}": {\n${repoNames.map((name) => `    "${name}": ${stats[name].total - stats[name].twoDayChange}`).join(",\n")}\n  }`;
source = source.replace(/const competitorSnapshots = \{[\s\S]*?\n\};/, `const competitorSnapshots = {\n${snapshotBlock}\n};`);

await fs.writeFile(appPath, source);
console.log(JSON.stringify(stats, null, 2));
