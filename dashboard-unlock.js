/* Browser-side authenticated decryption. No password is embedded here. */
(() => {
  "use strict";
  const envelope = window.__DASHBOARD_ENCRYPTED__;
  delete window.__DASHBOARD_ENCRYPTED__;
  const storeKey = "dataflow-dashboard-decryption-v2";
  const form = document.getElementById("dashboardGateForm");
  const input = document.getElementById("dashboardPasscode");
  const remember = document.getElementById("gateRemember");
  const error = document.getElementById("gateError");
  const submit = document.getElementById("gateSubmit");
  const bytes = (text) => Uint8Array.from(atob(text), (c) => c.charCodeAt(0));
  const encode = (buffer) => btoa(String.fromCharCode(...new Uint8Array(buffer)));
  let busy = false;
  try { localStorage.removeItem("dataflow-dashboard-unlocked-v1"); } catch {}
  const escapeScript = (script) => script.replace(/<\/script/gi, "<\\/script");
  async function derive(password) {
    const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey({ name: "PBKDF2", hash: "SHA-256", salt: bytes(envelope.salt), iterations: envelope.iterations }, base, { name: "AES-GCM", length: 256 }, true, ["decrypt"]);
  }
  async function decrypt(key) {
    const clear = await crypto.subtle.decrypt({ name: "AES-GCM", iv: bytes(envelope.iv), additionalData: new TextEncoder().encode("dataflow-dashboard:v1") }, key, bytes(envelope.ciphertext));
    if (envelope.compression && envelope.compression !== "gzip") throw new Error("Unsupported compression");
    const text = envelope.compression === "gzip"
      ? await new Response(new Blob([clear]).stream().pipeThrough(new DecompressionStream("gzip"))).text()
      : new TextDecoder().decode(clear);
    const payload = JSON.parse(text);
    if (payload.version !== 1 || typeof payload.html !== "string" || typeof payload.app !== "string") throw new Error("Invalid payload");
    return payload;
  }
  function render(payload, notice) {
    let html = payload.html;
    // Authenticated reports are opened from memory, not a public plaintext URL.
    html = html.replace(/href="(?:\.\/reports\/|https:\/\/github\.com\/Jununn\/dataflow-star-dashboard\/blob\/main\/reports\/)([^"]+)"/g, (_, name) => {
      const report = payload.reports[name];
      return report === undefined ? 'href="#"' : 'href="' + URL.createObjectURL(new Blob([report], { type: name.endsWith(".json") ? "application/json;charset=utf-8" : "text/plain;charset=utf-8" })) + '"';
    });
    const heading = html.indexOf("<h2>独立访客与新增 Star 对照</h2>");
    const boundary = html.lastIndexOf("<section", heading);
    if (heading < 0 || boundary < 0) throw new Error("Missing protected section");
    const toolbar = '<div id="dashboardUnlockStatus" role="status"><span id="privateSessionStatus"></span><button type="button" id="dashboardRelock">重新锁定</button></div>';
    html = html.slice(0, boundary) + toolbar + html.slice(boundary);
    html = html.replace("</head>", '<style>#dashboardUnlockStatus{grid-column:1 / -1;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:8px 0 12px;font-size:14px}#dashboardRelock{flex-shrink:0;border:0;border-radius:8px;background:#3455bb;color:#fff;padding:10px 20px;font:inherit;cursor:pointer}#dashboardRelock:focus-visible{outline:3px solid #93a9ef;outline-offset:3px}</style></head>');
    const lockScript = [
      'document.getElementById("privateSessionStatus").textContent = ' + JSON.stringify(notice).replace(/</g, "\\u003c") + ';',
      'document.getElementById("dashboardRelock").addEventListener("click", () => {',
      '  try { localStorage.removeItem(' + JSON.stringify(storeKey) + '); } catch {}',
      '  location.reload();',
      '});',
      'window.addEventListener("storage", (event) => {',
      '  if ((event.key === ' + JSON.stringify(storeKey) + ' && !event.newValue) || event.key === null) location.reload();',
      '});',
      'window.addEventListener("pageshow", (event) => { if (event.persisted) location.reload(); });'
    ].join("\n");
    const tag = /<script src="\.\/app\.js(?:\?v=[^"]*)?"><\/script>/;
    if (!tag.test(html)) throw new Error("Missing private app");
    html = html.replace(tag, () => "<script>" + escapeScript(payload.app) + "</script><script>" + escapeScript(lockScript) + "</script>");
    // Recreate the original document, preserving the original main > section layout.
    document.open();
    document.write(html);
    document.close();
  }
  function setBusy(value) {
    busy = value;
    submit.disabled = value;
    input.disabled = value;
    submit.textContent = value ? "正在解锁…" : "解锁";
  }
  async function attempt(key, save) {
    const payload = await decrypt(key);
    let notice = save ? "已解锁 · 此浏览器已记住" : "已解锁 · 仅本次页面有效";
    try {
      if (save) localStorage.setItem(storeKey, JSON.stringify({ salt: envelope.salt, key: encode(await crypto.subtle.exportKey("raw", key)) }));
      else localStorage.removeItem(storeKey);
    } catch { notice = "已解锁 · 无法记住状态，刷新后需重新输入"; }
    input.value = "";
    render(payload, notice);
  }
  if (!globalThis.crypto?.subtle || !envelope || envelope.version !== 1 || envelope.iterations !== 600000) {
    error.textContent = "无法加载加密看板。请使用最新版浏览器，并通过 HTTPS 或本地文件打开。";
    submit.disabled = true;
    return;
  }
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (busy) return;
    error.textContent = "";
    const password = input.value;
    setBusy(true);
    try { await attempt(await derive(password), remember.checked); }
    catch {
      error.textContent = "口令不正确或页面文件已损坏，请重试。";
      input.value = "";
      input.setAttribute("aria-invalid", "true");
    } finally {
      setBusy(false);
      if (document.getElementById("dashboardPasscode")) input.focus();
    }
  });
  (async () => {
    let saved;
    try { saved = JSON.parse(localStorage.getItem(storeKey) || "null"); } catch {}
    if (!saved || saved.salt !== envelope.salt) {
      try { localStorage.removeItem(storeKey); } catch {}
      return;
    }
    setBusy(true);
    try {
      const key = await crypto.subtle.importKey("raw", bytes(saved.key), "AES-GCM", true, ["decrypt"]);
      await attempt(key, true);
    } catch {
      try { localStorage.removeItem(storeKey); } catch {}
      error.textContent = "已保存的解锁状态失效，请重新输入口令。";
    } finally { setBusy(false); }
  })();
})();
