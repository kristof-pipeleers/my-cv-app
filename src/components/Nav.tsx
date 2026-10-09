import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { cv } from "../content/cv";
import { PDF_FILENAME } from "../content/format";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8" aria-label="Main">
        <a href="#top" className="font-display text-2xl tracking-tight">
          {cv.person.name}
        </a>
        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`${import.meta.env.BASE_URL}${PDF_FILENAME}`}
            download
            className="btn btn-primary hidden py-2.5 sm:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}
