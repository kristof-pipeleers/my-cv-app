import { cv } from "../content/cv";
import { serviceIcons } from "./Icons";
import { revealDelay } from "../lib/reveal";
import Section from "./Section";

export default function Expertise() {
  return (
    <Section id="expertise" number="01" label="Expertise" title="What I *do*.">
      <div className="grid gap-x-10 gap-y-14 md:grid-cols-3">
        {cv.services.map((service, i) => {
          const Icon = serviceIcons[service.icon];
          return (
            <article
              key={service.title}
              className="border-t border-ink pt-6"
              data-reveal
              style={revealDelay(i * 90)}
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow tabular-nums">0{i + 1}</span>
                <Icon className="size-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-8 font-display text-3xl leading-tight">{service.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{service.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
