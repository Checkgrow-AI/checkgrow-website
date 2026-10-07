/* One-time consent for Book a demo's Google Calendar access.
   Run: pnpm calendar:auth (reads .env.local).
   Needs GOOGLE_CALENDAR_CLIENT_ID and GOOGLE_CALENDAR_CLIENT_SECRET (the
   OAuth client secret, starting GOCSPX-, not an API key). Works with a
   "Desktop app" client, or a "Web application" client that lists
   http://127.0.0.1:53682 as an authorised redirect URI. Opens Google's consent page, receives the
   code on a loopback port, and writes GOOGLE_CALENDAR_REFRESH_TOKEN into
   .env.local. Sign in as the calendar owner (bruno@checkgrow.com).
   Scopes: create events + read free/busy. Nothing else. */

import http from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";

const CLIENT_ID = process.env.GOOGLE_CALENDAR_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CALENDAR_CLIENT_SECRET;
const SCOPES = [
  "https://www.googleapis.com/auth/calendar.events",
  "https://www.googleapis.com/auth/calendar.freebusy",
];
const ENV_FILE = ".env.local";
const PORT = 53682;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Add GOOGLE_CALENDAR_CLIENT_ID and GOOGLE_CALENDAR_CLIENT_SECRET to .env.local first.");
  process.exit(1);
}
if (!CLIENT_SECRET.startsWith("GOCSPX-")) {
  console.error(
    "GOOGLE_CALENDAR_CLIENT_SECRET doesn't look like an OAuth client secret (they start with GOCSPX-).\n" +
      "Copy it from Google Auth Platform → Clients → your client → Client secrets. An API key (AIza…) won't work.",
  );
  process.exit(1);
}

const server = http.createServer();
server.on("error", (e) => {
  console.error(`Couldn't open http://127.0.0.1:${PORT}: ${e.message}`);
  process.exit(1);
});
server.listen(PORT, "127.0.0.1", () => {
  const redirect = `http://127.0.0.1:${PORT}`;
  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  url.search = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: redirect,
    response_type: "code",
    scope: SCOPES.join(" "),
    access_type: "offline",
    prompt: "consent",
    login_hint: "bruno@checkgrow.com",
  }).toString();

  console.log("Opening Google consent in your browser. If it doesn't open, visit:\n" + url + "\n");
  execFile("open", [url.toString()], () => {});

  server.on("request", async (req, res) => {
    const params = new URL(req.url, redirect).searchParams;
    const code = params.get("code");
    if (!code) {
      res.end(params.get("error") ? `Consent failed: ${params.get("error")}` : "Waiting for Google…");
      return;
    }
    try {
      const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          code,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          redirect_uri: redirect,
          grant_type: "authorization_code",
        }),
      });
      const data = await tokenRes.json();
      if (!data.refresh_token) throw new Error(JSON.stringify(data));
      const granted = (data.scope ?? "").split(" ");
      const missing = SCOPES.filter((s) => !granted.includes(s));
      if (missing.length) throw new Error(`Consent did not grant: ${missing.join(", ")}`);

      let env = "";
      try {
        env = await readFile(ENV_FILE, "utf8");
      } catch {}
      const line = `GOOGLE_CALENDAR_REFRESH_TOKEN=${data.refresh_token}`;
      env = /^GOOGLE_CALENDAR_REFRESH_TOKEN=.*$/m.test(env)
        ? env.replace(/^GOOGLE_CALENDAR_REFRESH_TOKEN=.*$/m, line)
        : `${env.trimEnd()}\n${line}\n`;
      await writeFile(ENV_FILE, env);

      res.end("Checkgrow calendar connected. You can close this tab.");
      console.log(`Saved GOOGLE_CALENDAR_REFRESH_TOKEN to ${ENV_FILE}. Restart the dev server to use it.`);
    } catch (e) {
      res.end("Something went wrong; see the terminal.");
      console.error("Token exchange failed:", e.message);
      process.exitCode = 1;
    } finally {
      server.close();
    }
  });
});
