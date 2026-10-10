import type { ReactNode } from "react";
import { cv } from "../content/cv";
import { formatJobPeriod, formatPeriod, lastUpdated } from "../content/format";

function Heading({ number, children }: { number: string; children: ReactNode }) {
  return (
    <h2 className="r-heading">
      <span className="r-num">{number}</span>
      {children}
    </h2>
  );
}

const host = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/** One-page A4 CV rendered from the same content as the website. */
export default function Resume() {
  const { person } = cv;

  return (
    <div className="page">
      <header className="r-header">
        <div>
          <h1 className="r-name">{person.name}</h1>
          <p className="r-role">{person.role}</p>
          <p className="r-summary">{person.summary}</p>
        </div>
        <ul className="r-contact">
          <li>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </li>
          <li>{person.phone}</li>
          <li>{person.location}</li>
          <li>
            <a href={person.website}>{host(person.website)}</a>
          </li>
          {cv.socials
            .filter((s) => s.onResume)
            .map((s) => (
              <li key={s.id}>
                <a href={s.url}>{host(s.url)}</a>
              </li>
            ))}
        </ul>
      </header>

      <div className="r-body">
        <main>
          <Heading number="01">Experience</Heading>
          {cv.experience.map((job) => (
            <article key={job.id} className="r-item">
              <div className="r-row">
                <h3 className="r-title">{job.role}</h3>
                <span className="r-period">{formatJobPeriod(job)}</span>
              </div>
              <p className="r-org">{job.organization}</p>
              <ul className="r-bullets">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <ul className="r-tags">
                {job.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}

          <Heading number="02">Education</Heading>
          {cv.education.map((edu) => (
            <article key={edu.id} className="r-item r-edu">
              <div className="r-row">
                <h3 className="r-title">{edu.degree}</h3>
                <span className="r-period">{formatPeriod(edu.start, edu.end)}</span>
              </div>
              <p className="r-org">{edu.school}</p>
            </article>
          ))}
        </main>

        <aside>
          <Heading number="03">Expertise</Heading>
          {cv.services.map((s) => (
            <div key={s.title} className="r-block">
              <h3 className="r-subtitle">{s.title}</h3>
              <p className="r-desc">{s.short ?? s.description}</p>
            </div>
          ))}

          <Heading number="04">How I work</Heading>
          {cv.principles.map((q) => (
            <div key={q.id} className="r-block">
              <h3 className="r-subtitle">{q.title}</h3>
              <p className="r-desc">{q.short ?? q.description}</p>
            </div>
          ))}

          <Heading number="05">Languages</Heading>
          {cv.languages.map((l) => (
            <div key={l.name} className="r-lang">
              <div className="r-row">
                <span className="r-subtitle">{l.name}</span>
                <span className="r-period">{l.level}</span>
              </div>
              <div className="r-bar">
                <span style={{ width: `${l.proficiency}%` }} />
              </div>
            </div>
          ))}

          <Heading number="06">Off the clock</Heading>
          <p className="r-desc">{cv.hobbies.join(" · ")}</p>
        </aside>
      </div>

      <footer className="r-footer">
        <span>{host(person.website)}</span>
        <span>Updated {lastUpdated}</span>
      </footer>
    </div>
  );
}
