/* dataLayer events for GTM. The site names every conversion step itself,
   so the container never guesses from button text or URLs. Events carry
   no personal data (no email, phone or name).

     demo_form_start · first answer in the booking form
     demo_form_step  · each question or step shown (form_step, form_step_number)
     lead_submitted  · contact details accepted by /api/demo-lead (conversion 1)
     demo_booked     · calendar booking confirmed (conversion 2)

   Conversions wait for Usercentrics' consent_status so GTM's consent
   conditions are known when the event lands (max 4 s). */

type Payload = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: Payload[];
  }
}

export function track(event: string, params: Payload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

const consentKnown = () =>
  (window.dataLayer ?? []).some((e) => e && (e as Payload).event === "consent_status");

export function trackAfterConsent(event: string, params: Payload = {}) {
  if (typeof window === "undefined") return;
  if (consentKnown()) return track(event, params);
  let done = false;
  const fire = () => {
    if (done) return;
    done = true;
    window.clearInterval(poll);
    window.clearTimeout(timer);
    track(event, params);
  };
  const poll = window.setInterval(() => consentKnown() && fire(), 100);
  const timer = window.setTimeout(fire, 4000);
}

/* id shared by the browser event and the server-side lead, so Meta and
   Google Ads can deduplicate if server-side conversions are added later */
export const newEventId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
