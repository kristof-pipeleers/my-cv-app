import { cv } from "./cv";
import linkedinPosts from "./linkedin-posts.json";
import type { Experience, LinkedInPost } from "./types";

export const PDF_FILENAME = "Kristof_Pipeleers_CV.pdf";

export function formatPeriod(start: number, end: number | null): string {
  if (end === start) return String(start);
  return `${start} — ${end ?? "Present"}`;
}

export function formatJobPeriod(job: Pick<Experience, "start" | "end" | "startMonth" | "upcoming">): string {
  if (job.upcoming) return `Starting ${job.startMonth ? job.startMonth + " " : ""}${job.start}`;
  return formatPeriod(job.start, job.end);
}

export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}assets/${path}`;
}

const roles: Experience[] = cv.experience;
export const currentRole = roles.find((e) => e.end === null && !e.upcoming);
export const nextRole = roles.find((e) => e.upcoming);

// Written by scripts/linkedin-sync.mjs, which only emits "post" or "repost".
const allPosts = linkedinPosts as LinkedInPost[];
const featured: string[] = cv.writing.featured;
/** Posts shown in the Writing section: pinned ones first, otherwise the latest. */
export const writingPosts: LinkedInPost[] = (
  featured.length ? featured.map((url) => allPosts.find((p) => p.url === url)).filter((p) => p !== undefined) : allPosts
).slice(0, cv.writing.max);

export const lastUpdated = new Date(__CV_UPDATED__).toLocaleDateString("en-GB", {
  month: "long",
  year: "numeric",
});
