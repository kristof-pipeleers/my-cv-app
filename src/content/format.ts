import { cv } from "./cv";
import type { Experience } from "./types";

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

export const lastUpdated = new Date(__BUILD_DATE__).toLocaleDateString("en-GB", {
  month: "long",
  year: "numeric",
});
