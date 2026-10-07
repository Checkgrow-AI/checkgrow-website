import type { Metadata } from "next";
import { DemoConfirmation } from "@/components/demo/DemoConfirmation";
import { CaseStudies } from "@/components/sections/CaseStudies";

/* Its own URL so analytics can count confirmed bookings as a page view.
   Kept out of search results and the sitemap. */
export const metadata: Metadata = {
  title: "Demo confirmed | Checkgrow",
  description: "Your Checkgrow demo is booked.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/demo-confirmation" },
};

export default function DemoConfirmationPage() {
  return (
    <>
      <DemoConfirmation />
      <CaseStudies afterBooking />
    </>
  );
}
