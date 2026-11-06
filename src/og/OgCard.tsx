import { MapPin } from "lucide-react";
import { cv } from "../content/cv";
import { asset, currentRole, nextRole } from "../content/format";
import Emphasis from "../components/Emphasis";

const host = cv.person.website.replace(/^https?:\/\//, "").replace(/\/$/, "");

/** The image LinkedIn, Slack and WhatsApp show when someone shares the site. Always light theme. */
export default function OgCard() {
  const cert = cv.certifications[0];
  const role = nextRole ?? currentRole;

  return (
    <div
      id="og-card"
      className="relative flex overflow-hidden bg-bg text-ink"
      style={{ width: 1200, height: 630 }}
    >
      <div className="pointer-events-none absolute -top-40 -left-24 size-[34rem] rounded-full bg-accent/10 blur-[110px]" aria-hidden="true" />

      <div className="relative flex flex-1 flex-col justify-between py-16 pr-10 pl-[72px]">
        <div>
          <p className="eyebrow flex items-center gap-3 !text-[15px]">
            <span className="size-2 rounded-full bg-accent" />
            {cv.person.role}
            <span className="text-line">/</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" />
              {cv.person.location}
            </span>
          </p>
          <h1 className="display mt-7 text-[92px]">{cv.person.name}</h1>
          <p className="mt-6 max-w-[560px] font-display text-[44px] leading-[1.05] tracking-[-0.01em] text-muted">
            <Emphasis text={cv.person.headline} />
          </p>
        </div>

        <div className="flex items-center gap-4">
          {cert && (
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface py-2.5 pr-5 pl-2.5">
              <span className="grid size-14 place-items-center rounded-xl bg-white ring-1 ring-line">
                <img src={asset(`certifications/${cert.badge}`)} alt="" className="size-12" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm text-subtle">{cert.issuer} Certified</span>
                <span className="text-lg font-medium">
                  {cert.name}
                  {cert.code && <span className="text-subtle"> · {cert.code}</span>}
                </span>
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="relative flex w-[400px] shrink-0 flex-col justify-center pr-[72px]">
        <div className="relative h-[460px] overflow-hidden rounded-[2rem] bg-surface ring-1 ring-line">
          <img src={asset(cv.person.portrait)} alt="" className="size-full object-cover object-top" />
          {role && (
            <div className="absolute right-4 bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 p-3">
              <img
                src={asset(`experience-logos/${role.logo}`)}
                alt=""
                className="h-10 w-16 rounded-lg bg-white object-contain px-1.5 py-1 ring-1 ring-line"
              />
              <span className="text-[15px] leading-tight">
                <span className="block text-subtle">{role.upcoming ? "Joining" : "Currently at"}</span>
                <span className="font-medium">{role.organization}</span>
              </span>
            </div>
          )}
        </div>
        <p className="mt-5 text-right text-base font-medium tracking-wide text-subtle">{host}</p>
      </div>
    </div>
  );
}
