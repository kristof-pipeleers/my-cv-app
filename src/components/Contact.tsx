import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { cv } from "../content/cv";
import Emphasis from "./Emphasis";
import { BrandIcon } from "./Icons";

export default function Contact() {
  const { person } = cv;
  const linkedin = cv.socials.find((s) => s.id === "linkedin");

  const details = [
    { icon: Mail, label: person.email, href: `mailto:${person.email}` },
    { icon: Phone, label: person.phone, href: `tel:${person.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: person.location },
  ];

  return (
    <section id="contact" className="px-2 pb-2 sm:px-3 sm:pb-3">
      <div className="relative overflow-hidden rounded-[2rem] bg-band text-band-ink">
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-accent/25 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="eyebrow !text-band-muted flex items-baseline gap-3" data-reveal>
            <span className="text-[#60a5fa]">05</span> Contact
          </p>
          <h2 className="display mt-8 max-w-4xl text-6xl sm:text-7xl lg:text-8xl [&_em]:text-[#60a5fa]" data-reveal>
            <Emphasis text="Let's build something *reliable*." />
          </h2>

          <div className="mt-12 flex flex-wrap gap-3" data-reveal>
            <a href={`mailto:${person.email}`} className="btn bg-band-ink text-band hover:bg-[#60a5fa] hover:text-band">
              <Mail className="size-4" aria-hidden="true" />
              Send me an email
            </a>
            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/20 hover:border-white/60"
              >
                <BrandIcon id="linkedin" />
                Connect on LinkedIn
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>

          <ul className="mt-20 grid gap-6 border-t border-white/10 pt-10 text-band-muted sm:grid-cols-3">
            {details.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3">
                <Icon className="size-4 shrink-0 text-[#60a5fa]" aria-hidden="true" />
                {href ? (
                  <a href={href} className="transition-colors hover:text-band-ink">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
