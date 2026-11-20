import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { encryptPayload, decryptPayload, parseEnvelope } from "./dashboard-crypto.mjs";
export const root = path.dirname(fileURLToPath(import.meta.url));
export const privateDir = path.join(root, ".private");
export const publicFiles = ["index.html", "app.js", "styles.css", "favicon.png", "unlock.js", "protected.js", "dashboard-gate.css", ".nojekyll"];
export function cleanLegacyGate(html) {
  html = html.replace(/<style>\s*#dashboardProtected[\s\S]*?<\/style>\s*/g, "");
  html = html.replace(/<section class="panel" id="dashboardGate"[\s\S]*?<\/section>\s*/, "");
  html = html.replace(/<div id="dashboardProtected" class="gate-toolbar" hidden>[\s\S]*?<\/div>\s*/, "");
  html = html.replace(/<script>\s*\(\(\) => \{\s*const key = "dataflow-dashboard-unlocked-v1";[\s\S]*?<\/script>\s*/, "");
  if (html.includes('id="dashboardGate"') || html.includes("dataflow-dashboard-unlocked-v1")) throw new Error("Legacy gate still present");
  return html;
}
export function extractData(app) {
  const boundary = app.indexOf("const byDateActions");
  if (boundary < 0) throw new Error("Dashboard data boundary missing");
  return vm.runInNewContext(app.slice(0, boundary) + ";({dailyCounts,actions,trafficRows,trafficSourceSnapshots,phaseRegionStats,phases});", {}, { timeout: 3000 });
}
export function createPublicApp(app) {
  const cut = app.indexOf("let competitorSnapshotDate"), funcs = app.indexOf("const byDateActions");
  if (cut < 0 || funcs < cut) throw new Error("Unsupported source layout");
  let script = app.slice(0, cut) + [
    'let competitorSnapshotDate = dailyCounts.at(-1)[0];',
    'let competitorPreviousSnapshotDate = competitorSnapshotDate;',
    'const competitorSnapshots = {};',
    'const competitorRepos = [{ name: "OpenDCAI/DataFlow", total: startTotal + dailyCounts.reduce((n, row) => n + row[1], 0), points: null }];',
    'const actions = []; const trafficRows = []; const trafficSourceSnapshots = []; const phases = []; const phaseRegionStats = [];'
  ].join("\n") + "\n" + app.slice(funcs);
  const renderStart = script.indexOf("function renderAll()"), renderEnd = script.indexOf("function updateLiveStatus", renderStart);
  if (renderStart < 0 || renderEnd < 0) throw new Error("Render boundary missing");
  script = script.slice(0, renderStart) + "function renderAll() { rebuildDerivedData(); renderSummary(); renderCombinedChart(); renderMainChart(); }\n\n" + script.slice(renderEnd);
  const init = script.lastIndexOf("\ninitCalendar();");
  if (init < 0) throw new Error("Initialization boundary missing");
  script = script.slice(0, init) + "\ninitMainChartModeToggle();\ninitCombinedWindowControls();\nrenderAll();\nupdateLiveStatus(getLastRefreshStatus());\n";
  new vm.Script(script);
  return "/* Public charts only; private data is encrypted in protected.js. */\n(() => {\n" + script + "\n})();\n";
}
export async function createPublicHtml(html, version) {
  const title = html.indexOf("<h2>独立访客与新增 Star 对照</h2>"), start = html.lastIndexOf("<section", title);
  if (title < 0 || start < 0) throw new Error("Protected content boundary missing");
  const gate = (await fs.readFile(path.join(root, "dashboard-gate.html"), "utf8")).replaceAll("BUILD_VERSION", version);
  return (html.slice(0, start) + gate).replace("</head>", '<link rel="stylesheet" href="./dashboard-gate.css?v=' + version + '">\n</head>').replace(/\.\/styles\.css(?:\?v=[^"]*)?/g, "./styles.css?v=" + version);
}
export async function readPrivate() {
  const html = cleanLegacyGate(await fs.readFile(path.join(privateDir, "index.html"), "utf8"));
  const app = await fs.readFile(path.join(privateDir, "app.js"), "utf8");
  new vm.Script(app);
  const reports = {}, folder = path.join(privateDir, "reports");
  if (existsSync(folder)) for (const name of await fs.readdir(folder)) {
    if (/\.(md|json)$/.test(name)) reports[name] = await fs.readFile(path.join(folder, name), "utf8");
  }
  return { version: 1, html, app, reports };
}
export async function restore(envelope, password) {
  const payload = await decryptPayload(envelope, password);
  if (payload.version !== 1 || typeof payload.html !== "string" || typeof payload.app !== "string") throw new Error("Invalid private payload");
  await fs.mkdir(path.join(privateDir, "reports"), { recursive: true });
  await fs.writeFile(path.join(privateDir, "index.html"), payload.html);
  await fs.writeFile(path.join(privateDir, "app.js"), payload.app);
  for (const [name, data] of Object.entries(payload.reports)) {
    if (name !== path.basename(name) || !/\.(md|json)$/.test(name)) throw new Error("Invalid report path");
    await fs.writeFile(path.join(privateDir, "reports", name), data);
  }
  return payload;
}
export async function build(password, { output = root, rekey = false } = {}) {
  const payload = await readPrivate();
  const previousPath = path.join(root, "protected.js");
  let salt;
  if (!rekey && existsSync(previousPath)) {
    const previous = parseEnvelope(await fs.readFile(previousPath, "utf8"));
    await decryptPayload(previous, password);
    salt = previous.salt;
  }
  const envelope = await encryptPayload(payload, password, salt);
  const encrypted = "window.__DASHBOARD_ENCRYPTED__ = " + JSON.stringify(envelope) + ";\n";
  const version = createHash("sha256").update(encrypted).digest("hex").slice(0, 12);
  const files = {
    "index.html": await createPublicHtml(payload.html, version),
    "app.js": createPublicApp(payload.app),
    "protected.js": encrypted,
    "unlock.js": await fs.readFile(path.join(root, "dashboard-unlock.js"), "utf8"),
    "dashboard-gate.css": await fs.readFile(path.join(root, "dashboard-gate.css"), "utf8"),
    "styles.css": await fs.readFile(path.join(root, "styles.css")),
    "favicon.png": await fs.readFile(path.join(root, "favicon.png")),
    ".nojekyll": ""
  };
  const privateData = extractData(payload.app);
  for (const name of ["app.js", "index.html", "unlock.js"]) {
    for (const action of privateData.actions) if (action.url !== "#" && files[name].includes(action.url)) throw new Error("Private action leaked into " + name);
    if (files[name].includes(password)) throw new Error("Password leaked into " + name);
  }
  for (const base of [output, path.join(output, "site-public")]) {
    await fs.mkdir(base, { recursive: true });
    for (const name of publicFiles) await fs.writeFile(path.join(base, name), files[name]);
  }
  return { version, starsThrough: privateData.dailyCounts.at(-1)[0], actions: privateData.actions.length, reportCount: Object.keys(payload.reports).length };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const password = process.env.DASHBOARD_PASSWORD;
    if (!password) throw new Error("DASHBOARD_PASSWORD is required");
    const command = process.argv[2] || "build";
    if (command === "restore") {
      await restore(parseEnvelope(await fs.readFile(path.join(root, "protected.js"), "utf8")), password);
      console.log("Private source restored to ignored .private directory");
    } else if (command === "build") {
      console.log(JSON.stringify(await build(password, { rekey: process.argv.includes("--rekey") })));
    } else throw new Error("Use restore or build");
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
