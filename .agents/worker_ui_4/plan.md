# Plan - Premium Next.js UI Previews Generation (Interior Designers)

This plan details the steps required to generate two distinct, premium long-format Next.js UI preview pages for:
1. **Namasvi Interiors Narsingi** (Biophilic / Organic Green design system)
2. **Simply Interiors Gachibowli** (Pastel Glassmorphism design system)

## Phase 1: Preparation & Design System Definition
- Verify folders and file locations.
- Define exact styling tokens (colors, gradients, backgrounds, borders, typography) for both targets.
- Identify icons needed from `lucide-react` or custom SVG icons.

## Phase 2: Create Files for Target 1 (`namasvi-interiors-narsingi`)
- Create folder `app/client/namasvi-interiors-narsingi`.
- Create `layout.jsx` with customized WhatsApp preview OpenGraph metadata for "Namasvi Interiors - Narsingi" featuring a luxurious biophilic theme.
- Create `page.jsx` containing:
  - Sticky/floating organic-styled Navigation Bar.
  - Hero Section (Serif headings, forest green/emerald/gold design, nature-integrated luxury imagery placeholder/styling).
  - About Us Section (Biophilic ethos, nature-integrated design philosophy, eco-luxe materials).
  - Services Portfolio Section (Living Room, Modular Kitchen, Wardrobes, Lighting with curved cards and gold accent borders).
  - Design Process Section (Consult, Design, Execute styled as a winding organic timeline).
  - Testimonials Section (Curved cards, soft botanical pattern backgrounds).
  - FAQ Section (Accordion layout, elegant borders).
  - Contact Form (Interactive form fields with nature-green focus outlines, custom validation logic/state).
  - Footer (Nature-inspired links, address in Narsingi, copyright).

## Phase 3: Create Files for Target 2 (`simply-interiors-gachibowli`)
- Create folder `app/client/simply-interiors-gachibowli`.
- Create `layout.jsx` with customized WhatsApp preview OpenGraph metadata for "Simply Interiors - Gachibowli" featuring a pastel glassmorphism theme.
- Create `page.jsx` containing:
  - Sticky frosted glass Navigation Bar.
  - Hero Section (Modern fluid typography, glowing pastel pink/purple/blue background blobs, translucent card container).
  - About Us Section (Frosted translucent panels, modern aesthetic, storytelling).
  - Services Portfolio Section (Living Room, Modular Kitchen, Wardrobes, Lighting inside rounded glassmorphic cards with subtle pastel glow/borders).
  - Design Process Section (Frosted glass timeline nodes).
  - Testimonials Section (High-end frosted cards).
  - FAQ Section (Frosted accordion layout).
  - Contact Form (Frosted input panels, glowing active states, validation/state).
  - Footer (Pastel-tinted text, links, Gachibowli location, copyright).

## Phase 4: Verification & Build Testing
- Run Next.js compilation (or build checks) to ensure there are no syntax errors, missing packages, or compilation failures.
- Verify metadata is correctly loaded.
- Inspect code for layout/spacing/visual conventions (using the `ui-ux-pro-max` checklist).

## Phase 5: Handoff & Status Reporting
- Update `BRIEFING.md` with final files, build status, and decisions.
- Write a detailed `handoff.md` report.
- Message the main orchestrator agent (`7ea3ee05-33cc-4810-9f19-c50f8856ab5e`) using the Handoff Protocol.
