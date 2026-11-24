"use client";

/* Client side of i18n: the active language and the dictionary namespaces
   the current page handed down. The layout provides "common"; a page adds
   its own namespaces with <Messages>, so a page only ever ships its own
   copy, in its own language. */

import NextLink from "next/link";
import { createContext, useContext, useMemo, type ComponentProps, type ReactNode } from "react";
import { localePath, type Locale } from "./config";
import type { Dictionary } from "./dictionaries";
import { translateMockup, type MockupTable } from "./mockups";

type Ctx = { lang: Locale; messages: Partial<Dictionary> };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ lang, messages, children }: { lang: Locale; messages: Partial<Dictionary>; children: ReactNode }) {
  return <I18nContext.Provider value={{ lang, messages }}>{children}</I18nContext.Provider>;
}

/* adds namespaces for one page or section, keeping the parent's */
export function Messages({ messages, children }: { messages: Partial<Dictionary>; children: ReactNode }) {
  const parent = useContext(I18nContext);
  if (!parent) throw new Error("<Messages> outside <I18nProvider>");
  return <I18nContext.Provider value={{ lang: parent.lang, messages: { ...parent.messages, ...messages } }}>{children}</I18nContext.Provider>;
}

export function useLang(): Locale {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLang outside <I18nProvider>");
  return ctx.lang;
}

export function useT<K extends keyof Dictionary>(ns: K): Dictionary[K] {
  const ctx = useContext(I18nContext);
  const value = ctx?.messages[ns];
  if (!value) throw new Error(`i18n namespace "${String(ns)}" was not provided to this page`);
  return value as Dictionary[K];
}

/* localises an internal path in the active language */
export function useLocalePath() {
  const lang = useLang();
  return (href: string) => localePath(lang, href);
}

/* next/link that keeps the visitor in their language */
export function LocalLink({ href, ...props }: ComponentProps<typeof NextLink> & { href: string }) {
  const lang = useLang();
  return <NextLink href={localePath(lang, href)} {...props} />;
}

/* Generated product mockups (src/i18n/mockups.ts): the page provides the
   table for its language with <MockupText>; components that inject mockup
   HTML pass it through useMockupHtml(). English pages provide nothing and
   get the HTML untouched. */
const MockupContext = createContext<MockupTable | null>(null);

export function MockupText({ table, children }: { table: MockupTable | null; children: ReactNode }) {
  return <MockupContext.Provider value={table}>{children}</MockupContext.Provider>;
}

export function useMockupHtml(html: string): string {
  const table = useContext(MockupContext);
  return useMemo(() => translateMockup(html, table), [html, table]);
}
