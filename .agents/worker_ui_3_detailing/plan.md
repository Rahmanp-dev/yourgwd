# Implementation Plan: Car Detailing Preview Pages

We will create two premium, long-format Next.js UI preview pages under `app/client/[slug]/`:
1. `vinayaka-car-wash-attapur`
2. `gomechanic-attapur`

---

## 1. Vinayaka Car Wash - Attapur (Swiss Typography / Minimalist)

### Design System & Token Set
- **Concept**: Craftsmanship, absolute precision, clean space, minimal lines. Focus on washing as an art form rather than just a chore.
- **Palette**:
  - Primary Background: `#FFFFFF` (Pure white)
  - Secondary Background / Hero Card: `#0B132B` (Deep dark metallic navy)
  - Accent / Metallic Sparkle: `#0066FF` (Electric Royal Blue, used sparingly for CTAs and detail dots)
  - Border Color: `#0A1128` (Dark navy, 1px thin crisp lines)
  - Muted Text: `#64748B` (Slate-500)
  - Body Text: `#1E293B` (Slate-800)
- **Typography**:
  - Display Font: Sans-serif (`font-sans`), extreme bold (`font-black`), tracking-tighter (`tracking-tighter`), tight line heights.
  - Body Font: Sans-serif (`font-sans`), clean, line-height 1.6.
- **Signature Element**: 
  - **"The Craftsmanship Checklist"**: A detailed step-by-step interactive inspection routine detailing their 24-step wash and decontamination sequence (visualized with clean lines and bullet points, zero clutter).
  - **Before/After slider**: An interactive side-by-side comparison of a detailed hood/wheel (implemented using a responsive React state component).

### Page Sections:
- **Navigation**: Sticky minimal bar with logo ("V I N A Y A K A" spaced out), links, and "Book Detailing" CTA.
- **Hero**: Clean typographic header: "Purity in motion." Big text, high breathing room. Dark navy background module for visual contrast.
- **Services Grid**: 4 simple clean columns representing:
    1. Signature Wash
    2. Paint Correction (Polishing)
    3. Ceramic Coating
    4. Interior Restorations
- **Before/After Gallery**: Interactive component or side-by-side grid comparing detailing finishes.
- **Pricing Packages**: Minimalist horizontal comparison cards with thin borders, clean typography, listing PPF and Ceramic coatings.
- **Testimonials**: Clean typographic quotes, client names, and their premium cars (e.g. BMW M3, Fortuner).
- **FAQ**: Accordion list of detailing questions (e.g., curing time, paint safety).
- **Contact / Booking Form**: Clean input fields, minimal outline style, map reference (Attapur location).

---

## 2. GoMechanic - Attapur (Neo-Brutalism)

### Design System & Token Set
- **Concept**: High energy, industrial workshop, raw power, utility grids. Inspired by garage manuals and tool labels.
- **Palette**:
  - Accent Yellow: `#FACC15` (Industrial yellow)
  - Dark Charcoal: `#18181B` (Zinc-900)
  - Pure Black: `#000000`
  - High-Contrast Card Background: `#FFFFFF`
  - Border: Thick black borders (4px)
  - Box Shadow: Hard offset black shadows (`shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`)
- **Typography**:
  - Display Font: Bold sans-serif (`font-sans`), heavy upper-case headers, tracking-tight.
  - Accent Font: Monospace (`font-mono`) for pricing details, service tags, stats.
- **Signature Element**:
  - **"Neo-Brutalist Booking Grid"**: Interactive service dashboard style booking block with hard shadows that shift on hover (`hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`).

### Page Sections:
- **Navigation**: Bold navigation bar with thick borders. Brand logo "GoMechanic | Attapur" with bright yellow pill badge.
- **Hero**: Hard-hitting headline: "RAW QUALITY. NO BULLSH*T DETAILING." Yellow highlights, stark borders, and bold industrial stats.
- **Services Grid**: Grid of cards with thick 4px borders and offset shadows, showing options like Teflon Coating, 9H Ceramic Protection, Scratch Removal, and Deep Steam Wash.
- **Before/After Gallery**: Brutalist blocky panel with interactive sliding/swapping button.
- **Pricing Packages**: 3 cards (Standard, Premium, Ultra PPF) using mono font for pricing numbers, thick buttons, yellow highlights.
- **Testimonials**: Cards styled like yellow post-it notes or brutalist quote blocks with offset black shadows.
- **FAQ**: Dropdown blocks with thick borders that expand on click.
- **Contact & Map**: Industrial-style card with a booking form, bold input fields, and Attapur store details.

---

## 3. Implementation Steps & Verification

1. **Create Layouts**:
   - `app/client/vinayaka-car-wash-attapur/layout.jsx`
   - `app/client/gomechanic-attapur/layout.jsx`
2. **Create Pages**:
   - `app/client/vinayaka-car-wash-attapur/page.jsx` (with `"use client"`)
   - `app/client/gomechanic-attapur/page.jsx` (with `"use client"`)
3. **Verify Next.js build**:
   - Run `npm run build` and ensure zero compile errors.
   - Verify that output routes `/client/vinayaka-car-wash-attapur` and `/client/gomechanic-attapur` exist.
4. **Self-Critique & Linting**:
   - Check code for warning-free rendering.
   - Run verification and document.
