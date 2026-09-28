# Real Stories portrait refresh

28 September 2026. Local changes on `main`; publication requires separate approval.

## Content and assets

- Remove Amir from Real Stories only; retain the other four testimonials and add Salim Sayed, Sophia Ahrel and Amanda Bester first, in the supplied order.
- Quotes are reproduced verbatim from the user. Salim's displayed company is Payroll, following the request. Sophia's full attribution includes her Brighteye Ventures mentorship. No performance badges or customer-status claims are invented for the new stories.
- Portrait originals in Downloads remain unchanged. The built-in image editor restores clarity and extends the original circular crops into rectangular photographs. Edited portraits were visually compared with the supplied photographs; generative restoration is not pixel-identical to the originals.
- Project assets: `public/case-studies/salim-sayed.webp`, `public/case-studies/sophia-ahrel.webp`, `public/case-studies/amanda-bester.webp`. WebP encoding uses quality 88, without additional cropping or retouching. Next Image supplies responsive variants for the main portrait and avatar rail.
- Keep the existing dark design, carousel interactions and waitlist behaviour.
- Avatar labels use 96px-wide buttons with responsive wrapping so the new names fit without crowding the portraits.

## Verification

- TypeScript, ESLint, production build and `git diff --check` passed.
- Selected all seven stories in the local browser and confirmed each quote; the three new quotes match the supplied wording. Amir is absent from the Real Stories DOM.
- Verified all testimonial images load, including responsive portrait and thumbnail variants. The browser reported no captured warning/error logs.
- Inspected 390px, 768px and 1440px layouts: no document-level horizontal overflow; avatar buttons are 96px wide and at least 97px high. Portraits fill their frames without the original circular matte. Observed automatic advancement between stories.
- No forms, APIs, production content or Git remotes were changed. Nothing was committed, pushed or deployed.

## Exact image-edit prompts

Built-in image-editing mode, one call per portrait. Each call uses only the corresponding supplied photo as the edit target.

### salim

```text
Use case: identity-preserve.
Asset type: real customer testimonial portrait for a website.
Input image: Image 1 is the ONLY edit target, a supplied real portrait with a circular crop embedded in a dark matte.
Primary request: conservatively restore and upscale this exact photograph; remove the circular crop and dark empty outer corners by reconstructing only the missing background and edge clothing. Deliver one full-bleed rectangular 1024x1024 photo, no circle, borders, text or graphic decoration. Make the person occupy most of the frame with a professional head-and-shoulders framing, complete top of head and only a little natural headroom. Do not zoom tighter than the original facial crop. Improve compression, clarity, natural exposure and white balance modestly. Preserve natural skin texture; no beauty filters, reshaping, age changes, face replacement, new expression, altered pose, altered wardrobe or synthetic glamour. Identity and all facial proportions must be unchanged; prefer leaving soft details over inventing a new face.
Keep his shaved head, exact facial features and beard, navy shirt, grey blazer and thoughtful hand-to-chin pose identical. Retain the muted architectural background and extend it naturally without adding legible signage.
No watermarks. Do not combine people. This is photographic restoration and edge outpainting, not a new portrait.
```

### sophia

```text
Use case: identity-preserve.
Asset type: real customer testimonial portrait for a website.
Input image: Image 1 is the ONLY edit target, a supplied real portrait with a circular crop embedded in a dark matte.
Primary request: conservatively restore and upscale this exact photograph; remove the circular crop and dark empty outer corners by reconstructing only the missing background and edge clothing. Deliver one full-bleed rectangular 1024x1024 photo, no circle, borders, text or graphic decoration. Make the person occupy most of the frame with a professional head-and-shoulders framing, complete top of head and only a little natural headroom. Do not zoom tighter than the original facial crop. Improve compression, clarity, natural exposure and white balance modestly. Preserve natural skin texture; no beauty filters, reshaping, age changes, face replacement, new expression, altered pose, altered wardrobe or synthetic glamour. Identity and all facial proportions must be unchanged; prefer leaving soft details over inventing a new face.
Keep her exact face, smile, teeth, eye colour, long blonde/light brown hair, white top, watch and clasped hands identical. Retain the softly blurred natural background and extend it naturally.
No watermarks. Do not combine people. This is photographic restoration and edge outpainting, not a new portrait.
```

### amanda

```text
Use case: identity-preserve.
Asset type: real customer testimonial portrait for a website.
Input image: Image 1 is the ONLY edit target, a supplied real portrait with a circular crop embedded in a dark matte.
Primary request: conservatively restore and upscale this exact photograph; remove the circular crop and dark empty outer corners by reconstructing only the missing background and edge clothing. Deliver one full-bleed rectangular 1024x1024 photo, no circle, borders, text or graphic decoration. Make the person occupy most of the frame with a professional head-and-shoulders framing, complete top of head and only a little natural headroom. Do not zoom tighter than the original facial crop. Improve compression, clarity, natural exposure and white balance modestly. Preserve natural skin texture; no beauty filters, reshaping, age changes, face replacement, new expression, altered pose, altered wardrobe or synthetic glamour. Identity and all facial proportions must be unchanged; prefer leaving soft details over inventing a new face.
Keep her exact facial features, green eyes, subtle closed-mouth expression, long red hair, black top and pose identical. Retain the simple warm off-white wall background and extend it naturally.
No watermarks. Do not combine people. This is photographic restoration and edge outpainting, not a new portrait.
```
