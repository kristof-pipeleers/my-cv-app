import { cv } from "../content/cv";

export default function Toolbox() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 border-t border-line py-8 lg:grid-cols-[13rem_1fr] lg:items-center lg:gap-12">
        <p className="eyebrow">Daily toolbox</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 font-display text-2xl text-muted sm:text-3xl">
          {cv.toolbox.map((tool) => (
            <li key={tool} className="transition-colors hover:text-ink">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
