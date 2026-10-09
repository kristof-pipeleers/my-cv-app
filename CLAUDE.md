# kristofpipeleers.be — personal CV site

React 19 + Vite + Tailwind v4, deployed to GitHub Pages by GitHub Actions.

## Architecture
- `src/content/cv.ts` — **single source of truth** for all CV content (typed by `src/content/types.ts`). The website AND the PDF render from it. Never hardcode CV content in components.
- `index.html` + `src/App.tsx` — the website (single page, numbered editorial sections in `src/components/`).
- `resume.html` + `src/resume/` — the one-page A4 CV. `scripts/generate-pdf.mjs` prints it to `public/Kristof_Pipeleers_CV.pdf` (and `public/og-image.png`).
- `src/styles/tokens.css` — color tokens shared by site and PDF. Fonts: Instrument Serif (display) + Inter (body), self-hosted via @fontsource.
- `scripts/prerender.mjs` — injects static HTML into `dist/index.html` after build (SEO + link previews); the client hydrates it.

## Commands
- `npm run dev` — local dev server (site at `/`, CV at `/resume.html`)
- `npm run pdf` — regenerate the PDF; exits non-zero if the CV overflows one page. `-- --preview <file.png>` saves a PNG to inspect.
- `npm run build` — typecheck + production build + prerender into `dist/`
- `npm run build:dev` — same, for the `/dev/` preview environment

## Environments & git flow
- `develop` → https://kristofpipeleers.be/dev/ (noindex, DEV badge)
- `master` → https://kristofpipeleers.be/ (production)
- Work on `develop` (or feature branches → PR into `develop`). Go live by merging `develop` into `master`. Never push straight to `master`.
- `.github/workflows/deploy.yml` builds both branches on every push and publishes them together.

## Conventions
- Privacy: everything in `cv.ts` is public (JS bundle + PDF). City-level location only — no street address or birthday.
- Headlines support `*emphasis*` → accent italic.
- Experience/education ordered most recent first; `end: null` = Present.
- After any content change run `npm run pdf` and check it still fits one page; use the optional `short` fields to condense PDF copy.
- Use the `update-cv` skill for content updates.
