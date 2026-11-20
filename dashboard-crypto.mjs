import { webcrypto, randomBytes } from "node:crypto";
import { gzipSync, gunzipSync } from "node:zlib";
const { subtle } = webcrypto;
export const ITERATIONS = 600000;
const aad = new TextEncoder().encode("dataflow-dashboard:v1");
export async function deriveKey(password, salt) {
  if (!password) throw new Error("DASHBOARD_PASSWORD is required");
  const base = await subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  return subtle.deriveKey({ name: "PBKDF2", hash: "SHA-256", salt: Buffer.from(salt, "base64"), iterations: ITERATIONS }, base, { name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
}
export async function encryptPayload(payload, password, salt = randomBytes(32).toString("base64")) {
  const key = await deriveKey(password, salt), iv = randomBytes(12);
  const data = await subtle.encrypt({ name: "AES-GCM", iv, additionalData: aad }, key, gzipSync(Buffer.from(JSON.stringify(payload)), {level: 9}));
  return { version: 1, compression: "gzip", iterations: ITERATIONS, salt, iv: iv.toString("base64"), ciphertext: Buffer.from(data).toString("base64") };
}
export async function decryptPayload(envelope, password) {
  if (envelope.version !== 1 || envelope.iterations !== ITERATIONS) throw new Error("Unsupported encrypted dashboard");
  const key = await deriveKey(password, envelope.salt);
  try {
    const clear = await subtle.decrypt({ name: "AES-GCM", iv: Buffer.from(envelope.iv, "base64"), additionalData: aad }, key, Buffer.from(envelope.ciphertext, "base64"));
    if (envelope.compression && envelope.compression !== "gzip") throw new Error("Unsupported compression");
    return JSON.parse(new TextDecoder().decode(envelope.compression === "gzip" ? gunzipSync(Buffer.from(clear)) : clear));
  } catch { throw new Error("Dashboard decryption failed; wrong password or damaged payload"); }
}
export function parseEnvelope(text) {
  const prefix = "window.__DASHBOARD_ENCRYPTED__ = ";
  if (!text.startsWith(prefix) || !text.trimEnd().endsWith(";")) throw new Error("Invalid encrypted dashboard format");
  return JSON.parse(text.slice(prefix.length).trim().slice(0, -1));
}
