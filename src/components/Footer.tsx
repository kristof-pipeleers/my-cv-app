import { cv } from "../content/cv";
import { PDF_FILENAME, lastUpdated } from "../content/format";
import { CertificationSignature } from "./Certifications";
import { BrandIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-subtle sm:px-6 lg:px-8">
      <CertificationSignature />
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {cv.person.name} · Last updated {lastUpdated}
        </p>
        <div className="flex items-center gap-5">
          <a href={`${import.meta.env.BASE_URL}${PDF_FILENAME}`} download className="transition-colors hover:text-ink">
            CV (PDF)
          </a>
          {cv.socials.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="transition-colors hover:text-ink"
            >
              <BrandIcon id={s.id} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
