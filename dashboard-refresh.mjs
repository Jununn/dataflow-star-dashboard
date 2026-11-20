import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { root, privateDir, restore, build, extractData } from "./dashboard-build.mjs";
import { parseEnvelope } from "./dashboard-crypto.mjs";
import { loadGithubToken } from "./env-token.mjs";

export function replaceData(source, name, nextName, value) {
  const start = source.indexOf("const " + name + " = ");
  const end = source.indexOf("const " + nextName + " = ", start);
  if (start < 0 || end < 0) throw new Error("Unsupported data boundary");
  return source.slice(0, start) + "const " + name + " = " + JSON.stringify(value, null, 2) + ";\n\n" + source.slice(end);
}
async function refreshTraffic(token) {
  const headers = { Authorization: "Bearer " + token, Accept: "application/vnd.github+json", "User-Agent": "dataflow-dashboard" };
  const result = await Promise.all(["views", "clones", "popular/referrers", "popular/paths"].map(async (endpoint) => {
    const response = await fetch("https://api.github.com/repos/OpenDCAI/DataFlow/traffic/" + endpoint, { headers, signal: AbortSignal.timeout(60000) });
    if (!response.ok) throw new Error("Traffic API failed (HTTP " + response.status + ")");
    return response.json();
  }));
  const [views, clones, referrers, paths] = result;
  let source = await fs.readFile(path.join(privateDir, "app.js"), "utf8");
  const data = extractData(source);
  const rows = new Map(data.trafficRows.map(row => [row.date, row]));
  const today = new Date().toISOString().slice(0, 10);
  const cloneRows = new Map(clones.clones.map(row => [row.timestamp.slice(0, 10), row]));
  for (const view of views.views) {
    const date = view.timestamp.slice(0, 10), clone = cloneRows.get(date);
    if (date >= today || !clone) continue; // Do not fabricate missing or partial-day counts.
    rows.set(date, { date, views: view.count, visitors: view.uniques, clones: clone.count, cloners: clone.uniques });
  }
  const snapshots = data.trafficSourceSnapshots.filter(row => row.date !== today);
  snapshots.push({ date: today,
    referrers: referrers.map(row => ({ name: row.referrer, views: row.count, visitors: row.uniques })),
    content: paths.map(row => ({ name: row.path.replace(/^\/OpenDCAI\/DataFlow/, "") || "Overview", views: row.count, visitors: row.uniques }))
  });
  source = replaceData(source, "trafficRows", "trafficSourceSnapshots", [...rows.values()].sort((a,b) => a.date.localeCompare(b.date)));
  source = replaceData(source, "trafficSourceSnapshots", "phases", snapshots.sort((a,b) => a.date.localeCompare(b.date)));
  await fs.writeFile(path.join(privateDir, "app.js"), source);
}
try {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) throw new Error("DASHBOARD_PASSWORD secret is required");
  await restore(parseEnvelope(await fs.readFile(path.join(root, "protected.js"), "utf8")), password);
  if (!process.argv.includes("--deploy-only")) {
    const token = loadGithubToken(root);
    if (!token) throw new Error("GH_TOKEN with repository traffic access is required");
    const env = { ...process.env, GITHUB_TOKEN: token, DASHBOARD_SOURCE_DIR: privateDir,
      REGION_START_MONTH: process.env.REGION_START_MONTH || new Date().toISOString().slice(0, 7) };
    for (const script of ["update-dashboard.mjs", "update-regions.mjs"]) {
      console.log("Refreshing " + script);
      try { execFileSync(process.execPath, [path.join(root, script)], { cwd: root, env, stdio: "pipe", timeout: 1800000, maxBuffer: 16 * 1024 * 1024 }); }
      catch { throw new Error(script + " failed; publication stopped. Private output suppressed."); }
    }
    await refreshTraffic(token);
  }
  await build(password);
  console.log("Encrypted public snapshot built successfully.");
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
