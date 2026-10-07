# Book a demo

`/book-a-demo`: two-step booking. Step 1 asks five qualification questions; step 2 shows live free times from Bruno's Google Calendar and books the chosen slot.

- Page: `src/app/book-a-demo/`. Form: `src/components/demo/`. Options and goal suggestions: `src/lib/demo.ts`.
- Availability and booking: `src/lib/demoAvailability.ts` (server only).
- `GET /api/demo-slots` returns free slot start times only. `POST /api/demo-request` validates the answers, re-checks the slot with Google, creates the calendar event and forwards the lead.

## Scheduling rules

Weekdays, 09:00–18:00 Europe/Zagreb, 30-minute slots, 30 minutes clear before and after any busy time, at least 4 hours' notice, 21 days ahead. Google's free/busy decides what is busy: events marked "free", declined and cancelled events do not block. Free/busy is cached for 30 seconds; booking always re-checks without the cache, under a lock.

Each booking creates an event in the calendar with a Google Meet link. The visitor is invited by email (`sendUpdates=all`), and every answer is in the event description.

## Environment

| Variable | Where | Purpose |
| --- | --- | --- |
| `GOOGLE_CALENDAR_CLIENT_ID` | `.env.local`, Easy Panel | OAuth client (type: Desktop app) |
| `GOOGLE_CALENDAR_CLIENT_SECRET` | `.env.local`, Easy Panel | OAuth client secret |
| `GOOGLE_CALENDAR_REFRESH_TOKEN` | `.env.local`, Easy Panel | Written by `pnpm calendar:auth` |
| `DEMO_CALENDAR_ID` | optional | Defaults to the owner's primary calendar |
| `DEMO_REQUEST_WEBHOOK_URL` | Easy Panel | Lead forwarded to the CRM after booking |

All of them are server-only secrets: never commit them or expose them to the client. Without the Google variables, the page shows "We couldn't load the calendar" and the API returns 503. It never offers invented times.

## One-time Google setup

1. In Google Cloud Console, pick or create a project (for example "Checkgrow Website") and enable the **Google Calendar API**.
2. In Google Auth Platform → Branding / Audience, set the audience to **Internal**, so only checkgrow.com accounts can consent and the refresh token does not expire weekly.
3. Under Clients, create a client of type **Desktop app**. A **Web application** client also works if you add `http://127.0.0.1:53682` under Authorised redirect URIs. Put its ID and **client secret** (it starts with `GOCSPX-`; an `AIza…` API key will not work) in `.env.local` as `GOOGLE_CALENDAR_CLIENT_ID` and `GOOGLE_CALENDAR_CLIENT_SECRET`.
4. Run `pnpm calendar:auth` and approve as bruno@checkgrow.com. The script requests only `calendar.events` and `calendar.freebusy`, and saves `GOOGLE_CALENDAR_REFRESH_TOKEN` to `.env.local`.
5. Restart `pnpm dev`. Copy the three Google variables into Easy Panel before deploying.

To revoke access: Google Account → Security → Third-party connections, then run step 4 again.
