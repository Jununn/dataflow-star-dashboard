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
  const text = `${repo.fullName} ${repo.description}`.toLowerCase();
  const rules = [
    ["Data Prep / Dataset", /\b(dataset\w*|data prep\w*|dataprep\w*|annotation\w*|unstructured|parsing|parser\w*)\b|数据清洗|数据标注|文档解析/],
    ["RAG / Search", /\b(rag|retrieval|vector\w*|embedding\w*|search|milvus|qdrant|weaviate|chromadb|lancedb)\b|知识库|知识图谱|检索/],
    ["Agent / Workflow", /\b(agent\w*|workflow\w*|dify|langchain|autogen|crewai|orchestrat\w*)\b|智能体|工作流/],
    ["Evaluation", /\b(eval\w*|benchmark\w*|testing|observability|ragas|deepeval|verification)\b|评测|评估/],
    ["Database / Storage", /\b(database\w*|postgres\w*|mysql|sqlite|redis|warehouse\w*|lakehouse\w*)\b|数据库|存储/],
    ["Data Engineering", /\b(data|etl|elt|pipeline\w*|airflow|dagster|dbt|spark|flink|dlt|duckdb)\b|数据工程|数据管道/],
    ["LLM Infra", /\b(llm\w*|inference|serving|vllm|ollama|transformer\w*|model\w*|backbone\w*|prompt\w*|mcp\w*|vlm\w*)\b|大模型|推理引擎/],
    ["Dev Tooling", /\b(cli|framework\w*|sdk|developer\w*|devtool\w*|template\w*|backend\w*|browser)\b|开发工具|命令行/]
  ];
  for (const [category, pattern] of rules) {
    if (pattern.test(text)) return category;
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
  return cachedJson(`starred-${login}-${perUserRepoLimit}-${endDate}`, async () => {
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
if (!sampledLogins.length) throw new Error(`No stargazers found for ${startDate} to ${endDate}`);

const starredLists = await mapLimit(sampledLogins, concurrency, async (login) => {
  try {
    return { login, repos: await fetchUserStarred(login), error: "" };
  } catch (error) {
    return { login, repos: [], error: String(error.message || error) };
  }
});
const successfulUsers = starredLists.filter((item) => !item.error).length;
if (!successfulUsers) throw new Error("Could not read any sampled user's starred repositories");

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
  .map((row) => ({ ...row, category: classifyRepo(row), sampledUsers: successfulUsers }))
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
      average: `${(100 * topOverlapRatios.reduce((sum, value) => sum + value, 0) / topOverlapRatios.length).toFixed(1)}%`,
      min: `${(100 * Math.min(...topOverlapRatios)).toFixed(1)}%`,
      max: `${(100 * Math.max(...topOverlapRatios)).toFixed(1)}%`
    }
  : { repos: [], average: "0%", min: "0%", max: "0%" };

const result = {
  generatedAt: new Date().toISOString(),
  repo: repoFullName,
  range: { startDate, endDate },
  sample: {
    targetStargazers: stargazers.filter((item) => item.starred_at?.slice(0, 10) >= startDate && item.starred_at?.slice(0, 10) <= endDate).length,
    sampledUsers: sampledLogins.length,
    successfulUsers,
    emptyUsers: starredLists.filter((item) => !item.error && !item.repos.length).length,
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
范围：${startDate} 至 ${endDate}（UTC 日期）；成功 ${successfulUsers} 人，失败 ${result.sample.failedUsers.length} 人，公开收藏为空 ${result.sample.emptyUsers} 人。比例以成功读取用户数为分母。

## 快速判断

- Top 12 共同关注项目之间的用户集合平均重叠：${topOverlap.average}；区间：${topOverlap.min} - ${topOverlap.max}。
- 这里的重叠度是两个项目共同用户数除以较小用户集合人数，再对项目对求平均；它不是全部新增用户的相似度，也不能据此确定流入渠道。
- 共现次数最多的分类：${categories.slice(0, 3).map((row) => `${row.category}（${row.share}）`).join("、")}。分类为关键词初筛，场景需结合项目描述判断。

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
- 抽样方式：${sampledLogins.length === result.sample.targetStargazers ? "覆盖日期范围内全部当前可见的新增 stargazer" : `按 ${monthName} 月新增 stargazer 时间序列等距抽样，避免只看最近几天`}；已取消 star 的用户不在当前列表中。
- 每个用户最多取最近 ${perUserRepoLimit} 个 starred repos；很早以前 star 的项目不会进入本次样本。
- “过滤泛项目”会去掉超大型学习清单、通用 awesome list、面试资料等噪声，但原始 Top 表仍保留。
- GitHub 不提供共同 star 图谱接口，本报告由公开 stargazer 和用户 starred repos 聚合而来。
- 收藏列表反映抓取时可见的兴趣，并不限定收藏发生在 ${monthName} 月；共现次数占比不是用户占比，也不代表真实使用、集成或购买意向。
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
