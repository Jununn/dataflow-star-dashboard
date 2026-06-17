import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export function loadGithubToken(root) {
  if (process.env.GITHUB_TOKEN || process.env.GH_TOKEN) {
    return process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  }

  const envPath = ["github-token.local", ".env.local"]
    .map((name) => join(root, name))
    .find((path) => existsSync(path));
  if (!envPath) return "";

  const env = readFileSync(envPath, "utf8");
  for (const line of env.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^(GITHUB_TOKEN|GH_TOKEN)\s*=\s*(.*)$/);
    if (!match) continue;
    const value = match[2].replace(/^["']|["']$/g, "").trim();
    if (!value || value.includes("YOUR_") || value.includes("替换")) return "";
    if (!/^[\x20-\x7E]+$/.test(value)) return "";
    return value;
  }
  return "";
}
