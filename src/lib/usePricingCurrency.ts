"use client";

import { useCallback, useEffect, useState } from "react";
import { isCurrency, isExchangeRateSnapshot, RATE_REFRESH_MS, type Currency, type ExchangeRateSnapshot } from "./pricingCurrency";

const PREFERENCE_KEY = "checkgrow-pricing-currency";

export function usePricingCurrency() {
  const [selected, setSelected] = useState<Currency>("EUR");
  const [snapshot, setSnapshot] = useState<ExchangeRateSnapshot | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let inFlight = false;
    let checkedAt = 0;
    async function refresh() {
      if (inFlight || controller.signal.aborted) return;
      inFlight = true;
      try {
        const response = await fetch("/api/exchange-rates", {
          signal: AbortSignal.any([controller.signal, AbortSignal.timeout(8000)]),
        });
        if (!response.ok) throw new Error("Rates unavailable");
        const data: unknown = await response.json();
        if (!isExchangeRateSnapshot(data)) throw new Error("Invalid rates");
        if (controller.signal.aborted) return;
        setSnapshot(data);
        setStatus("ready");
        try {
          const preferred = sessionStorage.getItem(PREFERENCE_KEY);
          if (isCurrency(preferred)) setSelected(preferred);
        } catch { /* Storage may be disabled; conversion still works. */ }
      } catch {
        if (controller.signal.aborted) return;
        setSnapshot(null);
        setStatus("error");
      } finally {
        checkedAt = Date.now();
        inFlight = false;
      }
    }
    void refresh();
    const timer = window.setInterval(() => void refresh(), RATE_REFRESH_MS);
    const onVisible = () => {
      if (document.visibilityState === "visible" && Date.now() - checkedAt >= RATE_REFRESH_MS) void refresh();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      controller.abort();
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [attempt]);

  const selectCurrency = useCallback((currency: Currency) => {
    setSelected(currency);
    try { sessionStorage.setItem(PREFERENCE_KEY, currency); } catch { /* Optional preference only. */ }
  }, []);

  const retry = () => { setStatus("loading"); setAttempt((value) => value + 1); };
  const currency = snapshot ? selected : "EUR";
  return { currency, rate: snapshot?.rates[currency] ?? 1, snapshot, status, selectCurrency, retry };
}
