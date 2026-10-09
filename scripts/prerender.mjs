// After `vite build`, render <App /> to static HTML and inject it into dist/index.html,
// so crawlers and link previews see the full CV without running JavaScript.
import { createServer } from "vite";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const mode = process.argv.includes("--mode") ? process.argv[process.argv.indexOf("--mode") + 1] : "production";
const base = process.argv.includes("--base") ? process.argv[process.argv.indexOf("--base") + 1] : "/";

const vite = await createServer({
  mode,
  base,
  logLevel: "error",
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const { default: App } = await vite.ssrLoadModule("/src/App.tsx");

  const file = resolve("dist/index.html");
  const html = await readFile(file, "utf8");
  const marker = '<div id="root"></div>';
  if (!html.includes(marker)) throw new Error("Root marker not found in dist/index.html");

  const appHtml = renderToString(createElement(App));
  await writeFile(file, html.replace(marker, `<div id="root">${appHtml}</div>`));
  console.log(`Prerendered ${(appHtml.length / 1024).toFixed(1)} kB of HTML into dist/index.html`);
} finally {
  await vite.close();
}
