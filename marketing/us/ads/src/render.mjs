// Renders each <section class="ad"> in ads.html to a PNG.
// Usage: node marketing/us/ads/src/render.mjs <output-dir>
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";

const aqui = path.dirname(fileURLToPath(import.meta.url));
const saida = path.resolve(process.argv[2] ?? path.join(aqui, "..", "out"));
fs.mkdirSync(saida, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 2100 } });
await page.goto(pathToFileURL(path.join(aqui, "ads.html")).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

const nomes = { ad1: "1-state-vs-state-1080x1080", ad2: "2-hear-ye-nov1-1080x1350", ad3: "3-tiktok-we-the-readers-1080x1920" };
for (const [id, nome] of Object.entries(nomes)) {
  await page.locator(`#${id}`).screenshot({ path: path.join(saida, `${nome}.png`) });
  console.log("ok", nome);
}
await browser.close();
