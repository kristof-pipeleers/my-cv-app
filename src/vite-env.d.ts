/// <reference types="vite/client" />

declare const __BUILD_DATE__: string;

interface ImportMetaEnv {
  /** "dev" for the /dev/ preview build (adds a DEV badge + noindex). */
  readonly MODE: string;
  /** GoatCounter site code (e.g. "kristof"); analytics stay off when unset. */
  readonly VITE_GOATCOUNTER_CODE?: string;
}
