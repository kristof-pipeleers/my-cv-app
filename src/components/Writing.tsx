import { ArrowUpRight, Globe, Plus, Repeat2 } from "lucide-react";
import { cv } from "../content/cv";
import { asset, lastUpdated, writingPosts } from "../content/format";
import type { LinkedInPost } from "../content/types";
import { revealDelay } from "../lib/reveal";
import { BrandIcon } from "./Icons";
import Section from "./Section";

const linkedin = cv.socials.find((s) => s.id === "linkedin");
const profileUrl = linkedin?.url.replace(/\/$/, "") ?? "https://www.linkedin.com";
const firstName = cv.person.name.split(" ")[0];

const formatDate = (raw: string) => {
  const d = new Date(raw.replace(" ", "T"));
  return Number.isNaN(d.getTime()) ? raw : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

/** Post text with #hashtags highlighted, like in the LinkedIn feed. */
function PostText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(#[\p{L}\p{N}_]+)/u).map((part, i) =>
        part.startsWith("#") ? (
          <span key={i} className="font-medium text-linkedin">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

function Author({ date }: { date: string }) {
  return (
    <div className="flex items-start gap-3 px-4 pt-4">
      <img src={asset(cv.person.portrait)} alt="" className="size-11 shrink-0 rounded-full bg-bg object-cover ring-1 ring-line" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{cv.person.name}</p>
        <p className="truncate text-xs text-subtle">{cv.person.role}</p>
        <p className="mt-0.5 flex items-center gap-1 text-xs text-subtle">
          {formatDate(date)} · <Globe className="size-3" aria-label="Public" />
        </p>
      </div>
      <BrandIcon id="linkedin" className="size-4 shrink-0 text-linkedin" />
    </div>
  );
}

function PostCard({ post, index }: { post: LinkedInPost; index: number }) {
  const isRepost = post.type === "repost";
  const long = post.text.length > 280;

  return (
    <article
      className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-line bg-surface md:w-auto"
      data-reveal
      style={revealDelay(index * 90)}
    >
      {isRepost && (
        <p className="flex items-center gap-2 border-b border-line px-4 py-2.5 text-xs text-subtle">
          <Repeat2 className="size-3.5" aria-hidden="true" />
          {firstName} reposted · {formatDate(post.date)}
        </p>
      )}

      {post.text && <Author date={post.date} />}

      <div className="flex-1 px-4 py-3 text-sm leading-relaxed">
        {post.text && (
          <p className="line-clamp-6 whitespace-pre-line">
            <PostText text={post.text} />
          </p>
        )}
        {long && (
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs font-medium text-subtle hover:text-linkedin">
            …see more
          </a>
        )}
        {isRepost && (
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 rounded-xl border border-line p-3 transition-colors hover:border-linkedin ${post.text ? "mt-3" : ""}`}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-linkedin">
              <Repeat2 className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-medium">Shared a post</span>
              <span className="text-xs text-subtle">Open the original on LinkedIn</span>
            </span>
          </a>
        )}
      </div>

      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-auto flex items-center justify-between border-t border-line px-4 py-3 text-xs font-semibold text-muted transition-colors hover:text-linkedin"
      >
        View on LinkedIn
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </article>
  );
}

/**
 * LinkedIn activity, styled like an embedded LinkedIn widget but rendered from synced data
 * (npm run linkedin:sync): no LinkedIn scripts, iframes or cookies on the site.
 */
export default function Writing() {
  if (writingPosts.length === 0) return null;

  return (
    <Section id="writing" number="05" label="LinkedIn" title="Latest from *LinkedIn*.">
      <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-xl shadow-ink/5" data-reveal>
        <header className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-linkedin text-white">
              <BrandIcon id="linkedin" className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="font-semibold">Activity</p>
              <p className="truncate text-xs text-subtle">Posts &amp; reposts by {cv.person.name}</p>
            </div>
          </div>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-linkedin px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Plus className="size-4" aria-hidden="true" />
            Follow
          </a>
        </header>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto bg-bg p-4 sm:p-6 md:grid md:grid-cols-3 md:overflow-visible">
          {writingPosts.map((post, i) => (
            <PostCard key={post.url} post={post} index={i} />
          ))}
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-line px-5 py-3 text-xs text-subtle sm:px-6">
          <span>Synced from LinkedIn · {lastUpdated}</span>
          <a
            href={`${profileUrl}/recent-activity/all/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium transition-colors hover:text-linkedin"
          >
            See all activity
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </footer>
      </div>
    </Section>
  );
}
