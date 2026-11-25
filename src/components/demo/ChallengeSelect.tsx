"use client";

/* The "what do you want to fix first?" dropdown. A listbox rather than a
   native <select> so the chosen goal wraps onto a second line instead of
   being cut off (goals run long, especially in German and French). The
   keyboard model follows the pricing currency picker: arrows, Home/End,
   Enter or Space, Escape, Tab, and type-ahead by first letter. */

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { motion } from "motion/react";
import { DemoIcon } from "./DemoIcons";
import styles from "./Demo.module.css";

type Option = { id: string; label: string };

export function ChallengeSelect({
  value,
  options,
  placeholder,
  labelledBy,
  onChange,
}: {
  value: string | null;
  options: readonly Option[];
  placeholder: string;
  labelledBy: string;
  onChange: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(value);
  const [above, setAbove] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();
  const selected = options.find((o) => o.id === value) ?? null;

  useEffect(() => {
    if (!open) return;
    const dismissOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, [open]);

  /* keep the highlighted option in view while moving with the keyboard */
  useEffect(() => {
    if (!open || !active) return;
    listRef.current?.querySelector<HTMLElement>(`[data-value="${CSS.escape(active)}"]`)?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  function show(id: string | null = value ?? options[0]?.id ?? null) {
    const rect = triggerRef.current?.getBoundingClientRect();
    setAbove(!!rect && window.innerHeight - rect.bottom < 360 && rect.top > 360);
    setActive(id);
    setOpen(true);
  }

  function choose(id: string | null, restoreFocus = true) {
    if (!id) return;
    onChange(id);
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
        const index = options.findIndex((o) => o.id === active);
        setActive(options[(index + direction + options.length) % options.length].id);
        return;
      }
      case "Home":
      case "End":
        event.preventDefault();
        show(options[event.key === "Home" ? 0 : options.length - 1].id);
        return;
      case "Enter":
      case " ":
        event.preventDefault();
        if (open) choose(active);
        else show();
        return;
      case "Escape":
        if (open) { event.preventDefault(); event.stopPropagation(); setOpen(false); }
        return;
      case "Tab":
        if (open) choose(active, false);
        return;
      default: {
        if (event.ctrlKey || event.altKey || event.metaKey || event.key.length !== 1 || !/\p{L}/u.test(event.key)) return;
        const key = event.key.toLocaleLowerCase();
        const match = options.find((o) => o.label.toLocaleLowerCase().startsWith(key));
        if (match) { event.preventDefault(); show(match.id); }
      }
    }
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        data-qa="challenge-select"
        aria-labelledby={labelledBy}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-activedescendant={open && active ? `${listId}-${active}` : undefined}
        onKeyDown={onKeyDown}
        onClick={() => (open ? setOpen(false) : show())}
        className={`${styles.input} ${styles.select} flex items-center py-3 text-left leading-snug ${selected ? "" : styles.selectEmpty}`}
      >
        {/* chosen: a check marks the answer; empty: the prompt alone */}
        {selected && <DemoIcon name="check" size={16} className="mr-2.5 shrink-0 text-accent" />}
        <span className="min-w-0 flex-1">{selected ? selected.label : placeholder}</span>
      </button>
      <DemoIcon
        name="chevronRight"
        size={16}
        className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-150 motion-reduce:transition-none ${selected ? "text-muted" : "text-accent"} ${open ? "-rotate-90" : "rotate-90"}`}
      />

      {open && (
        <motion.ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-labelledby={labelledBy}
          initial={{ opacity: 0, y: above ? 4 : -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className={`${styles.listbox} absolute inset-x-0 z-30 max-h-[min(22rem,60vh)] overflow-y-auto p-1.5 ${above ? "bottom-full mb-2" : "top-full mt-2"}`}
        >
          {options.map((o) => {
            const isSelected = o.id === value;
            const isActive = o.id === active;
            return (
              <li
                key={o.id}
                id={`${listId}-${o.id}`}
                data-value={o.id}
                role="option"
                aria-selected={isSelected}
                onPointerMove={() => setActive(o.id)}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(o.id)}
                className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-[10px] px-3 py-2.5 text-[15px] leading-snug ${isActive ? styles.listboxActive : ""}`}
              >
                <span className={`min-w-0 flex-1 ${isSelected ? "font-semibold" : ""}`}>{o.label}</span>
                {isSelected && <DemoIcon name="check" size={16} className="shrink-0 text-accent" />}
              </li>
            );
          })}
        </motion.ul>
      )}
    </div>
  );
}
