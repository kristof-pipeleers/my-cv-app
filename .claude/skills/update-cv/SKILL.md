---
name: update-cv
description: Update Kristof's CV content (new role, project, skill, certification, education, rewritten bullets) and regenerate the matching PDF. Use whenever the user shares new experience or asks to update the CV, website content, or PDF.
---

# Update CV content + PDF

The website and the PDF both render from `src/content/cv.ts`. One edit updates both; the PDF just has to be regenerated and checked.

## 1. Gather and confirm
- Get the facts: role, organization, start/end year, what they did, tools used, measurable results (numbers, scale, users, time saved).
- If the user gives rough notes, draft the bullets and show them **before** editing. Ask about missing impact or metrics once; don't invent numbers.

## 2. Edit `src/content/cv.ts`
- Follow the types in `src/content/types.ts`. Keep lists ordered most recent first. Use `end: null` for the current role. When a role ends, set its `end` year.
- Bullet style: start with a past-tense action verb (present tense for the current role is fine), say what was built and why it mattered, and name the tools. Aim for 1–2 lines, 3–5 bullets per role, with the most impressive first.
- `tags`: 4–7 concrete tools or skills. Add new tools to `stack` (logo key from `src/content/logos.ts`, or none for a monogram card); mark the upcoming role's tools with `next: true` and remove that flag once the role starts.
- New logo: put the PNG in `public/assets/experience-logos/` (or `education-logos/`) and reference its filename.
- Privacy: no street address, birthday or other private data. Everything in this file is public.
- Keep `person.summary` and `services` consistent with the new direction if the role changes.

## 3. Regenerate and verify the PDF
```bash
npm run pdf -- --preview <scratchpad>/cv.png
```
- If it reports overflow, condense: add or tighten `short` fields (qualities/services), trim the oldest role's bullets, or shorten education descriptions. Never shrink fonts below the current sizes.
- **Read the preview PNG** and check alignment, wrapping and orphaned single words. Iterate until it fits with no visual issues.

## 4. Check the site
```bash
npm run build
```
Optionally run `npm run dev` and look at the changed section.

## 5. Ship (ask before committing or pushing)
- Commit on `develop` (never directly on `master`), including the regenerated `public/Kristof_Pipeleers_CV.pdf` and `public/og-image.png`. Use a message like `content: add <role> at <org>`.
- After pushing `develop`, the preview is at https://kristofpipeleers.be/dev/ within ~2 minutes.
- Go live: open a PR or merge `develop` → `master`, then push. Production updates at https://kristofpipeleers.be.
- Remind the user to update LinkedIn with the same changes.
