import { cv } from "./cv";

export const PDF_FILENAME = "Kristof_Pipeleers_CV.pdf";

export function formatPeriod(start: number, end: number | null): string {
  if (end === start) return String(start);
  return `${start} — ${end ?? "Present"}`;
}

export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}assets/${path}`;
}

export const currentRole = cv.experience.find((e) => e.end === null);

export const lastUpdated = new Date(__BUILD_DATE__).toLocaleDateString("en-GB", {
  month: "long",
  year: "numeric",
});
