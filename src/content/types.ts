/**
 * Content model for the CV. `cv.ts` is the single source of truth for both
 * the website and the PDF — never hardcode CV content in components.
 *
 * Conventions:
 * - Wrap a word in *asterisks* in headlines to render it as an accent italic.
 * - `end: null` means "Present".
 * - Logos live in public/assets/experience-logos/ and public/assets/education-logos/.
 * - `short` fields are optional condensed copies used by the one-page PDF.
 * - Never name clients or their internal systems/people without permission.
 */

export type ServiceIcon = "database" | "chart" | "brain";

export interface Person {
  name: string;
  role: string;
  /** Hero headline. Supports *emphasis*. */
  headline: string;
  summary: string;
  /** City-level only: everything in this file ends up in the public JS bundle and PDF. */
  location: string;
  email: string;
  phone: string;
  website: string;
  portrait: string;
}

export interface Social {
  id: "linkedin" | "github" | "instagram";
  label: string;
  url: string;
  /** Include on the PDF header. */
  onResume?: boolean;
}

export interface LinkedInPost {
  /** "repost" = reposted someone else's post (text is your comment, may be empty). */
  type: "post" | "repost";
  date: string;
  url: string;
  text: string;
}

export interface Writing {
  /** LinkedIn post URLs to show, in order. Empty = the latest `max` public posts. */
  featured: string[];
  max: number;
}

export interface StackItem {
  name: string;
  /** Key in src/content/logos.ts; without one the card shows a monogram. */
  logo?: string;
  /** Part of the upcoming role's stack: shows a "Next" marker. */
  next?: boolean;
}

export interface Service {
  title: string;
  icon: ServiceIcon;
  description: string;
  short?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  website?: string;
  logo: string;
  start: number;
  /** e.g. "November": shown for upcoming roles. */
  startMonth?: string;
  end: number | null;
  /** Signed but not started: shown as "Starting <month> <year>", not as the current role. */
  upcoming?: boolean;
  highlights: string[];
  tags: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  logo?: string;
  start: number;
  end: number;
  description?: string;
}

export interface Principle {
  id: string;
  title: string;
  description: string;
  short?: string;
  /** One public source supporting the principle (website only). */
  evidence?: { label: string; url: string };
}

export interface Language {
  name: string;
  level: string;
  /** 0–100 */
  proficiency: number;
}

export interface CV {
  person: Person;
  socials: Social[];
  stack: StackItem[];
  services: Service[];
  experience: Experience[];
  education: Education[];
  principles: Principle[];
  languages: Language[];
  hobbies: string[];
  writing: Writing;
}
