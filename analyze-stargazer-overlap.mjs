import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadGithubToken } from "./env-token.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const token = loadGithubToken(root);
const repoFullName = process.env.REPO || "OpenDCAI/DataFlow";
const startDate = process.env.START_DATE || "2026-06-01";
const endDate = process.env.END_DATE || new Date().toISOString().slice(0, 10);
const reportMonth = process.env.REPORT_MONTH || startDate.slice(0, 7);
const monthName = Number(reportMonth.slice(5, 7));
const sampleSize = Number(process.env.SAMPLE_SIZE || 160);
const perUserRepoLimit = Number(process.env.PER_USER_REPO_LIMIT || 300);
const concurrency = Number(process.env.CONCURRENCY || 8);
const reportDir = join(root, "reports");
const cacheDir = join(root, ".cache", "stargazer-overlap");

const headers = {
  "Accept": "application/vnd.github+json",
  "User-Agent": "dataflow-star-overlap-analysis",
  ...(token ? { "Authorization": `Bearer ${token}` } : {})
};

async function github(path, extraHeaders = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: { ...headers, ...extraHeaders }
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API ${response.status}: ${body.slice(0, 260)}`);
  }
  return response.json();
}

async function mapLimit(items, limit, task) {
  const results = [];
  let cursor = 0;
  const workers = Array.from({ length: limit }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await task(items[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}

function normalizeRepo(repo) {
  return {
    fullName: repo.full_name,
    htmlUrl: repo.html_url,
    description: repo.description || "",
    language: repo.language || "",
    stars: repo.stargazers_count || 0,
    forks: repo.forks_count || 0,
    archived: Boolean(repo.archived)
  };
}

function isGenericRepo(repo) {
  const name = repo.fullName.toLowerCase();
  const description = repo.description.toLowerCase();
  const genericNames = [
    "freecodecamp",
    "developer-roadmap",
    "coding-interview-university",
    "system-design-primer",
    "public-apis",
    "build-your-own-x",
    "awesome-selfhosted",
    "awesome-python",
    "awesome-go",
    "awesome-rust"
  ];
  if (genericNames.some((item) => name.includes(item))) return true;
  if (name.includes("/awesome-") && repo.stars > 20000) return true;
  if (description.includes("curated list") && repo.stars > 20000) return true;
  return false;
}

function classifyRepo(repo) {
  const text = `${repo.fullName} ${repo.description} ${repo.language}`.toLowerCase();
  const rules = [
    ["Agent / Workflow", ["agent", "workflow", "dify", "langchain", "autogen", "crew", "flow", "orchestrat"]],
    ["RAG / Search", ["rag", "retrieval", "vector", "embedding", "search", "milvus", "qdrant", "weaviate", "chromadb", "lancedb"]],
    ["Data Engineering", ["data", "etl", "elt", "pipeline", "airflow", "dagster", "dbt", "spark", "flink", "dlt", "duckdb"]],
    ["Data Prep / Dataset", ["dataset", "data prep", "dataprep", "annotation", "label", "unstructured", "parsing", "extract"]],
    ["LLM Infra", ["llm", "inference", "serving", "vllm", "ollama", "transformer", "model", "prompt", "mcp"]],
    ["Evaluation", ["eval", "benchmark", "testing", "observability", "ragas", "deepeval"]],
    ["Database / Storage", ["database", "postgres", "mysql", "sqlite", "redis", "warehouse", "lakehouse"]],
    ["Dev Tooling", ["cli", "framework", "sdk", "developer", "devtool", "template"]]
  ];
  for (const [category, keywords] of rules) {
    if (keywords.some((keyword) => text.includes(keyword))) return category;
  }
  return "Other";
}

async function cachedJson(name, loader) {
  await fs.mkdir(cacheDir, { recursive: true });
  const path = join(cacheDir, `${name}.json`);
  if (existsSync(path)) {
    return JSON.parse(await fs.readFile(path, "utf8"));
  }
  const value = await loader();
  await fs.writeFile(path, JSON.stringify(value, null, 2));
  return value;
}

async function fetchStargazers() {
  const repo = await github(`/repos/${repoFullName}`);
  const maxPage = Math.ceil(repo.stargazers_count / 100);
  const pages = await mapLimit(
    Array.from({ length: maxPage }, (_, index) => index + 1),
    concurrency,
    (page) => github(`/repos/${repoFullName}/stargazers?per_page=100&page=${page}`, {
      "Accept": "application/vnd.github.star+json"
    })
  );
  return pages.flat();
}

function sampleUsers(rows) {
  const targetRows = rows
    .filter((item) => item.starred_at?.slice(0, 10) >= startDate && item.starred_at?.slice(0, 10) <= endDate)
    .sort((a, b) => b.starred_at.localeCompare(a.starred_at));
  if (targetRows.length <= sampleSize) return targetRows;
  const step = (targetRows.length - 1) / (sampleSize - 1);
  return Array.from({ length: sampleSize }, (_, index) => targetRows[Math.round(index * step)]);
}

async function fetchUserStarred(login) {
  return cachedJson(`starred-${login}-${perUserRepoLimit}`, async () => {
    const pages = Math.ceil(perUserRepoLimit / 100);
    const repos = [];
    for (let page = 1; page <= pages; page += 1) {
      const rows = await github(`/users/${login}/starred?per_page=100&page=${page}&sort=created&direction=desc`);
      repos.push(...rows.map(normalizeRepo));
      if (rows.length < 100) break;
    }
    return repos.slice(0, perUserRepoLimit);
  });
}

function pct(value, total) {
  return total ? `${Math.round((value / total) * 100)}%` : "0%";
}

function overlapRatio(a, b) {
  const set = new Set(a);
  return b.filter((item) => set.has(item)).length / Math.min(a.length, b.length);
}

function repoLine(row) {
  return `| [${row.fullName}](${row.htmlUrl}) | ${row.userCount} | ${pct(row.userCount, row.sampledUsers)} | ${row.category} | ${row.language || "-"} | ${row.stars.toLocaleString()} | ${row.description.replace(/\|/g, "/").slice(0, 90)} |`;
}

const stargazers = await cachedJson(`stargazers-${repoFullName.replace("/", "-")}-${endDate}`, fetchStargazers);
const sampled = sampleUsers(stargazers);
const sampledLogins = sampled.map((item) => item.user.login);

const starredLists = await mapLimit(sampledLogins, concurrency, async (login) => {
  try {
    return { login, repos: await fetchUserStarred(login), error: "" };
  } catch (error) {
    return { login, repos: [], error: String(error.message || error) };
  }
});

const sourceRepoLower = repoFullName.toLowerCase();
const repoMap = new Map();
for (const item of starredLists) {
  const seen = new Set();
  for (const repo of item.repos) {
    const key = repo.fullName.toLowerCase();
    if (key === sourceRepoLower || seen.has(key)) continue;
    seen.add(key);
    const row = repoMap.get(repo.fullName) || {
      ...repo,
      userCount: 0,
      users: []
    };
    row.userCount += 1;
    row.users.push(item.login);
    repoMap.set(repo.fullName, row);
  }
}

const rows = [...repoMap.values()]
  .map((row) => ({ ...row, category: classifyRepo(row), sampledUsers: sampledLogins.length }))
  .sort((a, b) => b.userCount - a.userCount || b.stars - a.stars || a.fullName.localeCompare(b.fullName));
const filteredRows = rows.filter((row) => !isGenericRepo(row));
const categoryCounts = new Map();
for (const row of filteredRows) {
  categoryCounts.set(row.category, (categoryCounts.get(row.category) || 0) + row.userCount);
}
const categories = [...categoryCounts.entries()]
  .sort((a, b) => b[1] - a[1])
  .map(([category, count]) => ({ category, count, share: pct(count, [...categoryCounts.values()].reduce((a, b) => a + b, 0)) }));
const topOverlapSource = filteredRows.slice(0, 12);
const topOverlapRatios = [];
for (let i = 0; i < topOverlapSource.length; i += 1) {
  for (let j = i + 1; j < topOverlapSource.length; j += 1) {
    topOverlapRatios.push(overlapRatio(topOverlapSource[i].users, topOverlapSource[j].users));
  }
}
const topOverlap = topOverlapRatios.length
  ? {
      repos: topOverlapSource.map((row) => row.fullName),
      average: pct(topOverlapRatios.reduce((sum, value) => sum + value, 0), topOverlapRatios.length),
      min: pct(Math.min(...topOverlapRatios), 1),
      max: pct(Math.max(...topOverlapRatios), 1)
    }
  : { repos: [], average: "0%", min: "0%", max: "0%" };

const result = {
  generatedAt: new Date().toISOString(),
  repo: repoFullName,
  range: { startDate, endDate },
  sample: {
    targetStargazers: stargazers.filter((item) => item.starred_at?.slice(0, 10) >= startDate && item.starred_at?.slice(0, 10) <= endDate).length,
    sampledUsers: sampledLogins.length,
    perUserRepoLimit,
    failedUsers: starredLists.filter((item) => item.error).map((item) => ({ login: item.login, error: item.error }))
  },
  diagnostics: {
    top12PairwiseUserOverlap: topOverlap
  },
  categories,
  topRepos: filteredRows.slice(0, 100),
  rawTopRepos: rows.slice(0, 100)
};

await fs.mkdir(reportDir, { recursive: true });
const jsonPath = join(reportDir, `stargazer-overlap-${reportMonth}.json`);
const mdPath = join(reportDir, `stargazer-overlap-${reportMonth}.md`);
await fs.writeFile(jsonPath, JSON.stringify(result, null, 2));

const markdown = `# ${reportMonth} DataFlow Stargazer 共同关注分析

生成时间：${result.generatedAt}

样本：${result.sample.sampledUsers} / ${result.sample.targetStargazers} 个 ${monthName} 月新增 stargazer；每人最多读取最近 ${perUserRepoLimit} 个 starred repos。

## 快速判断

- Top 12 共同关注项目之间的用户集合平均重叠：${topOverlap.average}；区间：${topOverlap.min} - ${topOverlap.max}。
- 这个重叠度很高，说明 ${monthName} 月新增 stargazer 中存在一批 GitHub star 行为高度相似的人群；它更像同一类信息源/榜单/推荐链路带来的用户，而不是完全随机的自然扩散。
- 共同关注集中在 Agent / Workflow、LLM Infra、RAG / Search，其次才是 Data Engineering。

## 共同关注项目 Top 30（过滤泛项目）

| 项目 | 共同用户 | 样本占比 | 分类 | 语言 | Stars | 描述 |
|---|---:|---:|---|---|---:|---|
${filteredRows.slice(0, 30).map(repoLine).join("\n")}

## 兴趣分类

| 分类 | 共现次数 | 占比 |
|---|---:|---:|
${categories.map((row) => `| ${row.category} | ${row.count} | ${row.share} |`).join("\n")}

## 原始 Top 30（含泛项目）

| 项目 | 共同用户 | 样本占比 | 分类 | 语言 | Stars | 描述 |
|---|---:|---:|---|---|---:|---|
${rows.slice(0, 30).map(repoLine).join("\n")}

## 口径

- 只分析 ${startDate} 到 ${endDate} 给 ${repoFullName} 点 star 的用户。
- 抽样方式：按 ${monthName} 月新增 stargazer 时间序列等距抽样，避免只看最近几天。
- 每个用户最多取最近 ${perUserRepoLimit} 个 starred repos；很早以前 star 的项目不会进入本次样本。
- “过滤泛项目”会去掉超大型学习清单、通用 awesome list、面试资料等噪声，但原始 Top 表仍保留。
- GitHub 不提供共同 star 图谱接口，本报告由公开 stargazer 和用户 starred repos 聚合而来。
`;

await fs.writeFile(mdPath, markdown);

console.log(JSON.stringify({
  report: mdPath,
  json: jsonPath,
  sample: result.sample,
  topRepos: result.topRepos.slice(0, 12).map((row) => ({
    repo: row.fullName,
    users: row.userCount,
    category: row.category,
    stars: row.stars
  })),
  categories: result.categories
}, null, 2));
