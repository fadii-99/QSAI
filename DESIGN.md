---
name: QSAI Copilot public site
description: The steel yard. A white concrete apron where drawings become tagged, cut, bundled quantities.
colors:
  ground: "#f3f3f1"
  ground-2: "#eaeae7"
  ground-3: "#dfdfdb"
  white: "#ffffff"
  ink: "#14261b"
  ink-2: "#33453a"
  muted: "#65776c"
  line: "#d8d8d3"
  line-strong: "#bcbcb6"
  green: "#006c35"
  green-2: "#005a2c"
  green-3: "#0b8a46"
  green-deep: "#0a4a27"
  green-soft: "rgba(0, 108, 53, 0.09)"
  green-line: "rgba(0, 108, 53, 0.25)"
  gold: "#c9a227"
  gold-2: "#e3c35c"
  gold-3: "#a8821c"
  gold-soft: "rgba(201, 162, 39, 0.18)"
  steel: "#4b5651"
  steel-2: "#2e3733"
  steel-hi: "#8a948f"
  err: "#b42318"
  err-soft: "rgba(180, 35, 24, 0.08)"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, Impact, sans-serif"
    fontSize: "clamp(3.4rem, 8vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Big Shoulders Display, Arial Narrow, Impact, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Big Shoulders Display, Arial Narrow, Impact, sans-serif"
    fontSize: "clamp(1.45rem, 2.2vw, 1.9rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  display-ar:
    fontFamily: "Alexandria, Readex Pro, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.6vw, 4.8rem)"
    fontWeight: 800
    lineHeight: 1.22
    letterSpacing: "0"
  headline-ar:
    fontFamily: "Alexandria, Readex Pro, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.8vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: "0"
  lead:
    fontFamily: "Readex Pro, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.35vw, 1.3rem)"
    fontWeight: 300
    lineHeight: 1.6
  body:
    fontFamily: "Readex Pro, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 300
    lineHeight: 1.65
  body-ar:
    fontFamily: "Readex Pro, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 300
    lineHeight: 1.9
  mark:
    fontFamily: "Big Shoulders Display, Arial Narrow, Impact, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04em"
  label:
    fontFamily: "Readex Pro, Segoe UI, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.2
  caption:
    fontFamily: "Readex Pro, Segoe UI, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 300
    lineHeight: 1.3
rounded:
  pill: "999px"
  end: "3px"
  tag: "6px"
  bundle: "12px"
spacing:
  gutter: "clamp(16px, 2.5vw, 40px)"
  container: "100%"
  section: "clamp(5rem, 9vw, 8.5rem)"
  section-head: "clamp(2.2rem, 4vw, 3.5rem)"
  tag-pad: "1.35rem 1.4rem 1.3rem"
  tag-pad-tight: "1rem 1.1rem"
  field-gap: "1rem"
  header-h: "72px"
  pour-line: "96px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    rounded: "{rounded.tag}"
    padding: "0.75em 1.35em"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.green-2}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "0.75em 1.35em"
    height: "48px"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "0.75em 1.35em"
    height: "48px"
  button-gold-hover:
    backgroundColor: "{colors.gold-2}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "0.75em 1.35em"
    height: "48px"
  button-sm:
    rounded: "{rounded.tag}"
    padding: "0.5em 1em"
    height: "40px"
  tag:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "{spacing.tag-pad}"
  tag-on-dark:
    backgroundColor: "rgba(255, 255, 255, 0.06)"
    textColor: "{colors.white}"
    rounded: "{rounded.tag}"
    padding: "{spacing.tag-pad}"
  chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0.42em 0.7em"
    typography: "{typography.caption}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "0.7em 0.9em"
    height: "48px"
  pill-radio:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0.5em 0.9em"
  pill-radio-checked:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.5em 0.9em"
  bundle-pack:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.bundle}"
    padding: "1.25rem 1.3rem 1.3rem"
  band-dark:
    backgroundColor: "{colors.green-deep}"
    textColor: "{colors.white}"
  nav-link:
    textColor: "{colors.ink-2}"
    padding: "0.4em 0.2em"
    typography: "{typography.label}"
---

# Design System: QSAI Copilot public site

## Overview

**Creative North Star: "The Steel Yard"**

