/* A translation has exactly the English dictionary's shape: every key,
   every list at the same length, strings free to change, numbers and
   booleans identical (literal types), so figures cannot drift.

   Keys that never translate keep English's exact literal type, so the
   compiler itself rejects a translation that changes an id, slug, link,
   image or a discriminant such as a story block's `type`. scripts/i18n/
   check.mjs compares the same keys at runtime (keep both lists in step). */

export type FixedKey =
  | "id" | "ids" | "slug" | "href" | "src" | "poster" | "icon" | "mockup" | "key"
  | "image" | "images" | "cover" | "coverFit" | "social" | "logo" | "photo" | "video" | "url" | "path"
  | "anchor" | "sectionId" | "category" | "categories" | "kind" | "type" | "variant"
  | "layout" | "tone" | "color" | "accent" | "focus" | "width" | "height" | "duration" | "durationSeconds"
  | "date" | "publishedAt" | "updatedAt" | "uploadDate" | "currency" | "code" | "draft" | "big"
  | "person" | "company" | "captions" | "socialImage";

type Primitive = string | number | boolean | null | undefined;

/* a fixed key freezes values (and lists of values), not whole sections:
   `categories: [{ id, title, items }]` keeps every id but its titles and
   items still translate */
type Fixed<V> = V extends Primitive ? V : V extends readonly Primitive[] ? V : Localized<V>;

export type Localized<T> = T extends string
  ? string
  : T extends number | boolean | null | undefined
    ? T
    : T extends readonly unknown[]
      ? { readonly [K in keyof T]: Localized<T[K]> }
      : T extends object
        ? { readonly [K in keyof T]: K extends FixedKey ? Fixed<T[K]> : Localized<T[K]> }
        : T;
