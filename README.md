# QSAI Copilot — public website

Static, front-end-only marketing site for QSAI Copilot (the BOQ Engine chat application), in English and Arabic.
It lives entirely in this folder and does not touch the application in `../web` or `../server`.

## Run

```bash
npm install
npm run dev       # http://localhost:4321  (Arabic at /ar/)
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
npm run check     # TypeScript / Astro diagnostics
```

Deploy `dist/` to any static host (Vercel, Netlify, nginx, GitHub Pages). No server is needed.

## Pages

| Route | Arabic | Content |
| --- | --- | --- |
| `/` | `/ar/` | Long-form landing page: hero, why it exists, how it works, how the AI reads a drawing, what it extracts, traceable BOQ, deliverables, comparison, why now, benefits, who it is for, use cases, reviews, FAQ, contact |
| `/app/` | `/ar/app/` | Product page for the application itself: workspace anatomy, a session step by step, inputs, standards, access |
| `/contact/` | `/ar/contact/` | Dedicated contact page with the full inquiry form |
| `/inbox/` | `/ar/inbox/` | Not linked, `noindex`: view and export inquiries recorded in this browser |

## Where to change things

- **Company details, app URL, email, phone**: `src/data/site.ts` (every `TODO` placeholder must be replaced before launch).
- **Reviews**: `src/data/reviews.ts`. Append an object to the array; the page renders all of them. Set `placeholder: false` for a real review and the "sample review" label disappears.
- **All copy**: `src/i18n/en.ts` and `src/i18n/ar.ts`. The two files share one TypeScript shape, so a missing Arabic key fails `npm run check`.
- **Colours, type, spacing**: `src/styles/global.css` (tokens on `:root`, Arabic overrides on `html[lang="ar"]`).
- **Fonts**: self-hosted in `public/fonts/` (Big Shoulders Display for Latin headings, Alexandria for Arabic headings, Readex Pro for body in both scripts).

## Contact form and submissions

The site has no backend, so submissions are handled by an adapter in `src/scripts/submissions.ts`:

- Default `localStorageAdapter` records each inquiry in the visitor's browser and assigns a reference number (`QS-YYMMDD-XXXX`). The `/inbox/` page lists them and exports JSON or CSV. This only shows inquiries made in that same browser; it is a structure, not a central mailbox.
- To deliver inquiries by email or to an API later, implement a second `SubmissionAdapter` (an example is in the file) and change the single `adapter` export. Both forms (hero quick request and the full contact form) go through `submitInquiry`, so nothing else changes.

Validation runs on blur and on submit; errors are inline; success shows the reference number.

## Languages

Astro's i18n routing serves English at `/` and Arabic under `/ar/` with `dir="rtl"`. The header switch links to the same page in the other language and remembers the choice; on the next visit to the home page the saved language is applied once per session. Layout uses CSS logical properties, so RTL mirrors without separate stylesheets. Diagram labels that are engineering marks (B1, Ø16, S-03) stay Latin in both languages, as on real drawings.

## Motion

One module, `src/scripts/motion.ts`, drives everything: a `Timeline` over the Web Animations API (hero cutting bar with scrubber), a single reveal style for sections, and viewport helpers for the workflow stations and the drawing-reading figure. `prefers-reduced-motion` disables entrances and shows end states.

## Design record

`PRODUCT.md` holds product truth for this site; `DESIGN.md` describes the visual system; `.impeccable/` holds the surface brief used during the build.
