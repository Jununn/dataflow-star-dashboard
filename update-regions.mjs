import fs from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { loadGithubToken } from "./env-token.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const token = loadGithubToken(root);
if (!token) {
  throw new Error("GITHUB_TOKEN is required");
}

const appPath = new URL("./app.js", import.meta.url);
const headers = {
  "Accept": "application/vnd.github+json",
  "Authorization": `Bearer ${token}`,
  "User-Agent": "dataflow-star-dashboard"
};

async function github(path, extraHeaders = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: { ...headers, ...extraHeaders }
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API ${response.status}: ${body.slice(0, 200)}`);
  }
  return response.json();
}

function isChinaLocation(location) {
  const text = location.toLowerCase();
  return [
    "china",
    "beijing",
    "shanghai",
    "shenzhen",
    "guangzhou",
    "hangzhou",
    "chengdu",
    "wuhan",
    "nanjing",
    "suzhou",
    "xiamen",
    "tianjin",
    "chongqing",
    "hong kong",
    "hk",
    "taiwan",
    "taipei",
    "macau",
    "zhejiang",
    "guangdong",
    "pku",
    "tsinghua"
  ].some((keyword) => text.includes(keyword));
}

function normalizeOverseasLocation(location) {
  const text = location.toLowerCase();
  const countryRules = [
    ["Singapore", ["singapore"]],
    ["France", ["france", "paris"]],
    ["South Korea", ["south korea", "korea", "seoul"]],
    ["Canada", ["canada", "toronto", "vancouver", "montreal", "waterloo"]],
    ["Germany", ["germany", "berlin", "munich", "münchen", "hamburg"]],
    ["India", ["india", "bangalore", "bengaluru", "mumbai", "delhi", "hyderabad", "pune"]],
    ["Australia", ["australia", "sydney", "melbourne", "canberra", "brisbane"]],
    ["United Kingdom", ["united kingdom", "uk", "london", "england", "scotland"]],
    ["Netherlands", ["netherlands", "amsterdam"]],
    ["Spain", ["spain", "madrid", "barcelona"]],
    ["Italy", ["italy", "rome", "milan"]],
    ["Brazil", ["brazil", "são paulo", "sao paulo"]],
    ["Thailand", ["thailand", "bangkok"]],
    ["Vietnam", ["vietnam", "hanoi", "ho chi minh"]],
    ["Indonesia", ["indonesia", "jakarta"]],
    ["Malaysia", ["malaysia", "kuala lumpur"]],
    ["Switzerland", ["switzerland", "zurich", "zürich"]],
    ["Sweden", ["sweden", "stockholm"]],
    ["Poland", ["poland", "warsaw"]],
    ["Turkey", ["turkey", "istanbul"]],
    ["Israel", ["israel", "tel aviv"]],
    ["United Arab Emirates", ["united arab emirates", "uae", "dubai"]],
    ["Mexico", ["mexico", "mexico city"]],
    ["Peru", ["peru", "lima"]]
  ];
  const usKeywords = [
    "united states",
    "usa",
    "u.s.a",
    "u.s.",
    "america",
    "california",
    "san francisco",
    "sf bay",
    "bay area",
    "silicon valley",
    "san jose",
    "palo alto",
    "mountain view",
    "sunnyvale",
    "berkeley",
    "los angeles",
    "seattle",
    "washington state",
    "austin",
    "texas",
    "new york",
    "nyc",
    "brooklyn",
    "boston",
    "massachusetts",
    "cambridge, ma",
    "denver",
    "colorado",
    "chicago",
    "illinois"
  ];
  const usStatePattern = /(^|[\s,])(?:ca|wa|tx|ny|ma|co|il)([\s,]|$)/;
  if (usKeywords.some((keyword) => text.includes(keyword)) || usStatePattern.test(text)) {
    return "United States";
  }
  const japanKeywords = [
    "japan",
    "tokyo",
    "osaka",
    "kyoto",
    "yokohama",
    "nagoya",
    "fukuoka",
    "sapporo",
    "kobe",
    "kanagawa",
    "chiba",
    "saitama",
    "okinawa",
    "日本"
  ];
  if (japanKeywords.some((keyword) => text.includes(keyword))) {
    return "Japan";
  }
  for (const [country, keywords] of countryRules) {
    if (keywords.some((keyword) => text.includes(keyword))) {
      return country;
    }
  }
  return location;
}

function topLocations(map, limit = 10) {
  const rows = [...map.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([location, count]) => `${location} ${count}`);
  return rows.length ? rows : ["暂无"];
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

const today = new Date().toISOString().slice(0, 10);
const targetRanges = [
  { phaseId: "may", start: "2026-05-01", end: "2026-05-31" },
  { phaseId: "june", start: "2026-06-01", end: today }
];

const repo = await github("/repos/OpenDCAI/DataFlow");
const maxPage = Math.ceil(repo.stargazers_count / 100);
const pageNumbers = Array.from({ length: maxPage }, (_, index) => index + 1);

const pages = await mapLimit(pageNumbers, 8, (page) => github(`/repos/OpenDCAI/DataFlow/stargazers?per_page=100&page=${page}`, {
  "Accept": "application/vnd.github.star+json"
}));

const targetStargazers = pages
  .flat()
  .filter((item) => {
    const date = item.starred_at?.slice(0, 10);
    return targetRanges.some((range) => date >= range.start && date <= range.end);
  })
  .sort((a, b) => a.starred_at.localeCompare(b.starred_at));

const profiles = await mapLimit(targetStargazers, 12, async (item) => {
  const user = await github(`/users/${item.user.login}`);
  return {
    login: item.user.login,
    starredAt: item.starred_at,
    date: item.starred_at.slice(0, 10),
    location: typeof user.location === "string" ? user.location.trim() : ""
  };
});

function buildStat(range) {
  const rows = profiles.filter((profile) => profile.date >= range.start && profile.date <= range.end);
  let known = 0;
  let china = 0;
  let overseas = 0;
  const chinaLocations = new Map();
  const overseasLocations = new Map();

  for (const profile of rows) {
    if (!profile.location) continue;
    known += 1;
    if (isChinaLocation(profile.location)) {
      china += 1;
      chinaLocations.set(profile.location, (chinaLocations.get(profile.location) || 0) + 1);
    } else {
      overseas += 1;
      const location = normalizeOverseasLocation(profile.location);
      overseasLocations.set(location, (overseasLocations.get(location) || 0) + 1);
    }
  }

  return {
    phaseId: range.phaseId,
    status: "complete",
    totalStars: rows.length,
    known,
    china,
    overseas,
    unknown: rows.length - known,
    note: `${range.start.slice(5).replace("-", "/")}-${range.end.slice(5).replace("-", "/")} 地区统计已用 GitHub API 补齐，样本为当前仍保留 star 的该阶段新增用户。`,
    topChinaLocations: topLocations(chinaLocations),
    topOverseasLocations: topLocations(overseasLocations)
  };
}

const stats = targetRanges.map((range) => buildStat(range));

let source = await fs.readFile(appPath, "utf8");
for (const stat of stats) {
  const replacement = `  {
    phaseId: "${stat.phaseId}",
    status: "${stat.status}",
    totalStars: ${stat.totalStars},
    known: ${stat.known},
    china: ${stat.china},
    overseas: ${stat.overseas},
    unknown: ${stat.unknown},
    note: "${stat.note}",
    topChinaLocations: ${JSON.stringify(stat.topChinaLocations)},
    topOverseasLocations: ${JSON.stringify(stat.topOverseasLocations)}
  }`;
  const phasePattern = new RegExp(`  \\{\\n    phaseId: "${stat.phaseId}",[\\s\\S]*?\\n  \\}`);
  source = source.replace(phasePattern, replacement);
}
await fs.writeFile(appPath, source);

console.log(JSON.stringify(stats.map((stat) => ({
  phaseId: stat.phaseId,
  totalStars: stat.totalStars,
  known: stat.known,
  china: stat.china,
  overseas: stat.overseas,
  unknown: stat.unknown,
  topChinaLocations: stat.topChinaLocations,
  topOverseasLocations: stat.topOverseasLocations
})), null, 2));
