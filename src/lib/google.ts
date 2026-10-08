/* Server only. Google APIs as bruno@checkgrow.com, through one OAuth
   refresh token (one-time consent: `pnpm calendar:auth`, see
   docs/book-a-demo.md). Scopes: calendar.events, calendar.freebusy and
   gmail.send. Credentials live ONLY in server environment variables:
   GOOGLE_CALENDAR_CLIENT_ID, GOOGLE_CALENDAR_CLIENT_SECRET,
   GOOGLE_CALENDAR_REFRESH_TOKEN. */

const CLIENT_ID = process.env.GOOGLE_CALENDAR_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CALENDAR_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GOOGLE_CALENDAR_REFRESH_TOKEN;

export class GoogleUnavailableError extends Error {}

let token: { value: string; expires: number } | null = null;

async function accessToken() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    throw new GoogleUnavailableError("Google credentials are not set");
  }
  if (token && token.expires - Date.now() > 60_000) return token.value;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
    signal: AbortSignal.timeout(8_000),
  });
  if (!res.ok) {
    throw new GoogleUnavailableError(`token refresh ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  const data: { access_token: string; expires_in: number } = await res.json();
  token = { value: data.access_token, expires: Date.now() + data.expires_in * 1000 };
  return token.value;
}

/* JSON call to a Google API with the owner's token; refreshes once on 401.
   Any failure is a GoogleUnavailableError naming the status. */
export async function googleApi<T>(url: string, init: { method: string; body?: unknown }): Promise<T> {
  for (let attempt = 0; attempt < 2; attempt++) {
    let res: Response;
    try {
      res = await fetch(url, {
        method: init.method,
        headers: {
          Authorization: `Bearer ${await accessToken()}`,
          "Content-Type": "application/json",
        },
        body: init.body === undefined ? undefined : JSON.stringify(init.body),
        signal: AbortSignal.timeout(8_000),
      });
    } catch (e) {
      if (e instanceof GoogleUnavailableError) throw e;
      throw new GoogleUnavailableError(e instanceof Error ? e.message : "Google unreachable");
    }
    if (res.status === 401 && attempt === 0) {
      token = null; // revoked or expired early: refresh once
      continue;
    }
    if (!res.ok) {
      throw new GoogleUnavailableError(`${new URL(url).pathname} ${res.status}: ${(await res.text()).slice(0, 200)}`);
    }
    return res.json() as Promise<T>;
  }
  throw new GoogleUnavailableError("Google auth failed");
}