The site is a rebar yard rendered as a page. The ground is a white concrete apron with faint pour lines (a 96px grid at 3.5–4.5% ink), and everything on it is either a bar, a tag, or a painted end. Horizontal ribbed steel rules carry the structure; their painted ends carry the one piece of meaning the brand owns: Saudi green for Measured, gold for Calculated, an unpainted dashed ghost for what is not yet quantified (the remnant offcut, items awaiting data). Labels, stats and the form live on white bundle tags that hang from a gold tie through a punched hole. The display face is condensed and stencil-born (Big Shoulders Display, uppercase, set almost solid at line-height 0.92); Arabic keeps the same density with Alexandria, unforced case, and taller leading. Body is a light-weight humanist shared by both scripts (Readex Pro 300).

Density is high but ordered: deliverables are packed edge to edge as tagged bundles with file codes and numbered sheet maps; comparison and feature content sits in gridded white tags separated by 1px seams rather than gaps. Depth is literal offset shadow only, two voices (tag at rest, lift on hover); nothing glows, nothing bevels. Motion runs on one clock: every entrance is the same 22px rise with a 4px blur settling under an exponential ease-out, and the hero's cutting-stock timeline is the signature interaction, scrubbable and replayed on view. The world rejects the hero-screenshot-plus-feature-grid landing and the dark "AI glow" page; the only dark material is a single deep-green painted band, used once per page.

**Key Characteristics:**
- White concrete-apron ground with a faint 96px pour-line grid, never a flat colour
- Ribbed steel bar rules with painted ends as the live colour code (green = Measured, gold = Calculated, ghost = not yet quantified)
- White bundle tags with a punched hole and a gold tie carry every label, stat and form
- Condensed uppercase stencil display (Latin) and Alexandria display (Arabic) over a 300-weight humanist body
- Depth from soft offset shadows only; one dark painted band per page; one entrance motion; one shared timeline clock

## Colors

A white-and-steel yard where the only saturated colour is paint on the ends of bars: Saudi green is structural and dominant, gold is a small, deliberate highlight.

### Primary
- **Saudi Green** (`green`): the structural colour. Primary buttons, the second line of the hero display, measured bar segments, painted bar starts, link colour, active station dots, the ext badge on Excel bundles, checked radio pills, focus caret and accent colour.
- **Pressed Green** (`green-2`): hover state of primary buttons and links, primary button border, success reference text.
- **Fresh Green** (`green-3`): the top of the green gradient on cut segments and the third discipline paint (MEP); the trailing end of the brand strip.
- **Painted Band Green** (`green-deep`): the one dark material. Background of the "Why now" band on the landing page and the closing band on the app page; carries its own white pour-line grid at 3.5–4% white.
- **Green Wash** (`green-soft`) and **Green Line** (`green-line`): the "us" column tint in the comparison table, sheet-number chips, active station halo; the border of selected tabs and hovered pills.

### Secondary
- **Tie Gold** (`gold`): paint on the far end of every bar rule, the Calculated chip swatch, the cut blades and remnant outline in the hero, the nav hover underline, the scrub thumb, the progress bar fill, and the global focus ring (2px, offset 3px). The gold button variant exists for the app page.
- **Light Gold** (`gold-2`): hover of the gold button, links and point marks on the dark band, the bright end of the tie gradient.
- **Deep Gold** (`gold-3`): the "Copilot" half of the wordmark, remnant-tag border and hint text, gold button border, the dark end of the tie gradient.
- **Gold Wash** (`gold-soft`): text selection background and the 3px focus halo on inputs.

### Tertiary
- **Steel** (`steel`), **Steel Light** (`steel-hi`), **Steel Dark** (`steel-2`): the unpainted bar. Every ribbed rule is a repeating 7px/2px (or 9px/2px, 5px/1px at small sizes) gradient of Steel and Steel Light; Steel Light alone is the dashed not-quantified ghost, superseded status and inactive station rings; Steel Dark is the PDF ext badge.

### Neutral
- **Concrete Apron** (`ground`): page background and figure wells; the punched-hole fill.
- **Apron Shade** (`ground-2`): footer background.
- **Apron Dust** (`ground-3`): superseded sheet chips.
- **Tag White** (`white`): every tag, bundle, input, button-secondary and the white bands that alternate with the apron.
- **Ink** (`ink`): headings and primary text, deep green-black rather than black.
- **Ink Soft** (`ink-2`): body copy inside sections, lead paragraphs, nav links, table cells.
- **Muted** (`muted`): hints, captions, ruler ticks, footer column headings, placeholder-adjacent text.
- **Seam** (`line`) and **Seam Strong** (`line-strong`): 1px borders on tags and table rows; input borders, secondary-button borders, dashed map dividers and ruler ticks.
- **Error** (`err`) with **Error Wash** (`err-soft`): invalid field border, error text, the 3px invalid halo; a pending chip swatch outline.

