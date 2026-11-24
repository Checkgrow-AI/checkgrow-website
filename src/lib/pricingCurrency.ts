/* Display estimates only. The commercial plan amounts remain in EUR. */
import { localeInfo, type Locale } from "../i18n/config.ts";

/* Names live in the pricing dictionary (currencyMenu.names), reviewed per
   language, so server and browser always render the same text. */
export const currencies = [
  { code: "EUR", flag: "🇪🇺", symbol: "€" },
  { code: "CHF", flag: "🇨🇭", symbol: "CHF " },
  { code: "USD", flag: "🇺🇸", symbol: "US$" },
  { code: "BRL", flag: "🇧🇷", symbol: "R$ " },
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

/* English keeps en-GB formatting; other languages use their own tag */
const intlTag = (lang: Locale) => (lang === "en" ? "en-GB" : localeInfo[lang].tag);

/* the currency's name in the visitor's language, from the dictionary */
export const currencyName = (code: Currency, names: Readonly<Record<Currency, string>>) => names[code];

export function displayPrice(euros: number, currency: Currency, rate = 1, lang: Locale = "en"): string {
  if (!Number.isFinite(euros) || euros < 0 || !Number.isFinite(rate) || rate <= 0) {
    throw new Error("Invalid display price or exchange rate");
  }
  // Remove floating-point noise before truncation; never round a fraction up.
  const raw = euros * rate;
  const converted = raw + Number.EPSILON * Math.abs(raw);
  const whole = Math.floor(converted);
  if (lang !== "en") {
    return new Intl.NumberFormat(intlTag(lang), { style: "currency", currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(whole);
  }
  const amount = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(whole);
  return `${currencies.find(({ code }) => code === currency)!.symbol}${amount}`;
}

export function rateDateLabel(date: string, lang: Locale = "en"): string {
  return new Intl.DateTimeFormat(intlTag(lang), { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })
    .format(new Date(`${date}T00:00:00Z`));
}
