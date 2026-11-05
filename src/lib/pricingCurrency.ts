/* Display estimates only. The commercial plan amounts remain in EUR. */
export const currencies = [
  { code: "EUR", name: "Euro", flag: "🇪🇺", symbol: "€" },
  { code: "CHF", name: "Swiss franc", flag: "🇨🇭", symbol: "CHF " },
  { code: "USD", name: "US dollar", flag: "🇺🇸", symbol: "US$" },
  { code: "BRL", name: "Brazilian real", flag: "🇧🇷", symbol: "R$ " },
] as const;

export type Currency = (typeof currencies)[number]["code"];
export type ExchangeRates = Record<Currency, number>;
export type ExchangeRateSnapshot = {
  base: "EUR";
  date: string;
  rates: ExchangeRates;
};

export const RATE_REFRESH_MS = 60 * 60 * 1000;
// Weekends and public holidays do not have new ECB observations.
export const MAX_RATE_AGE_MS = 7 * 24 * RATE_REFRESH_MS;

export function isCurrency(value: unknown): value is Currency {
  return currencies.some(({ code }) => code === value);
}

export function isExchangeRateSnapshot(value: unknown, now = Date.now()): value is ExchangeRateSnapshot {
  if (!value || typeof value !== "object") return false;
  const { base, date, rates } = value as Partial<ExchangeRateSnapshot>;
  if (base !== "EUR" || typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const timestamp = Date.parse(`${date}T00:00:00Z`);
  if (!Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== date) return false;
  if (timestamp > now || now - timestamp > MAX_RATE_AGE_MS) return false;
  return !!rates && rates.EUR === 1 && currencies.every(({ code }) => (
    typeof rates[code] === "number" && Number.isFinite(rates[code]) && rates[code] > 0 && rates[code] < 1000
  ));
}

export function displayPrice(euros: number, currency: Currency, rate = 1): string {
  if (!Number.isFinite(euros) || euros < 0 || !Number.isFinite(rate) || rate <= 0) {
    throw new Error("Invalid display price or exchange rate");
  }
  // Remove floating-point noise before truncation; never round a fraction up.
  const raw = euros * rate;
  const converted = raw + Number.EPSILON * Math.abs(raw);
  const amount = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(Math.floor(converted));
  return `${currencies.find(({ code }) => code === currency)!.symbol}${amount}`;
}

export function rateDateLabel(date: string): string {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })
    .format(new Date(`${date}T00:00:00Z`));
}
