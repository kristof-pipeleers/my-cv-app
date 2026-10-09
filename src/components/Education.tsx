import { cv } from "../content/cv";
import { asset, formatPeriod } from "../content/format";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" number="03" label="Education" title="What I've *studied*.">
      <ol className="divide-y divide-line border-y border-line">
        {cv.education.map((edu) => (
          <li key={edu.id} className="grid gap-4 py-8 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-6" data-reveal>
            {edu.logo ? (
              <img
                src={asset(`education-logos/${edu.logo}`)}
                alt=""
                className="size-12 rounded-xl bg-white object-contain p-1.5 ring-1 ring-line"
              />
            ) : (
              <span />
            )}
            <div>
              <h3 className="font-display text-2xl leading-snug sm:text-[1.75rem]">{edu.degree}</h3>
              <p className="mt-1 text-accent">{edu.school}</p>
              {edu.description && <p className="mt-3 max-w-2xl leading-relaxed text-muted">{edu.description}</p>}
            </div>
            <p className="text-sm font-medium tabular-nums text-subtle sm:pt-2 sm:text-right">
              {formatPeriod(edu.start, edu.end)}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
