# QSAI header logo integration

Replace only the existing left-side QSAI COPILOT logo/brand lockup with the provided full-color QSAI image. Keep all navigation, language switcher, and Request a demo CTA unchanged. Remove any old icon, QSAI COPILOT text, and BOQ · BBS · TAKEOFFS subtitle from the header brand area. Do not add a tagline below the new image.

## Assets
- Preferred: `QSAI-logo.webp` (transparent, full color)
- Fallback: `QSAI-logo-transparent.png`
- Optional raster widths: 320, 640, 1280 px

Copy assets to the project's public/static asset directory and use the framework's recommended image component or a normal `<img>`.

## Layout
- Existing header screenshot: white header, left logo, centered navigation, right language switcher and demo CTA.
- Logo is approximately 2.92:1 width-to-height. Preserve its natural aspect ratio (`height: auto`, `object-fit: contain`).
- Desktop: width 145–160px; actual height approximately 50–55px. Keep header height around 72px or preserve existing if sufficient. Do not force width and height independently.
- Tablet: width 125–145px; mobile: width 110–125px. Ensure at least 8–12px vertical clearance in header.
- Align logo vertically centered; link to home (`/`), with accessible name/alt text `QSAI — Construction AI`.
- Preserve all nav items and existing responsive menu behavior. If space is tight, use the site's existing hamburger breakpoint; do not overlap, wrap, or shrink navigation labels to illegible sizes.
- Maintain RTL layout behavior for Arabic, but keep QSAI letters in normal left-to-right order. Follow existing site's brand placement convention in RTL.
- Prevent CLS by setting intrinsic image width/height (1299x445) or aspect-ratio 1299 / 445. Use lazy loading only for below-the-fold images; header logo should load eagerly.
- Do not add a white box or background around the transparent image.
- Verify at 320, 375, 768, 1024, 1280, and 1440px viewport widths and in both Arabic/English.

## Example CSS
.header-brand { display:inline-flex; align-items:center; flex-shrink:0; line-height:0; }
.header-brand img { display:block; width:clamp(110px, 11vw, 160px); height:auto; aspect-ratio:1299/445; object-fit:contain; }
@media (max-width:767px) { .header-brand img { width:120px; } }

## Example HTML/JSX
<a href="/" className="header-brand" aria-label="QSAI home">
  <img src="/images/QSAI-logo.webp" width="1299" height="445" alt="QSAI — Construction AI" decoding="async" fetchPriority="high" />
</a>

Adapt the file path and components to the actual project. Avoid duplicating a text logo alongside the image.
