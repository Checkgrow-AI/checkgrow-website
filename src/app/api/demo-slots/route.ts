import { NextResponse } from "next/server";
import { availableSlots, CalendarUnavailableError } from "@/lib/demoAvailability";
import { DEMO_TIME_ZONE } from "@/lib/demo";

/* Free demo slots from Google Calendar free/busy (cached 30 seconds
   server-side). Start times only; no event details leave the server. If the calendar cannot be read the page says so; it never
   offers made-up times. */

export async function GET() {
  try {
    const slots = await availableSlots();
    return NextResponse.json(
      { slots, teamTimeZone: DEMO_TIME_ZONE },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (e) {
    if (e instanceof CalendarUnavailableError) {
      console.error("[demo-slots] calendar unavailable:", e.message);
      return NextResponse.json({ error: "Calendar unavailable" }, { status: 503, headers: { "Cache-Control": "no-store" } });
    }
    throw e;
  }
}
