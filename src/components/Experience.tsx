import { ArrowUpRight } from "lucide-react";
import { cv } from "../content/cv";
import { asset, formatPeriod } from "../content/format";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" number="02" label="Experience" title="Where I've *worked*.">
      <ol className="divide-y divide-line border-y border-line">
        {cv.experience.map((job) => (
          <li key={job.id} className="grid gap-6 py-10 sm:py-12 md:grid-cols-[11rem_1fr] md:gap-10" data-reveal>
            <div className="flex items-center gap-4 md:flex-col md:items-start">
              <img
                src={asset(`experience-logos/${job.logo}`)}
                alt=""
                className="h-12 w-24 rounded-xl bg-white object-contain px-2.5 py-1.5 ring-1 ring-line"
              />
              <div>
                <p className="text-sm font-medium tabular-nums">{formatPeriod(job.start, job.end)}</p>
                {job.end === null && (
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-accent">
                    <span className="size-1.5 animate-pulse rounded-full bg-accent" aria-hidden="true" />
                    Current role
                  </p>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-display text-3xl leading-tight sm:text-4xl">{job.role}</h3>
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
        ))}
      </ol>
    </Section>
  );
}
