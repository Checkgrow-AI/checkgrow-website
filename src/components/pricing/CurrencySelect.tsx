"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { motion } from "motion/react";
import { currencies, type Currency } from "@/lib/pricingCurrency";

type Props = {
  value: Currency;
  ratesReady: boolean;
  onChange: (currency: Currency) => void;
};

/* Select-only combobox: focus stays on the trigger, while arrow keys move
   the active option. A selection is committed with Enter, Space, Tab or click. */
export function CurrencySelect({ value, ratesReady, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Currency>(value);
  const [above, setAbove] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const selected = currencies.find(({ code }) => code === value)!;
  const enabled = currencies.filter(({ code }) => ratesReady || code === "EUR");
  const activeCode = ratesReady ? active : "EUR";

  useEffect(() => {
    if (!open) return;
    const dismissOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, [open]);

  function show(currency = value) {
    const rect = triggerRef.current?.getBoundingClientRect();
    setAbove(!!rect && window.innerHeight - rect.bottom < 264 && rect.top > 264);
    setActive(currency);
    setOpen(true);
  }

  function choose(currency: Currency, restoreFocus = true) {
    if (!ratesReady && currency !== "EUR") return;
    onChange(currency);
    setOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp": {
        event.preventDefault();
        if (!open) { show(); return; }
        const direction = event.key === "ArrowDown" ? 1 : -1;
        const index = enabled.findIndex(({ code }) => code === activeCode);
        setActive(enabled[(index + direction + enabled.length) % enabled.length].code);
        return;
      }
      case "Home":
      case "End": {
        event.preventDefault();
        show(enabled[event.key === "Home" ? 0 : enabled.length - 1].code);
        return;
      }
      case "Enter":
      case " ":
        event.preventDefault();
        if (open) choose(activeCode);
        else show();
        return;
      case "Escape":
        if (open) { event.preventDefault(); event.stopPropagation(); setOpen(false); }
        return;
      case "Tab":
        if (open) choose(activeCode, false);
        return;
      default: {
        if (event.ctrlKey || event.altKey || event.metaKey || !/^[a-z]$/i.test(event.key)) return;
        const match = enabled.find(({ code, name }) => code.toLowerCase().startsWith(event.key.toLowerCase()) || name.toLowerCase().startsWith(event.key.toLowerCase()));
        if (match) { event.preventDefault(); show(match.code); }
      }
    }
  }

  return (
    <div
      ref={rootRef}
      className="relative shrink-0"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        id="pricing-currency"
        type="button"
        role="combobox"
        aria-label={`Display currency: ${selected.name} (${value})`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-activedescendant={open ? `${listId}-${activeCode}` : undefined}
        aria-describedby="pricing-currency-note"
        onKeyDown={onKeyDown}
        onClick={() => open ? setOpen(false) : show()}
        className={`inline-flex h-14 w-26 items-center justify-center gap-2 rounded-full bg-raised text-sm font-semibold text-foreground shadow-soft ring-1 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${open ? "ring-accent/60" : "ring-line hover:ring-muted"}`}
      >
        <span aria-hidden className="text-base leading-none">{selected.flag}</span>
        <span>{value}</span>
        <svg aria-hidden width="12" height="12" viewBox="0 0 12 12" className={`shrink-0 text-muted transition-transform duration-150 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}>
          <path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <motion.ul
          id={listId}
          role="listbox"
          aria-label="Display currency"
          initial={{ opacity: 0, y: above ? 4 : -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className={`absolute left-0 z-50 w-64 max-w-[calc(100vw-48px)] rounded-card bg-raised p-1.5 shadow-raised ring-1 ring-line ${above ? "bottom-full mb-2" : "top-full mt-2"}`}
        >
          {currencies.map((currency) => {
            const disabled = currency.code !== "EUR" && !ratesReady;
            const isSelected = currency.code === value;
            const isActive = currency.code === activeCode;
            return (
              <li
                key={currency.code}
                id={`${listId}-${currency.code}`}
                role="option"
                aria-selected={isSelected}
                aria-disabled={disabled || undefined}
                onPointerMove={() => { if (!disabled) setActive(currency.code); }}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(currency.code)}
                className={`flex min-h-14 items-center gap-3 rounded-sm px-3 py-2 text-sm transition-colors duration-150 ${disabled ? "cursor-not-allowed text-muted opacity-50" : isActive ? "cursor-pointer bg-brand/15 text-foreground" : "cursor-pointer text-foreground"}`}
              >
                <span aria-hidden className="text-xl leading-none">{currency.flag}</span>
                <span className="min-w-0 flex-1">
                  <span className={`block font-semibold ${isSelected ? "text-accent" : ""}`}>{currency.code}</span>
                  <span className="block text-xs text-muted">{currency.name}</span>
                </span>
                {isSelected && (
                  <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" className="shrink-0 text-accent">
                    <path d="m3 8 3.2 3.2L13 4.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </li>
            );
          })}
        </motion.ul>
      )}
    </div>
  );
}
