import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import vm from "node:vm";
import { encryptPayload, decryptPayload, deriveKey, parseEnvelope } from "./dashboard-crypto.mjs";
import { webcrypto } from "node:crypto";
import { gunzipSync } from "node:zlib";
test("authenticated encryption rejects wrong passwords and modified ciphertext", async () => {
  const payload = { html: "<main>private</main>", app: "const actions=[];", reports: {} };
  const encrypted = await encryptPayload(payload, "test-only-random-password");
  assert.deepEqual(await decryptPayload(encrypted, "test-only-random-password"), payload);
  await assert.rejects(decryptPayload(encrypted, "incorrect"));
  const bytes = Buffer.from(encrypted.ciphertext, "base64"); bytes[0] ^= 1;
  await assert.rejects(decryptPayload({ ...encrypted, ciphertext: bytes.toString("base64") }, "test-only-random-password"));
  const updated = await encryptPayload(payload, "test-only-random-password", encrypted.salt);
  assert.notEqual(updated.iv, encrypted.iv);
  const key = await deriveKey("test-only-random-password", encrypted.salt);
  const clear = await webcrypto.subtle.decrypt({name:"AES-GCM",iv:Buffer.from(updated.iv,"base64"),additionalData:new TextEncoder().encode("dataflow-dashboard:v1")}, key, Buffer.from(updated.ciphertext,"base64"));
  assert.deepEqual(JSON.parse(gunzipSync(Buffer.from(clear)).toString()),payload);
  const rotated = await encryptPayload(payload, "another-test-password");
  assert.notEqual(rotated.salt, encrypted.salt);
});
test("published snapshot round-trips without changing private layout or data", async (t) => {
  if (!process.env.DASHBOARD_PASSWORD) return t.skip("Local secret not provided");
  const envelope = parseEnvelope(await fs.readFile(new URL("./protected.js", import.meta.url), "utf8"));
  const payload = await decryptPayload(envelope, process.env.DASHBOARD_PASSWORD);
  assert.equal(payload.html, await fs.readFile(new URL("./.private/index.html", import.meta.url),"utf8"));
  assert.equal(payload.app, await fs.readFile(new URL("./.private/app.js", import.meta.url),"utf8"));
  const html = await fs.readFile(new URL("./index.html", import.meta.url), "utf8");
  assert(!html.includes('id="dashboardProtected"'));
  assert(!html.includes("<h2>独立访客与新增 Star 对照</h2>"));
  for (const name of ["index.html","app.js","unlock.js","protected.js"]) {
    const content=await fs.readFile(new URL("./"+name,import.meta.url),"utf8");
    assert(!content.includes(process.env.DASHBOARD_PASSWORD));
  }
});
