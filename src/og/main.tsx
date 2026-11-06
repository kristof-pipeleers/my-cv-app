// Social preview card (1200×630), screenshotted by scripts/generate-pdf.mjs into public/og-image.png.
// Only served by the dev server during generation; it is not part of the production build.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "../index.css";
import OgCard from "./OgCard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OgCard />
  </StrictMode>,
);
