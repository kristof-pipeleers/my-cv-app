import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import { execSync } from "node:child_process";

// "Last updated" on the site and PDF = when the CV content last changed (git history of cv.ts),
// so code-only deploys and dependency updates do not bump it. Uncommitted edits count as "now".
function cvUpdatedAt(): string {
  const file = "src/content/cv.ts";
  try {
    const dirty = execSync(`git status --porcelain -- ${file}`, { encoding: "utf8" }).trim();
    const committed = execSync(`git log -1 --format=%cI -- ${file}`, { encoding: "utf8" }).trim();
    if (!dirty && committed) return new Date(committed).toISOString();
  } catch {
    /* not a git checkout: fall back to the build time */
  }
  return new Date().toISOString();
}

// Two pages share one codebase: the website (index.html) and the
// print-ready CV (resume.html) that scripts/generate-pdf.mjs turns into a PDF.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __CV_UPDATED__: JSON.stringify(cvUpdatedAt()),
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        resume: resolve(import.meta.dirname, "resume.html"),
      },
    },
  },
});
