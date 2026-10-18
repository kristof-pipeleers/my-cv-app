import type { ReactNode } from "react";
import Emphasis from "./Emphasis";

interface Props {
  id: string;
  number: string;
  label: string;
  title: string;
  intro?: string;
  /** Let the content span the full section width below the title (e.g. the experience timeline). */
  wide?: boolean;
  children: ReactNode;
}

/** Numbered editorial section: label column on the left, content on the right. */
export default function Section({ id, number, label, title, intro, wide = false, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 border-t border-line py-20 sm:py-28 lg:grid-cols-[13rem_1fr] lg:gap-12">
        <div className={`eyebrow flex items-baseline gap-3 ${wide ? "" : "lg:sticky lg:top-28 lg:self-start"}`} data-reveal>
          <span className="text-accent tabular-nums">{number}</span>
          <span>{label}</span>
        </div>
        <div className="min-w-0">
          <h2 className="display max-w-3xl text-5xl sm:text-6xl lg:text-7xl" data-reveal>
            <Emphasis text={title} />
          </h2>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted" data-reveal>
              {intro}
            </p>
          )}
          {!wide && <div className="mt-14 sm:mt-16">{children}</div>}
        </div>
        {wide && <div className="mt-6 min-w-0 sm:mt-8 lg:col-span-2">{children}</div>}
      </div>
    </section>
  );
}
