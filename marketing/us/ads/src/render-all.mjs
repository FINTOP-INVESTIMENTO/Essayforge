// Renders every <section class="ad" data-name="..."> of an HTML file to PNG.
// Usage: node marketing/us/ads/src/render-all.mjs <file.html> <output-dir>
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";

const [arquivo, saidaArg] = process.argv.slice(2);
const saida = path.resolve(saidaArg ?? "out");
fs.mkdirSync(saida, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 2100 } });
await page.goto(pathToFileURL(path.resolve(arquivo)).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

for (const el of await page.locator("section.ad[data-name]").all()) {
  const nome = await el.getAttribute("data-name");
  await el.screenshot({ path: path.join(saida, `${nome}.png`) });
  console.log("ok", nome);
}
await browser.close();
