// Fetches your own LinkedIn posts and reposts via the official Member Data Portability API (EEA members)
// and writes the ones with your own words to src/content/linkedin-posts.json: public posts and
// reposts where you added a comment. Plain reposts (no text of yours) are skipped on purpose.
// The website shows the LinkedIn section only when this file has at least one post.
//
//   npm run linkedin:sync
//
// Needs LINKEDIN_TOKEN in .env.local (git-ignored). The token can read ALL your LinkedIn
// data, so this script only requests MEMBER_SHARE_INFO (your posts and reposts with comment)
// and never prints the token. It only reads; it can never post to LinkedIn.
// Review the diff of linkedin-posts.json before committing: everything in it becomes public.
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const OUT = resolve("src/content/linkedin-posts.json");
const API = "https://api.linkedin.com/rest/memberSnapshotData";
const token = (process.env.LINKEDIN_TOKEN || "").trim();

if (!token) {
  console.error("✗ LINKEDIN_TOKEN is missing. Add it to .env.local (see README).");
  process.exit(1);
}

async function fetchPage(domain, start) {
  const url = `${API}?q=criteria&domain=${domain}&start=${start}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}`, "Linkedin-Version": "202312" } });
  const body = await res.json().catch(() => ({}));
  if (res.status === 404) return null; // "No data found": end of pages, or not processed yet
  if (res.status === 401) throw new Error("Token rejected or expired. Create a new one in the LinkedIn Developer Portal.");
  if (!res.ok) throw new Error(`LinkedIn API ${res.status}: ${body.message ?? "unknown error"}`);
  return body.elements?.[0]?.snapshotData ?? [];
}

// Field names follow LinkedIn's export (Date, ShareLink, ShareCommentary, Visibility, …);
// read them case-insensitively in case the API spells them differently.
const field = (row, ...names) => {
  const keys = Object.keys(row);
  for (const n of names) {
    const k = keys.find((key) => key.toLowerCase().replace(/[\s_]/g, "") === n.toLowerCase());
    if (k && row[k]) return String(row[k]).trim();
  }
  return "";
};

const isLinkedInUrl = (u) => /^https:\/\/(www\.)?linkedin\.com\//.test(u);

async function fetchDomain(domain) {
  const rows = [];
  for (let start = 0; start < 100; start++) {
    const page = await fetchPage(domain, start);
    if (!page || page.length === 0) break;
    rows.push(...page);
  }
  return rows;
}

const shares = await fetchDomain("MEMBER_SHARE_INFO");

if (shares.length === 0) {
  console.log("No posts returned yet. LinkedIn can take up to a day to process your data after you create the token. Try again later.");
  process.exit(0);
}

// Posts (and reposts with your own comment): public only.
const fromShares = shares
  .map((r) => ({
    date: field(r, "date"),
    url: field(r, "sharelink", "url"),
    text: field(r, "sharecommentary", "commentary"),
    sharedUrl: field(r, "sharedurl"),
    visibility: field(r, "visibility"),
  }))
  .filter((p) => p.text && isLinkedInUrl(p.url) && /public|anyone/i.test(p.visibility))
  .map(({ date, url, text, sharedUrl }) => ({
    type: sharedUrl && isLinkedInUrl(sharedUrl) ? "repost" : "post",
    date,
    url,
    text,
  }));

const posts = fromShares.sort((a, b) => b.date.localeCompare(a.date));
const rows = shares;

await writeFile(OUT, JSON.stringify(posts, null, 2) + "\n");
const hidden = rows.length - posts.length;
console.log(`✓ ${posts.length} posts & reposts → src/content/linkedin-posts.json (${hidden} skipped: not public, reposts without your own text, or no link)`);
console.log("  Review the diff before committing; pick featured posts in src/content/cv.ts → writing.featured.");