### Named Rules
**The Painted End Rule.** Colour means something or it is not applied. Green and gold appear as paint on the ends of steel, as status swatches, or on a control; never as decorative fills, gradients behind text, or tinted section backgrounds (the two washes are the only tints and they sit under table cells and chips).

**The One Dark Band Rule.** `green-deep` is used for exactly one band per page. It carries its own faint white pour-line grid and its tags switch to the on-dark variant; gold becomes the accent on it, not green.

**The Ghost Rule.** Absence is drawn, not hidden. Not-quantified and superseded states use a dashed Steel Light outline or an Apron fill, so a reader sees that something was deliberately left unpainted.

## Typography

**Display Font:** Big Shoulders Display (with Arial Narrow, Impact fallback), weights 500–800, Latin only
**Display Font (Arabic):** Alexandria (with Readex Pro fallback), weights 400–800
**Body Font:** Readex Pro (with Segoe UI, system-ui fallback), weights 300–700, Arabic and Latin

**Character:** Stencil lettering on a rebar tag over a quiet engineering body. Latin display is uppercase, condensed, set almost solid (line-height 0.92, tracking -0.01em) so two lines read as one painted block. Arabic display never fakes the condensation: Alexandria at line-height 1.22, no case transform, zero tracking. Body is a light 300 weight in both scripts, with Arabic leading raised to 1.9; strong text is 600, never bold-black. Numbers set with tabular lining figures wherever they are compared.

### Hierarchy
- **Display** (800, `clamp(3.4rem, 8vw, 6rem)`, 0.92): the hero hook only, two lines, the second line in Saudi Green. Arabic: 800, `clamp(2.4rem, 5.6vw, 4.8rem)`, 1.22. Max width 26ch Latin, 18ch Arabic.
- **Headline** (700, `clamp(2.4rem, 5vw, 4.2rem)`, 0.92): every section heading, balanced wrap, inside a 72ch section head. Arabic: `clamp(1.9rem, 3.8vw, 3.1rem)`, 1.22.
- **Title** (600, `clamp(1.45rem, 2.2vw, 1.9rem)`, 1.1): tag titles, form headings, bundle group names; frequently stepped down to 1.05–1.15rem inside packed grids. Arabic line-height 1.5.
- **Lead** (300, `clamp(1.1rem, 1.35vw, 1.3rem)`, 1.6): the paragraph under the hero hook and the dark-band paragraphs; 58–62ch. Section subs are the same voice at `clamp(1.05rem, 1.2vw, 1.2rem)`, 64ch.
- **Body** (300, 1.0625rem, 1.65): default copy; 0.95rem inside tags, table cells and lists. Arabic 1.9.
- **Mark** (700, display face, 0.92–1.25rem, uppercase, +0.04em): the stencilled identifier on a tag or bar: figure captions, discipline names, bar-mark IDs (B1, C2), comparison headers, footer column heads, the ext badge. This is a label stamped on a thing, used beside the thing; it is not a kicker above a heading.
- **Label** (500, 0.95rem): form labels, nav links, chip and pill text (0.8–0.92rem), remnant tag text.
- **Caption** (300, 0.82rem): hints, file codes, sheet lists, ruler ticks (0.7rem), legal.

### Named Rules
**The No-Kicker Rule.** Headings stand alone. No eyebrow, kicker or overline sits above an `h2`; the section head is a headline and a sub, nothing else. The stencil Mark is reserved for identifiers placed on tags, bars and columns.

**The Script Parity Rule.** Arabic is set as its own display system (Alexandria, natural case, 1.22 leading, wider heading max-width in ch), not as a transformed copy of the Latin one. Any new display style must carry its `html[lang="ar"]` override before it ships.

**The Solid Block Rule.** Latin display and headline lines are set at 0.92 line-height with tracking -0.01em; never loosen them to look "airy". Lines are allowed to touch.

## Layout

