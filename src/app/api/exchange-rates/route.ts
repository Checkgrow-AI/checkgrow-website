import { exchangeRateResponse } from "@/lib/pricingExchangeRates";

// Public, read-only EUR reference rates. No account or tenant data.
export const dynamic = "force-dynamic";

export async function GET() {
  return exchangeRateResponse();
}
