import { ArrowRight, Download, MapPin } from "lucide-react";
import { cv } from "../content/cv";
import { PDF_FILENAME, asset, currentRole } from "../content/format";
import { revealDelay } from "../lib/reveal";
import Emphasis from "./Emphasis";
import { BrandIcon } from "./Icons";

export default function Hero() {
  const { person } = cv;

  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:px-8">
      <div className="grid items-end gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
        <div>
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1" data-reveal>
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {person.role}
            </span>
            <span aria-hidden="true">/</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" aria-hidden="true" />
              {person.location}
            </span>
          </p>

          <h1 className="display mt-8 text-[3.4rem] sm:text-7xl lg:text-[6.5rem]" data-reveal>
            <Emphasis text={person.headline} />
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" data-reveal>
            {person.summary}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3" data-reveal>
            <a href={`${import.meta.env.BASE_URL}${PDF_FILENAME}`} download className="btn btn-primary">
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
            <a href="#contact" className="btn btn-ghost group">
              Get in touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <ul className="ml-1 flex items-center gap-1">
              {cv.socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-accent"
                  >
                    <BrandIcon id={s.id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-xs lg:max-w-none" data-reveal style={revealDelay(150)}>
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface ring-1 ring-line">
            <img
              src={asset(person.portrait)}
              alt={`Portrait of ${person.name}`}
              width={500}
              height={500}
              fetchPriority="high"
              className="size-full object-cover"
            />
          </div>
          {currentRole && (
            <figcaption className="absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 p-3 pr-4 shadow-xl shadow-ink/5 backdrop-blur sm:left-6 sm:right-auto">
              <img
                src={asset(`experience-logos/${currentRole.logo}`)}
                alt=""
                className="h-9 w-16 rounded-lg bg-white object-contain px-1.5 py-1 ring-1 ring-line"
              />
              <span className="text-sm leading-tight">
                <span className="block text-subtle">Currently at</span>
                <span className="font-medium">{currentRole.organization}</span>
              </span>
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}
