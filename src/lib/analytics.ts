/**
 * Cookieless, EU-hosted page view counting via GoatCounter (free for personal sites).
 * Off unless VITE_GOATCOUNTER_CODE is set at build time, and never on the dev preview.
 */
export function loadAnalytics() {
  const code = import.meta.env.VITE_GOATCOUNTER_CODE;
  if (!code || import.meta.env.MODE !== "production") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = `https://${code}.goatcounter.com/count`;
  document.body.appendChild(script);
}
