/// <reference types="vite/client" />

/** ISO date of the last change to src/content/cv.ts (see vite.config.ts). */
declare const __CV_UPDATED__: string;

interface ImportMetaEnv {
  /** "dev" for the /dev/ preview build (adds a DEV badge + noindex). */
  readonly MODE: string;
  /** GoatCounter site code (e.g. "kristof"); analytics stay off when unset. */
  readonly VITE_GOATCOUNTER_CODE?: string;
}
