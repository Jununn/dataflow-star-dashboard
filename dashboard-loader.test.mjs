import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import vm from "node:vm";
import {webcrypto} from "node:crypto";
import {encryptPayload} from "./dashboard-crypto.mjs";

test("browser loader rejects invalid input, reconstructs original document and remembers a key", async () => {
  const password = "test-only-browser-password";
  const html = '<html><nav></nav><main><section id="original">private</section></main><script src="./app.js"></script></html>';
  const payload = {version:1,html,app:"window.rendered=true;",reports:{}};
  const encrypted = await encryptPayload(payload,password);
  const storage = new Map();
  function run(savedEnvelope) {
    const elements = new Map(), events = new Map();
    const get = id => {
      if (!elements.has(id)) elements.set(id, {value:"",checked:true,disabled:false,textContent:"",setAttribute(){},focus(){},addEventListener(type,fn){events.set(id+":"+type,fn);}});
      return elements.get(id);
    };
    let written="";
    const context={window:{__DASHBOARD_ENCRYPTED__:savedEnvelope},document:{getElementById:get,open(){},write(html){written=html;},close(){}},crypto:webcrypto,TextEncoder,TextDecoder,Uint8Array,atob,btoa,Blob,URL,Response,DecompressionStream,
      localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)}};
    vm.runInNewContext(loader,context);
    return {get,events,get written(){return written;}};
  }
  const loader=await fs.readFile(new URL("./dashboard-unlock.js",import.meta.url),"utf8");
  const page=run(encrypted);
  page.get("dashboardPasscode").value="wrong";
  await page.events.get("dashboardGateForm:submit")({preventDefault(){}});
  assert.equal(page.written,"");
  assert(page.get("gateError").textContent);
  page.get("dashboardPasscode").value=password;
  await page.events.get("dashboardGateForm:submit")({preventDefault(){}});
  assert(page.written.includes('<main><section id="original">private</section></main>'));
  assert(page.written.includes("window.rendered=true;"));
  assert(!JSON.stringify([...storage]).includes(password));
  assert(storage.has("dataflow-dashboard-decryption-v2"));
  const refreshed=run(encrypted);
  for(let i=0;i<100&&!refreshed.written;i++) await new Promise(resolve=>setTimeout(resolve,10));
  assert(refreshed.written.includes('id="original"'));
});
