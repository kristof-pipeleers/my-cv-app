import { BookOpen } from "lucide-react";
import { cv } from "../content/cv";
import { revealDelay } from "../lib/reveal";
import Section from "./Section";

export default function Approach() {
  return (
    <Section id="approach" number="04" label="Approach" title="How I *work*.">
      <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
        {cv.principles.map((q, i) => (
          <article key={q.id} className="bg-bg p-8 sm:p-10" data-reveal style={revealDelay(i * 80)}>
            <span className="font-display text-5xl text-accent tabular-nums">0{i + 1}</span>
            <h3 className="mt-6 font-display text-3xl leading-tight">{q.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{q.description}</p>
            {q.evidence && (
              <a
                href={q.evidence.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex gap-2 border-t border-line pt-4 text-xs leading-relaxed text-subtle transition-colors hover:text-accent"
              >
                <BookOpen className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                <span>{q.evidence.label}</span>
              </a>
            )}
          </article>
        ))}
      </div>

      <div className="mt-20 grid gap-16 md:grid-cols-2">
        <div data-reveal>
          <h3 className="eyebrow">Languages</h3>
          <ul className="mt-6 space-y-5">
            {cv.languages.map((lang) => (
              <li key={lang.name}>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl">{lang.name}</span>
                  <span className="text-sm text-subtle">{lang.level}</span>
                </div>
                <div
                  className="mt-2 h-px w-full bg-line"
                  role="meter"
                  aria-label={`${lang.name} proficiency`}
                  aria-valuenow={lang.proficiency}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="h-[3px] -translate-y-px rounded-full bg-accent" style={{ width: `${lang.proficiency}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal style={revealDelay(100)}>
          <h3 className="eyebrow">Off the clock</h3>
          <ul className="mt-6 flex flex-wrap gap-3">
            {cv.hobbies.map((hobby) => (
              <li key={hobby} className="rounded-full border border-line px-5 py-2.5 font-display text-2xl">
                {hobby}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
