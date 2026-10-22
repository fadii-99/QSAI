import en from "./en";
import ar from "./ar";
import type { Dict } from "./en";

export type Locale = "en" | "ar";
export const locales: Locale[] = ["en", "ar"];
export const dict: Record<Locale, Dict> = { en, ar };

export const dirOf = (l: Locale) => (l === "ar" ? "rtl" : "ltr");
export const otherLocale = (l: Locale): Locale => (l === "ar" ? "en" : "ar");

/** `/app/` → `/app/` (en) or `/ar/app/` (ar). */
export const localePath = (l: Locale, path: string) => (l === "en" ? path : `/ar${path}`);

/** Replace `{key}` placeholders. */
export const fmt = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
