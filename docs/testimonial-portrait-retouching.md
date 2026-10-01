# Testimonial portrait retouching — 1 October 2026

## Follow-up: Vikram clarity only

The requested scope for Vikram is resolution and sharpness only, unlike the background/lighting treatment for Ivo and Amanda. Used built-in image editing to conservatively restore the existing interview photograph, preserving its scene, portrait composition, expression, outfit, gesture and background. Retain `public/case-studies/vikram-minka.avif` as the original; use `public/case-studies/vikram-minka-enhanced.webp` for both the testimonial and thumbnail. WebP encoding is the only subsequent processing. This is AI-assisted enhancement, not recovered camera-original detail.

The enhanced export is 1086×1448 pixels (271,618 bytes), compared with the original 771×1024. Verification: typecheck, lint, production build, whitespace checks and all 43 tests pass. Inspected the loaded large portrait and thumbnail at 1280×720 and 390×844; the face remains in frame with no horizontal overflow or captured browser errors. Only Vikram's asset reference changes in this follow-up. Originals and prior local work are preserved; nothing was committed, pushed or deployed.

### Vikram final prompt

```text
Use case: identity-preserve.
Asset type: existing testimonial photograph, conservative resolution restoration only.
Input image 1: the ONLY edit target and identity source, Vikram's original interview photograph, approximately 3:4 portrait.
Primary request: deblur and upscale this exact photograph. Produce the SAME picture with higher definition and gentle natural sharpness, preferably around 1536x2048 pixels, retaining the entire existing frame. Restore restrained edge detail in eyes, curls, beard and fabric and remove compression softness. This is an archival-style restoration, not a new portrait or beauty retouch.
CRITICAL INVARIANTS: same exact person and face, facial geometry, gaze, partly open mouth and speaking expression, skin colour and age, curly hair, beard shape, head angle, body pose, exact hand gesture and finger positions, rings, wristwatch, patterned grey/navy/blue shirt, buttons, clip-on microphone and all its visible marks. Keep all of these unchanged in position, proportion, colour and character.
Keep the exact existing dark wall, plant leaves, orange chair edge, camera angle, crop, original lighting, exposure and colour grade. No background replacement or additional blur. No new studio lighting, no colour restyling, no skin smoothing, no face reshaping, no altered expression, no changing any objects or text.
Only improve resolution and reduce blur; retain natural photographic grain/skin texture, avoid oversharpening halos and invented details. Faithfulness to the original photograph is more important than sharpness. Deliver one full-frame portrait photograph, no border, comparison panel or watermark.
```

## Scope and originals

Local-only update to Ivo Pavlović and Amanda Bester in Real Stories, including their avatar thumbnails. Keep testimonial wording, attribution, ordering, other portraits and carousel behaviour unchanged. Original public assets are retained. Petar Curic and Sophia Ahrel are lighting/background references only, not edit targets or sources of facial features.

Built-in image editing produced the portraits. WebP encoding at quality 92 is the only subsequent processing; no face edits, sharpening or resizing were applied in code. These are AI-assisted photographic edits, not recovered original camera detail. Their likeness was visually compared with the supplied source photographs; final approval remains with the site owner.

Final site assets:

- `public/case-studies/ivo-witrina-retouched.webp`
- `public/case-studies/amanda-bester-retouched.webp`

Both exports are 1254×1254 pixels. Ivo is 136,778 bytes; Amanda is 164,682 bytes. Existing Next Image optimisation remains in place for the card and avatar sizes.

## Verification

TypeScript, ESLint, production build, whitespace checks and all 43 existing tests pass. Browser-reviewed both portraits at 1440×900 and 390×844; faces remain in frame, updated large images and thumbnails load, all seven testimonial choices remain, and no horizontal overflow or browser errors were observed. Manual switching between Ivo and Amanda works. Other portraits, quotes, forms and behaviour are unchanged. No form submission, commit, push or deployment.

## Final prompt: Ivo

```text
Use case: identity-preserve.
Asset type: photorealistic professional testimonial portrait for a website, square high-resolution photograph.
Input images: Image 1 is the ONLY EDIT TARGET and identity source, Ivo. Image 2 (Sophia) and image 3 (Petar) are STYLE REFERENCES ONLY for natural professional light, photographic depth and warm restrained colour. Do not blend any facial features from the references into Ivo.
Primary request: carefully restore and retouch Ivo's existing photo, not create a new person. Improve low-resolution compression, clarity and uneven harsh reddish light. Use soft window daylight, neutral accurate skin colour, gentle shadow fill, crisp eyes and hair without oversharpening. Skin treatment should be subtle colour evenness and noise reduction, retaining pores, stubble, wrinkles, asymmetry and age.
Background: replace the busy shop window and cropped other person with an unobtrusive softly blurred contemporary interior in warm taupe/wood and muted charcoal tones, consistent in feeling with the reference portraits. No legible signage, props, text, logos or people.
Composition: a head-and-upper-chest portrait of the SAME Ivo at the SAME head angle, direct gaze and closed-lip slight smile as image 1, keeping his original dark jacket and navy top/red collar. Crop out the wine glass and extra person. Entire hairstyle and ears visible with modest headroom; centre the face for both a square avatar and a 4:3 website crop.
CRITICAL INVARIANTS: preserve exact facial structure, eye spacing and shape, eyebrow shape, nose, mouth, ears, jaw/chin, hairline, hairstyle and facial hair, body shape and expression. No face slimming, beautification, new smile, changes in age or hair, or synthetic porcelain skin. Do not transplant faces. Match original identity above all. Deliver one full-bleed square portrait, preferably 2048x2048, no collage or border.
```

## Final prompt: Amanda

```text
Use case: identity-preserve.
Asset type: photorealistic professional testimonial portrait for a website, square high-resolution photograph.
Input images: Image 1 is the ORIGINAL Amanda photo and primary identity anchor, with a circular crop. Image 2 is the current expanded website photo of the SAME Amanda, an edit target and framing reference. Image 3 (Sophia) and image 4 (Petar) are STYLE REFERENCES ONLY for warm natural professional lighting, photographic depth and restrained colour. Never borrow facial features from Sophia or Petar.
Primary request: carefully retouch Amanda's photograph, preserve her real face from image 1. Improve lighting, fine clarity and skin colour without changing her facial features. Keep her existing direct gaze, gently closed lips, slight natural smile, head angle, copper-red hairstyle and black knit top. Use soft flattering window daylight, controlled highlights and gentle dimensional shadows. Treat compression/noise and uneven skin lighting only; retain real pores, freckles, age and individual asymmetry. No heavy smoothing or glamour makeup.
Background: replace the plain white wall / circular surround with a softly blurred contemporary interior in warm taupe, muted wood and subtle charcoal, natural and unobtrusive like the reference portraits. No identifiable venue, signage, text, props or other people.
Composition: full-bleed square head-and-upper-chest portrait, enough headroom to retain all hair, centred face for square avatar and 4:3 website crop. Similar subject scale and photographic finish to Sophia. Do not change clothing or pose.
CRITICAL INVARIANTS: lock exact eyes and their colour/spacing, brows, nose shape/width, lips, facial proportions, jaw/chin, hairline and expression to original Amanda. No face reshaping/slimming, age reduction, enlarged eyes, changed lips or synthetic porcelain skin. Identity fidelity is more important than invented detail. Deliver one square portrait, preferably 2048x2048, not a collage, no border or circular mask.
```
