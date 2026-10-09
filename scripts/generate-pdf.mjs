// Renders resume.html (same content + design tokens as the site) to a one-page A4 PDF,
// and a 1200×630 social preview image from the homepage hero.
//
//   npm run pdf                       → public/Kristof_Pipeleers_CV.pdf + public/og-image.png
//   npm run pdf -- --preview out.png  → also save a PNG of the CV for visual review
import { createServer } from "vite";
import { chromium } from "playwright";
import { resolve } from "node:path";

const PDF_PATH = resolve("public/Kristof_Pipeleers_CV.pdf");
const OG_PATH = resolve("public/og-image.png");
const previewIdx = process.argv.indexOf("--preview");
const previewPath = previewIdx > -1 ? resolve(process.argv[previewIdx + 1]) : null;

async function launch() {
  // Prefer Playwright's Chromium (CI); fall back to the locally installed Edge/Chrome.
  for (const channel of [undefined, "msedge", "chrome"]) {
    try {
      return await chromium.launch(channel ? { channel } : {});
    } catch {
      /* try next */
    }
  }
  throw new Error("No Chromium browser found. Run: npx playwright install chromium");
}

const server = await createServer({ logLevel: "error", server: { port: 0 } });
await server.listen();
const base = server.resolvedUrls.local[0];
const browser = await launch();

try {
  // --- CV PDF ---
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  await page.goto(`${base}resume.html`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const overflow = await page.evaluate(() => {
    const body = document.querySelector(".r-body").getBoundingClientRect();
    const footer = document.querySelector(".r-footer").getBoundingClientRect();
    const cols = [...document.querySelectorAll(".r-body > *")].map((c) => c.getBoundingClientRect().bottom);
    return Math.max(...cols, body.bottom) - footer.top;
  });

  await page.pdf({ path: PDF_PATH, preferCSSPageSize: true, printBackground: true });
  if (previewPath) {
    await page.locator(".page").screenshot({ path: previewPath });
    console.log(`Preview → ${previewPath}`);
  }
  console.log(`PDF     → ${PDF_PATH}`);

  // --- Social preview image ---
  const og = await browser.newPage({ viewport: { width: 1200, height: 630 }, colorScheme: "light" });
  await og.addInitScript(() => localStorage.setItem("theme", "light"));
  await og.goto(base, { waitUntil: "networkidle" });
  await og.evaluate(() => document.fonts.ready);
  await og.addStyleTag({ content: "[data-reveal]{opacity:1!important;transform:none!important}" });
  await og.screenshot({ path: OG_PATH });
  console.log(`OG img  → ${OG_PATH}`);

  if (overflow > 0) {
    console.error(`\n✗ CV content overflows the page by ${Math.ceil(overflow)}px — shorten text or use \`short\` fields.`);
    process.exitCode = 1;
  } else {
    console.log(`✓ Fits on one page (${Math.floor(-overflow)}px to spare)`);
  }
} finally {
  await browser.close();
  await server.close();
}
