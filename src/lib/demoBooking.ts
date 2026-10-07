/* Hand-off from the booking form to /demo-confirmation. The details stay
   in this tab's sessionStorage, never in the URL, so no personal data
   reaches analytics page URLs. A direct visit (or another tab) simply
   finds nothing and the page shows its general confirmation. */

export const DEMO_BOOKING_KEY = "checkgrow-demo-booking";

export type DemoBookingSummary = {
  firstName: string;
  email: string;
  website: string;
  slot: string;
  timeZone: string;
  /* set once the generate_lead conversion has been sent, so a reload
     of the confirmation page never counts the booking twice */
  tracked?: boolean;
};

export function saveDemoBooking(booking: DemoBookingSummary) {
  try {
    sessionStorage.setItem(DEMO_BOOKING_KEY, JSON.stringify(booking));
  } catch {
    // storage blocked: the confirmation page falls back to its general message
  }
}
