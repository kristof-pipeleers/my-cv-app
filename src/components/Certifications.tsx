import type { ReactNode } from "react";
import { BadgeCheck } from "lucide-react";
import { cv } from "../content/cv";
import { asset } from "../content/format";
import type { Certification } from "../content/types";

const certs: Certification[] = cv.certifications;

const fullName = (c: Certification) => `${c.issuer} Certified: ${c.name}${c.code ? ` (${c.code})` : ""}`;

export const formatCertDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { month: "short", year: "numeric" });

/** Wraps a badge in its verification link when there is one. */
function MaybeLink({ cert, className, children }: { cert: Certification; className: string; children: ReactNode }) {
  return cert.url ? (
    <a href={cert.url} target="_blank" rel="noopener noreferrer" className={className} title={`Verify: ${fullName(cert)}`}>
      {children}
    </a>
  ) : (
    <span className={className} title={fullName(cert)}>
      {children}
    </span>
  );
}

/** Hero: badge + name, so the strongest credential is visible at first glance. */
export function HeroCertifications() {
  if (certs.length === 0) return null;
  return (
    <ul className="mt-8 flex flex-wrap gap-3" aria-label="Certifications" data-reveal>
      {certs.map((c) => (
        <li key={c.id}>
          <MaybeLink
            cert={c}
            className="flex items-center gap-3 rounded-2xl border border-line bg-surface/70 py-2 pr-4 pl-2 transition-colors hover:border-accent"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white ring-1 ring-line">
              <img src={asset(`certifications/${c.badge}`)} alt="" width={36} height={36} className="size-9" />
            </span>
            <span className="text-sm leading-tight">
              <span className="flex items-center gap-1 text-xs text-subtle">
                <BadgeCheck className="size-3.5 text-accent" aria-hidden="true" />
                {c.issuer} Certified · {formatCertDate(c.date)}
              </span>
              <span className="font-medium">
                {c.name}
                {c.code && <span className="text-subtle"> · {c.code}</span>}
              </span>
            </span>
          </MaybeLink>
        </li>
      ))}
    </ul>
  );
}

/** Footer: a quiet row of badges, like a signature. Grows as certifications are added. */
export function CertificationSignature() {
  if (certs.length === 0) return null;
  return (
    <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-line pb-6">
      <span className="eyebrow">Certified</span>
      <ul className="flex flex-wrap items-center gap-3" aria-label="Certifications">
        {certs.map((c) => (
          <li key={c.id}>
            <MaybeLink cert={c} className="group flex items-center gap-2 text-xs text-subtle transition-colors hover:text-ink">
              <img
                src={asset(`certifications/${c.badge}`)}
                alt={fullName(c)}
                width={32}
                height={32}
                className="size-9 rounded-lg bg-white p-0.5 ring-1 ring-line grayscale transition duration-300 group-hover:grayscale-0"
              />
              <span>{c.code ?? c.name}</span>
            </MaybeLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