One fluid column spanning the full viewport width, with a gutter of `clamp(16px, 2.5vw, 40px)` (the user's standing decision: no fixed max-width; text blocks keep their own measure); the apron and its 96px pour-line grid run edge to edge behind it. Sections take `clamp(5rem, 9vw, 8.5rem)` of block padding and alternate between the apron (`ground`) and a white band (`band-white`), with one deep-green painted band near the end of each page. A section opens with a head (headline + sub, max 72ch, bottom margin `clamp(2.2rem, 4vw, 3.5rem)`) and then its figure or grid.

The hero is shallower (`clamp(2rem, 4vw, 2.75rem)` top) so the 12m stock bar sits mid-viewport at 1440×900: hook in two lines over the left two-thirds, lead at 58ch, full-width bar figure with labels 96px above it, ruler below, scrub and legend on one row, then a two-column `1.1fr / 1fr` row with the inquiry tag and the discipline list.

Grids are tight: packed bundles and use-case lists are `repeat(3, 1fr)` with a 1px `line` gap on a `line` background inside a 12px rounded, clipped frame, so cells share seams instead of margins. Two-column text/figure splits use `minmax(0, 1.2fr) minmax(0, 0.9fr)` with `clamp(1.5rem, 4vw, 3.5rem)` gaps. The header is sticky, 72px tall (`--header-h`), with a 3px green-to-gold brand strip above it and `scroll-padding-top` of 84px.

Responsive breakpoints are per component rather than global; the ones that recur are 1024px (nav collapses to a burger, header CTA hides), 900–980px (three-column grids to two), 760px (tables become stacked cards, footer to two columns, horizontal rules become vertical 6px spines beside a stacked list), 640px (hero labels shrink, segment IDs and alternate ticks hide, inquiry row stacks), 600–560px (grids to one column), 480px (language label hides). RTL is handled with logical properties (`inset-inline`, `margin-inline-start`, `text-align: start`); the only explicit mirror flips are the tag tie angle, arrow icons and the select chevron.

## Elevation & Depth

Depth is offset shadow only, cast downward as if a tag sat on the apron under daylight. There are no inset bevels on surfaces, no glows, no blur-backed cards (the sticky header's backdrop blur is the single exception, used for legibility over the apron). Tonal layering does the rest: white tags on the apron, the apron inside tags for wells and code chips, and the painted green band as the one dark plane.

### Shadow Vocabulary
- **Tag at rest** (`box-shadow: 0 1px 1px rgba(20, 38, 27, 0.05), 0 10px 28px -14px rgba(20, 38, 27, 0.28)`): every bundle tag, the comparison table frame, selected tabs, active stations, the remnant tag.
- **Lift** (`box-shadow: 0 2px 4px rgba(20, 38, 27, 0.06), 0 24px 48px -20px rgba(20, 38, 27, 0.35)`): hover state of packed bundles and use-case cells, with a 2px rise.
- **Button rest** (`0 1px 2px rgba(20, 38, 27, 0.08)`; primary `0.12`): a hairline under buttons so they read as a tag, not a flat chip.
- **Button hover** (`0 6px 16px -8px rgba(20, 38, 27, 0.4)`; primary `0 10px 20px -10px rgba(0, 108, 53, 0.6)`): with a 1px rise.
- **Bar underside** (`0 2px 4px -2px rgba(20, 38, 27, 0.35)`; hero stock bar `0 10px 18px -12px rgba(20, 38, 27, 0.5)`): a thin shadow beneath ribbed rules so they sit on the apron.
- **Header scrolled** (`0 8px 24px -16px rgba(20, 38, 27, 0.35)`): appears only once the page has scrolled 8px.
- **Punched hole** (`inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 0 0 2px #fff`): the one inset, and it is a hole in a tag, not a bevel on a surface.

### Named Rules
**The Daylight Shadow Rule.** Every shadow is ink-tinted (`rgba(20, 38, 27, …)`), offset downward, and negative-spread so it never halos. Hover adds a rise of 1–2px plus the next shadow up; nothing animates a shadow without also moving.

**The Hole, Not Bevel Rule.** Inset shadows draw holes (the tag's punched hole, the remnant tag's eyelet). They never draw pressed or embossed surfaces.

## Shapes

Corners are small and consistent: bar ends and chip swatches 3px, tags, buttons and inputs 6px, packed frames and the comparison table 12px, chips and radio pills fully round (999px). Radius never exceeds 12px on a rectangle; round shapes are reserved for station dots, the punched hole and the scrub thumb.

The recurring silhouette is the ribbed bar: a horizontal rule of repeating Steel / Steel Light stripes (7px on, 2px off at 6px height; 9px/2px at 10–30px; 5px/1px at 8–10px) with a solid painted cap at each end (36px on the 6px rule, 22px on the thin 3px rule, 48px on the 10px sequence bar). Below 760px the same bar turns vertical and becomes a 6px spine beside a list. The second silhouette is the bundle tag: a white rectangle with a 1px seam, a 9px punched hole 10px from the top corner, and a 24px gold tie leaving the hole at 32 degrees. Dashed strokes (1.5–2px, Steel Light or gold) mean a ghost or a remnant; solid strokes mean a measured thing. Borders are 1px seams in `line` or `line-strong`; the only heavier strokes are the 3px station rings and the 2px dashed remnant outline.

## Components

Tactile and plain: things look like what a QS would pick up in the yard, and they move only as far as a tag on a tie would.

### Buttons
- **Shape:** tag corners (6px), 48px minimum height, `0.75em 1.35em` padding, 500 weight at 1rem, icon 18px with `0.55em` gap, arrows mirrored in RTL.
- **Primary:** Saudi Green fill, white text, Pressed Green border, hairline shadow. Hover: Pressed Green fill, green-tinted shadow, 1px rise. Active: back to rest.
- **Secondary (default `.btn`):** Tag White fill, Ink text, Seam Strong border; the same rise on hover.
- **Gold:** Tie Gold fill, Ink text, Deep Gold border; hover Light Gold. Used on the app page's closing band.
- **Ghost:** transparent, Seam Strong border, no shadow; `on-dark` variant uses white text and a 35% white border with an 8% white hover fill.
- **Small:** 40px, `0.5em 1em`, 0.92rem (header CTA, "another inquiry").
- **Disabled:** 60% opacity, no transform.
- **Focus:** the global 2px gold outline, 3px offset.

### Chips (the colour code)
- **Style:** pill (999px), Tag White, 1px Seam border, 0.8rem at 500 weight, a 10px square swatch with 2px corners leading the text.
- **State:** the swatch carries the meaning: `measured` green, `calculated` gold, `pending` (not quantified) red outline; file-status variants `current` green, `stale` gold, `superseded` Steel Light. The chip itself never changes colour.

### Bundle Tag (cards)
- **Corner Style:** 6px; `tight` variant has `1rem 1.1rem` padding.
- **Background:** Tag White with a 1px Seam border; `on-dark` variant is 6% white with a 14% white border and no shadow.
- **Shadow Strategy:** Tag at rest (see Elevation).
- **Hardware:** a 9px punched hole at `top: 10px; inset-inline-start: 12px` showing the apron, and a 24px, 2px gold-gradient tie leaving it at -32° (32° in RTL). `no-tie` removes both for tags used as plain wells.
- **Internal Padding:** `1.35rem 1.4rem 1.3rem`.

### Packed Bundles (deliverables, use cases)
- **Frame:** 12px rounded, clipped, 1px Seam border, cells separated by 1px Seam gaps on a Seam background.
- **Cell:** white, `1.25rem 1.3rem 1.3rem`; hover lifts 2px with the Lift shadow and shifts to `#fbfbf8`; `superseded` cells fall back to the apron with Muted text.
- **Hardware:** an ext badge (display face, 800, +0.06em, 3px corners, green for XLSX, Steel Dark for PDF), a status chip, a file code on an apron chip, then a dashed divider and a two-column numbered sheet map (18px green-wash number tiles). Use-case cells carry a vertical 14px ribbed end with a 26px painted cap cycling green / gold / fresh green.

### Inputs / Fields
- **Style:** Tag White, 1px Seam Strong border, 6px corners, 48px minimum, `0.7em 0.9em`, 300 weight; textarea 140px minimum, vertical resize; select has an inline chevron SVG at the inline-end (mirrored in RTL).
- **Label:** 500 at 0.95rem with an optional "required / optional" note in Muted 300 at 0.82rem, justified to the far edge; hints 0.82rem Muted below.
- **Focus:** border becomes Saudi Green with a 3px Gold Wash halo; no outline.
- **Error:** border Error with a 3px Error Wash halo; the error line (0.85rem Error) appears beneath; validated on blur, re-checked on input.
- **Radio pills:** fully round, Seam Strong border, 0.9rem; checked = Saudi Green fill and white text; hover = Green Line border; focus = 2px gold outline on the visible span.
- **Checkbox:** native 20px, Saudi Green accent colour.
- **Success:** a white overlay inside the tag with a 48px green check, title, reference number in Pressed Green 600 tabular, fade-in 0.5s.

### Navigation
- **Header:** sticky, 72px, 86% white with a 10px backdrop blur and 1px Seam bottom border, a 3px green→gold→fresh-green strip above it; scrolled state adds the header shadow.
- **Links:** Ink Soft, 400 at 0.95rem; hover and `aria-current` turn Ink and grow a 2px gold underline from the inline-start (0.3s ease-out).
- **Actions:** language switch (globe icon + label, borderless until hover), small primary CTA, and a 44px bordered burger below 1024px whose three 18px bars fold into an X.
- **Mobile menu:** white sheet under the header, links at 1.05rem separated by Seam rules, full-width primary CTA, centred language switch.
- **Footer:** Apron Shade, opens with a full bar rule, `1.6fr 1fr 1fr` columns, stencil column heads in Muted at 0.78rem +0.14em, and a Seam-ruled legal line.

### Bar Rule (signature primitive)
A 6px ribbed steel rule with 36px painted ends (green at inline-start, gold at inline-end) and a thin underside shadow. `thin` is 3px with 22px ends; `plain` removes the paint. The same construction scales to the 10px workflow and sequence bars, the 30px hero stock bar, the 8–10px discipline ends, and the vertical spines on narrow screens. Painted ends always sit at the extreme of the bar, never in the middle.

### Cutting-Stock Timeline (signature interaction)
The hero figure is one 12m stock bar rendered as a 30px ribbed steel rule with a 0–12 ruler. A single `Timeline` (Web Animations API, paused, `fill: both`) scales the steel in (700ms), then for each mark clips a green segment open (520ms), raises its stencil label (420ms), and drops a gold blade (300ms), stepping 560ms per mark; the remnant then outlines in dashed gold and a remnant tag scales in from 0.85. It plays once at 30% visibility after 350ms, a range input scrubs it and resumes on release, and reduced motion seeks straight to the end state. Everything else that moves (workflow stations, comparison, discipline figures) uses the same ease and the same clock model.

### Reveal (the only entrance)
`[data-reveal]` elements start at 0.001 opacity, 22px down and 4px blurred and settle over 0.9–1s on `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 70ms per `--i`. An IntersectionObserver (8% threshold, -8% bottom margin) adds `.in` once. Reduced motion renders end states with no transition.

## Do's and Don'ts

### Do:
- **Do** keep the apron's pour-line grid under everything (96px, ink at 4.5% / 3.5%), and switch it to white at 4% on the dark band.
- **Do** build any new rule, divider or progress track as the ribbed bar (Steel / Steel Light repeating gradient) with painted ends at the extremes, 3px corners.
- **Do** put labels, stats and forms on a bundle tag (white, 1px Seam, 6px, Tag shadow, punched hole and gold tie) rather than inventing a new card.
- **Do** carry Measured / Calculated / Not quantified as green / gold / red outline on the swatch, never on the chip body or text. The site never presents an "estimated" state; the product shows only quantities produced by actual processing.
- **Do** set Latin display uppercase at 0.92 line-height and -0.01em, and ship the `html[lang="ar"]` override (Alexandria, no transform, 1.22) with it.
- **Do** use `[data-reveal]` with `--i` for entrances and a `Timeline` for any sequence; honour `prefers-reduced-motion` by showing end states.
- **Do** keep hover as a 1–2px rise plus the next shadow step; focus as the 2px gold outline, 3px offset.
- **Do** use logical properties for every inline-axis offset; mirror only arrows, the tie angle and select chevrons explicitly in RTL.
- **Do** pack repeated items into a 12px clipped frame with 1px Seam gaps instead of spacing cards apart.

### Don't:
- **Don't** add a kicker, eyebrow or overline above a heading; the section head is a headline and a sub only.
- **Don't** use a second dark band on a page, or any dark background other than Painted Band Green.
- **Don't** fill areas with green or gold, gradient text, or tinted section backgrounds; the only tints are Green Wash under "us" cells and chips and Gold Wash for selection and focus.
- **Don't** add glows, inset bevels, blur-backed cards or drop shadows on text; the header's backdrop blur is the single blur in the system.
- **Don't** use raster imagery or screenshots; every figure is inline SVG or HTML built from the bar, tag and chip primitives.
- **Don't** introduce a new entrance style, a second easing for entrances, or per-component scroll clocks.
- **Don't** set body or lead copy heavier than 300, or strong text heavier than 600.
- **Don't** exceed 12px radius on rectangles or round a bar end beyond 3px.
- **Don't** place a painted end anywhere but the extreme of a bar.
