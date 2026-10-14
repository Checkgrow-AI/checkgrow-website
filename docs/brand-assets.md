# Brand icon and share image

All set in `src/lib/seo.ts`; the layout, `/book-a-demo` and `src/app/manifest.ts` read from there.

| Asset | File | Used by |
|---|---|---|
| Favicon (SVG) | `public/brand/icons/checkgrow-favicon-<hash>.svg` | modern browsers |
| Favicon (ICO, 16/32/48) | `public/favicon.ico` (fixed path) | older browsers, Google Search |
| Apple touch icon (180) | `public/brand/icons/checkgrow-apple-touch-icon-<hash>.png` | iOS home screen |
| Icons 192 / 512 | `public/brand/icons/checkgrow-icon-{192,512}-<hash>.png` | manifest, Android, Chrome |
| Default share image (1200×627 JPEG) | `public/social/<descriptive-name>-<hash>.jpg` | Open Graph / X for every page without its own image |

**Why the hash:** browsers and social networks cache icons and share images by URL, sometimes for weeks. A new file name forces them to fetch the new version.

**To replace the icon:** render the new SVG to 16, 32, 48, 180, 192 and 512 px PNGs, rebuild `favicon.ico` from 16/32/48, save the files with the new content hash (first 8 characters of its SHA-256), update `ICON_VERSION` and delete the old files.

**To replace the share image:** export 1200×627 (or 1200×630), save as an optimised JPEG under ~300 KB (WhatsApp skips large previews), name it descriptively with its hash, update `SOCIAL_IMAGE` and delete the old file. Use JPEG or PNG, not WebP: LinkedIn does not reliably show WebP previews.

After deploying, refresh link previews with the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) and the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).
