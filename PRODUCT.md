# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output) — the user chose "Next.js / Astro" for the public website; Astro was picked because the site is content-first, bilingual with route-based i18n, needs no server, and ships zero JS by default. Lives entirely in `Public Web/`, separate from the React/FastAPI app in `web/` and `server/`.

## Users

- Primary: owners and decision makers at Saudi construction contractors, consultants and developers (quantity surveying leads, project managers, estimation managers) evaluating whether an AI quantity-takeoff tool is worth a demo. They arrive from a referral or search, on desktop in the office or on a phone between site visits, and want to understand in minutes what the product does and whether to trust its numbers.
- Secondary: quantity surveyors and site engineers who will use the app daily and want to see the actual workflow (upload drawings, confirm assumptions, get BBS/BOQ files).
- Language: Arabic and English readers; Arabic readers expect a native RTL layout, not a mirrored afterthought.

## Product Purpose

QSAI Copilot (the public name of the BOQ Engine) reads construction drawings (DXF, vector PDF, scanned PDF/images) and produces quantity takeoffs: Bills of Quantities for architecture, MEP and structural disciplines, Bar Bending Schedules (BS 8666 shape codes, cutting lengths, laps, weights), Bar Cutting Schedules (optimised cutting patterns, stock to order, scrap %, reusable offcuts), a reinforcement steel report (PDF), site BBS in the consultant "Curtailment" format, and the "Specified Bill of Quantity" client format, all as downloadable Excel/PDF files. It exists so a QS team can turn a drawing set into checkable quantities in hours instead of days, with every line traceable. Success for the website: a visitor understands the product, trusts the method, and submits a contact/demo inquiry.

## Positioning

Every number comes from a deterministic engine, never from the language model: the AI only reads drawings into structured elements and runs the conversation; arithmetic, code rules and material factors run in the same auditable code path as a DXF takeoff. Every BOQ line carries a Basis column and a Type (Measured / Calculated; items the documents do not support are listed as Not quantified), so a QS can verify how each figure was produced. The user's standing decision (2026-10-21): the website must not present any 'estimated' results or estimation toggles; only quantities produced by actual processing are shown. The chat assistant works only through tools, asks for missing dimensions, confirms assumptions before calculating and never invents dimensions (N.T.S. drawings are flagged, not guessed). Saudi Building Code profile (SBC) with SRC cement, insulated/hollow block defaults and ready-mix supply is first-class; a Pakistan profile also exists.

## Operating Context

- Workflow in the app: one chat = one project. Upload any number of drawing files → AI triage detects discipline (Architecture / MEP / Structural), scale, specifications written on sheets → the assistant reads each document, extracts members/quantities, asks only when a missing value materially changes quantities → user confirms → engine calculates → reports generated as versioned files (v1, v2 …; superseded versions stay downloadable; files flagged out of date after data changes) → download Excel/PDF.
- Project memory: symbols, labels, confirmed assumptions, decisions with cropped drawing screenshots; reopening a project continues where it stopped.
- Documents in scope: DXF (best), vector PDF (with scale), scanned PDF/JPG/PNG (AI read).
- Outputs: Summary, BOQ, BBS, BCS, Materials & Waste, Unmapped Layers, Warnings, Notes & Assumptions sheets; Steel report PDF; Site BBS Excel; Specified BOQ Excel + PDF; Rate/Amount columns left empty (pricing is a later layer).
- Standards: Saudi SBC profile (metres, kg/m, Ø mm) and Pakistan profile (feet, kg/ft, # bar numbers, "sutar" sizes).
- The app is gated behind a shared access token (private pilot); the public site links to it but does not expose it.

## Capabilities and Constraints

- Confirmed capabilities: multi-discipline takeoff (architecture: brickwork, lintels, plaster, paint, flooring, skirting, doors/windows, rooms; MEP: pipes by system/size, fittings from network analysis, fixtures, conduits, wires, ductwork, cable tray; structural: rebar → BBS → BCS with Gilmore–Gomory column generation + MILP), materials catalogue with wastage and order quantities, document specification overrides, AI triage, project memory, versioned reports, streaming chat.
- Constraints for the website: completely front-end; no backend; contact form must validate and record submissions locally (browser localStorage with JSON export) with a swappable submission adapter so email/API integration can be added later; reviews must be data-driven (one JSON/TS file) so more can be added without touching markup; Arabic + English with a language switch and true RTL; must not touch any existing file outside `Public Web/`.
- Undecided: public app URL (placeholder in site config), pricing (not shown; pricing is explicitly a later layer), company legal name/address (placeholders in config).

## Brand Commitments

- Name: **QSAI Copilot**, wordmark "QSAI" + "Copilot", tagline "BOQ · BBS · Takeoffs" (from `web/src/components/Logo.tsx`).
- Logo mark: white tile, three rising green quantity bars, gold baseline, gold AI spark.
- Visual identity already in the app: white surfaces, Saudi green `#006c35` as the structural colour, gold `#c9a227` as a small highlight only. The website must read as the same brand to the Saudi construction market; the brief pins a Saudi-Arabian construction-market identity (theme, palette, typography, visual identity).
- Voice: precise, engineering-grade, no hype; numbers are checkable.

## Evidence on Hand

- Real product features and workflow: `README.md`, `server/tools.py`, `boq_engine/`.
- Real sample outputs exist locally (Excel workbooks, steel report PDFs, consultant BBS formats) but are client documents and must not be published; the site uses synthetic, labelled demonstration data shaped like the real outputs.
- No real customer testimonials, logos, benchmarks or case studies exist yet. Reviews on the site are explicitly dummy placeholders (labelled in the data file) to be replaced; no customer names of real companies may be implied.
- No measured accuracy or time-saving statistics exist; the site must not state numeric claims as fact.

## Product Principles

1. Prove the method, not the magic: show Basis, Type and the human-confirmation step; the trust story is auditability.
2. The QS stays in control: the assistant asks, the engineer confirms, the engine calculates.
3. Deliverables in the formats the industry already exchanges (BBS, BCS, Specified BOQ, steel report).
4. Built for the Kingdom first: SBC defaults, Arabic-native experience, local material conventions.
5. Nothing invented: no fabricated dimensions in the product, no fabricated claims on the website.

## Accessibility & Inclusion

Bilingual Arabic/English with full RTL; readable on phones in bright outdoor light (strong contrast); keyboard-accessible navigation and form; reduced-motion respected for all animation.
