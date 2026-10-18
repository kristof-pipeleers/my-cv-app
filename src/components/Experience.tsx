import { ArrowUpRight } from "lucide-react";
import { cv } from "../content/cv";
import { asset, formatJobPeriod } from "../content/format";
import type { Experience as Job } from "../content/types";
import { revealDelay } from "../lib/reveal";
import Section from "./Section";

type Status = "upcoming" | "current" | "past";

const statusOf = (job: Job): Status => (job.upcoming ? "upcoming" : job.end === null ? "current" : "past");

// Static class names so Tailwind can see them; one column per role on large screens.
const lgCols = ["lg:grid-cols-1", "lg:grid-cols-1", "lg:grid-cols-2", "lg:grid-cols-3", "lg:grid-cols-4"];

const statusLabel: Record<Status, string | null> = { upcoming: "Next", current: "Current role", past: null };

/** Timeline dot: open ring for the next role, pulsing accent for the current one, muted for past roles. */
function Node({ status }: { status: Status }) {
  return (
    <span aria-hidden="true" className="absolute top-0 left-0 grid size-[15px] place-items-center">
      {status === "current" && <span className="absolute size-full animate-ping rounded-full bg-accent/40" />}
      <span
        className={`relative size-[15px] rounded-full ${
          status === "upcoming"
            ? "border-2 border-accent bg-bg"
            : status === "current"
              ? "bg-accent ring-4 ring-accent/20"
              : "border-2 border-subtle bg-bg"
        }`}
      />
    </span>
  );
}

/**
 * Career timeline (inspired by spott.io/careers): horizontal with a connecting line on wide
 * screens, vertical with the line on the left on smaller screens. Most recent role first.
 */
export default function Experience() {
  const jobs: Job[] = cv.experience;

  return (
    <Section id="experience" number="02" label="Experience" title="Where I've *worked*." wide>
      <ol className={`relative grid gap-14 lg:gap-10 ${lgCols[Math.min(jobs.length, 4)]}`}>
        {/* The line: vertical on small screens, horizontal on large ones. */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-px bg-line lg:top-[7px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
        />

        {jobs.map((job, i) => {
          const status = statusOf(job);
          const label = statusLabel[status];
          return (
            <li key={job.id} className="relative pl-10 lg:pt-12 lg:pl-0" data-reveal style={revealDelay(i * 120)}>
              <Node status={status} />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 lg:-mt-0.5">
                <p className="text-sm font-medium tabular-nums">{formatJobPeriod(job)}</p>
                {label && (
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">{label}</span>
                )}
              </div>

              <img
                src={asset(`experience-logos/${job.logo}`)}
                alt=""
                className="mt-6 h-12 w-24 rounded-xl bg-white object-contain px-2.5 py-1.5 ring-1 ring-line"
              />

              <h3 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-[2rem]">{job.role}</h3>
              {job.website ? (
                <a
                  href={job.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-2 inline-flex items-center gap-1 text-accent"
                >
                  {job.organization}
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              ) : (
                <p className="mt-2 text-accent">{job.organization}</p>
              )}

              <ul className="mt-6 space-y-3 leading-relaxed text-muted lg:text-[0.95rem]">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-4">
                    <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-7 flex flex-wrap gap-2" aria-label="Skills used">
                {job.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
