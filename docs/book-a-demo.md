# Book a demo

`/book-a-demo`: two-step booking. Step 1 asks five qualification questions; step 2 shows live free times and books the chosen slot into the **demo calendar**. A time is only offered when it is free in the demo calendar **and** in Bruno's own calendar. Every lead is emailed to **sales@checkgrow.com**.

- Page: `src/app/book-a-demo/`. Form: `src/components/demo/`. Options and goal suggestions: `src/lib/demo.ts`.
- Google auth (one token for Calendar and Gmail): `src/lib/google.ts`. Availability and booking: `src/lib/demoAvailability.ts`. Lead email: `src/lib/leadEmail.ts` (all server only).
- `GET /api/demo-slots` returns free slot start times only. `POST /api/demo-request` validates the answers, re-checks the slot with Google, creates the calendar event and forwards the lead.

## Scheduling rules

Weekdays, 09:00–18:00 Europe/Zagreb, 30-minute slots, 30 minutes clear before and after any busy time, at least 4 hours' notice, 21 days ahead. Google's free/busy decides what is busy: events marked "free", declined and cancelled events do not block. Free/busy is cached for 30 seconds; booking always re-checks without the cache, under a lock.

Each booking creates an event in the demo calendar with a Google Meet link. The visitor is invited by email (`sendUpdates=all`), and every answer is in the event description.

After each booking, an email with every answer, the Meet link and the event link goes to sales@checkgrow.com, with Reply-To set to the visitor. If the calendar is unreachable and nothing could be booked, sales still gets an "ACTION NEEDED · demo not booked" email with the requested time. Email failures are logged loudly and never undo a booking.

## Environment

| Variable | Where | Purpose |
| --- | --- | --- |
| `GOOGLE_CALENDAR_CLIENT_ID` | `.env.local`, Easy Panel | OAuth client (type: Desktop app) |
| `GOOGLE_CALENDAR_CLIENT_SECRET` | `.env.local`, Easy Panel | OAuth client secret |
| `GOOGLE_CALENDAR_REFRESH_TOKEN` | `.env.local`, Easy Panel | Written by `pnpm calendar:auth` |
| `DEMO_CALENDAR_ID` | optional | Calendar that receives bookings. Defaults to the Checkgrow demo calendar (`c_44b4…@group.calendar.google.com`) |
| `DEMO_CONFLICT_CALENDAR_IDS` | optional | Comma-separated calendars that must also be free. Defaults to `bruno@checkgrow.com` |
| `DEMO_LEAD_EMAIL_TO` | optional | Lead email recipient. Defaults to `sales@checkgrow.com` |
| `DEMO_REQUEST_WEBHOOK_URL` | Easy Panel | Lead forwarded to the CRM after booking |

All of them are server-only secrets: never commit them or expose them to the client. Without the Google variables, the page shows "We couldn't load the calendar" and the API returns 503. It never offers invented times.

## One-time Google setup

1. In Google Cloud Console, pick or create a project (for example "Checkgrow Website") and enable the **Google Calendar API** and the **Gmail API**.
2. In Google Auth Platform → Branding / Audience, set the audience to **Internal**, so only checkgrow.com accounts can consent and the refresh token does not expire weekly.
3. Under Clients, create a client of type **Desktop app**. A **Web application** client also works if you add `http://127.0.0.1:53682` under Authorised redirect URIs. Put its ID and **client secret** (it starts with `GOCSPX-`; an `AIza…` API key will not work) in `.env.local` as `GOOGLE_CALENDAR_CLIENT_ID` and `GOOGLE_CALENDAR_CLIENT_SECRET`.
4. Run `pnpm calendar:auth` and approve as bruno@checkgrow.com. The script requests only `calendar.events`, `calendar.freebusy` and `gmail.send` (send only; it cannot read the mailbox), and saves `GOOGLE_CALENDAR_REFRESH_TOKEN` to `.env.local`.
5. Restart `pnpm dev`. Copy the three Google variables into Easy Panel before deploying. Re-running step 4 issues a new refresh token, so update `GOOGLE_CALENDAR_REFRESH_TOKEN` in Easy Panel too.

To revoke access: Google Account → Security → Third-party connections, then run step 4 again.
