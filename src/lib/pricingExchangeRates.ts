import { isExchangeRateSnapshot, RATE_REFRESH_MS, type ExchangeRateSnapshot } from "./pricingCurrency";

export const EXCHANGE_RATE_URL = "https://api.frankfurter.dev/v2/rates?base=EUR&quotes=CHF,USD,BRL&providers=ecb";

export function parseEcbRates(data: unknown, now = Date.now()): ExchangeRateSnapshot {
  if (!Array.isArray(data) || data.length !== 3) throw new Error("Unexpected exchange-rate response");
  const rates: Record<string, number> = { EUR: 1 };
  let date: unknown;
  for (const row of data) {
    if (!row || row.base !== "EUR" || !["CHF", "USD", "BRL"].includes(row.quote) || row.quote in rates) {
      throw new Error("Unexpected exchange-rate currency");
    }
    if (date !== undefined && row.date !== date) throw new Error("Inconsistent exchange-rate dates");
    date = row.date;
    rates[row.quote] = row.rate;
  }
  const snapshot = { base: "EUR", date, rates };
  if (!isExchangeRateSnapshot(snapshot, now)) throw new Error("Invalid or outdated exchange rates");
  return snapshot;
}

/* A fixed public feed: no client URL, identity, cookies or credentials are
   forwarded. Share in-flight requests and cache validated rates per process. */
export function createExchangeRateLoader(fetcher: typeof fetch = fetch, now = Date.now) {
  let cached: { snapshot: ExchangeRateSnapshot; at: number } | undefined;
  let pending: Promise<ExchangeRateSnapshot> | undefined;
  let retryAfter = 0;

  return async function load(): Promise<ExchangeRateSnapshot> {
    if (cached && now() - cached.at < RATE_REFRESH_MS && isExchangeRateSnapshot(cached.snapshot, now())) {
      return cached.snapshot;
    }
    if (pending) return pending;
    if (now() < retryAfter) throw new Error("Exchange rates temporarily unavailable");

    pending = (async () => {
      try {
        const response = await fetcher(EXCHANGE_RATE_URL, {
          headers: { Accept: "application/json" },
          cache: "no-store",
          redirect: "error",
          signal: AbortSignal.timeout(5000),
        });
        if (!response.ok) throw new Error(`Exchange-rate provider returned ${response.status}`);
        const snapshot = parseEcbRates(await response.json(), now());
        cached = { snapshot, at: now() };
        return snapshot;
      } catch (error) {
        retryAfter = now() + 60_000;
        throw error;
      }
    })();
    try {
      return await pending;
    } finally {
      pending = undefined;
    }
  };
}

export const loadExchangeRates = createExchangeRateLoader();

export async function exchangeRateResponse(load = loadExchangeRates): Promise<Response> {
  try {
    return Response.json(await load(), { headers: { "Cache-Control": "public, max-age=300" } });
  } catch {
    console.warn("[pricing-exchange-rates] Rates unavailable; pricing will remain in EUR.");
    return Response.json({ error: "Exchange rates temporarily unavailable" }, {
      status: 503,
      headers: { "Cache-Control": "no-store", "Retry-After": "60" },
    });
  }
}
