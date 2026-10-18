import { ArrowUpRight } from "lucide-react";
import { cv } from "../content/cv";
import { asset, formatJobPeriod } from "../content/format";
import type { Experience as Job } from "../content/types";
import { revealDelay } from "../lib/reveal";
import Section from "./Section";

type Status = "upcoming" | "current" | "past";

const statusOf = (job: Job): Status => (job.upcoming ? "upcoming" : job.end === null ? "current" : "past");

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
 * Vertical career timeline (inspired by spott.io/careers): a line with status nodes on the left.
 * On wider screens each role has a meta column (period, status, logo) next to its details.
 * Most recent role first.
 */
export default function Experience() {
  const jobs: Job[] = cv.experience;

  return (
    <Section id="experience" number="02" label="Experience" title="Where I've *worked*.">
      <ol className="relative grid gap-16">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-line" />

        {jobs.map((job, i) => {
          const status = statusOf(job);
          const label = statusLabel[status];
          return (
            <li
              key={job.id}
              className="relative pl-10 sm:pl-12 md:grid md:grid-cols-[10rem_1fr] md:gap-10"
              data-reveal
              style={revealDelay(i * 120)}
            >
              <Node status={status} />

              <div>
                <div className="-mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-sm font-medium tabular-nums">{formatJobPeriod(job)}</p>
                  {label && (
                    <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">{label}</span>
                  )}
                </div>

                <img
                  src={asset(`experience-logos/${job.logo}`)}
                  alt=""
                  className="mt-5 h-12 w-24 rounded-xl bg-white object-contain px-2.5 py-1.5 ring-1 ring-line"
                />
              </div>

              <div className="mt-6 md:mt-0">
                <h3 className="-mt-1 font-display text-3xl leading-tight sm:text-4xl">{job.role}</h3>
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

                <ul className="mt-6 space-y-3 leading-relaxed text-muted">
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
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
