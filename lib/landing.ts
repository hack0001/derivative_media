// Remembers the first page of a visit and the site that sent the visitor, so enquiries can say
// which page brought them in. Kept in sessionStorage only (this tab, this visit): no cookies.
const KEY = "dm_landing";

export function rememberLanding() {
  try {
    if (sessionStorage.getItem(KEY)) return;
    let ref = "";
    try { const r = document.referrer ? new URL(document.referrer) : null; if (r && r.host !== location.host) ref = r.host; } catch { /* no referrer */ }
    sessionStorage.setItem(KEY, JSON.stringify({ landing: location.pathname, ref }));
  } catch { /* storage blocked */ }
}

export function landingInfo(): { landing: string; ref: string } {
  try { return { landing: "", ref: "", ...JSON.parse(sessionStorage.getItem(KEY) || "{}") }; } catch { return { landing: "", ref: "" }; }
}
