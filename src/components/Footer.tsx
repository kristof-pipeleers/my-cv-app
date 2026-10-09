import { cv } from "../content/cv";
import { PDF_FILENAME, lastUpdated } from "../content/format";
import { BrandIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
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
    </footer>
  );
}
