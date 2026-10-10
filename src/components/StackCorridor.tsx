import { useEffect, useRef, useState } from "react";
import { cv } from "../content/cv";
import { nextRole } from "../content/format";
import { logos } from "../content/logos";
import type { StackItem } from "../content/types";
import Emphasis from "./Emphasis";

const DURATION = 30; // seconds for one card to travel the corridor

/** Each logo is defined once as a <symbol>; cards reuse it, so IDs inside the SVGs never clash. */
function LogoSprite({ keys }: { keys: string[] }) {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      {keys.map((key) => (
        // Static SVG markup from src/content/logos.ts (open-licensed brand icons).
        <symbol key={key} id={`logo-${key}`} viewBox={logos[key].viewBox} dangerouslySetInnerHTML={{ __html: logos[key].body }} />
      ))}
    </svg>
  );
}

function Logo({ item, className }: { item: StackItem; className?: string }) {
  if (!item.logo || !logos[item.logo]) return null;
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#logo-${item.logo}`} width="100%" height="100%" />
    </svg>
  );
}

function Card({ item }: { item: StackItem }) {
  return (
    <>
      {item.next && <span className="corridor-next">Next</span>}
      {item.logo ? (
        <Logo item={item} className="corridor-logo" />
      ) : (
        <span className="corridor-wordmark">{item.name}</span>
      )}
      {item.logo && <span className="corridor-name">{item.name}</span>}
    </>
  );
}

/** Spott-style 3D corridor: tool cards fly out of a vanishing point along two walls. */
export default function StackCorridor() {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const { stack } = cv;
  const nextTools = stack.filter((t) => t.next).map((t) => t.name);
  // 1.5 laps of the list sets the spacing between cards along the walls.
  const cards = [...stack, ...stack.slice(0, Math.ceil(stack.length / 2))];

  // Only animate while the corridor is on screen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setPaused(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section aria-labelledby="stack-title" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div ref={ref} className={`corridor ${paused ? "is-paused" : ""}`}>
        <LogoSprite keys={[...new Set(stack.flatMap((t) => (t.logo && logos[t.logo] ? [t.logo] : [])))]} />
        <div className="relative z-10 mx-auto max-w-xl px-6 pt-12 text-center sm:pt-16">
          <p className="eyebrow">Toolbox</p>
          <h2 id="stack-title" className="display mt-4 text-5xl sm:text-6xl">
            <Emphasis text="Tools I *build with*." />
          </h2>
          {nextRole && nextTools.length > 0 && (
            <p className="mt-4 text-muted">
              From Microsoft Fabric to my next stack at {nextRole.organization}: {nextTools.join(", ")}.
            </p>
          )}
        </div>

        <div className="corridor-space" aria-hidden="true">
          {cards.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="corridor-card"
              data-side={i % 2 ? "l" : "r"}
              style={{ animationDuration: `${DURATION}s`, animationDelay: `${-(i * DURATION) / cards.length}s` }}
            >
              <Card item={item} />
            </div>
          ))}
        </div>

        {/* Readable list for screen readers and reduced-motion users. */}
        <ul className="corridor-static">
          {stack.map((item) => (
            <li key={item.name}>
              {item.logo && <Logo item={item} className="size-5" />}
              {item.name}
              {item.next && <span className="text-xs text-accent">Next</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
