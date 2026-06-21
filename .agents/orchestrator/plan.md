# Plan: Kriti Handlooms E-commerce Preview Page

## Task Assessment
- **Brand**: Kriti Handlooms (Boutique Clothing / Handloom heritage)
- **Location**: Cyberabad, Hyderabad
- **Folder Path**: `app/client/kriti-handlooms-cyberabad/`
- **Output Files**: `page.jsx` (interactive React page), `layout.jsx` (SEO metadata layout)
- **Design System**: Premium **Earthy Organic Claymorphism**
  - Elegant serif display typography (Playfair Display), paired with a modern clean sans-serif (Plus Jakarta Sans).
  - Colors: Terracotta (#C27A5B), Olive/Sage Green (#5D6E54), Soft Gold/Wheat (#D8B88F), Warm Cream backgrounds (#FAF7F2).
  - Claymorphism: Soft pillowy shadows, double outer/inner borders, and light pastel gradients for card items.
- **Required Sections (Minimum 7 Sections)**:
  1. **Hero Section** — Large headline ("Kriti Handlooms"), tagline, engaging hero visual showcasing handloom sarees/tunics (use Unsplash), primary CTA ("Shop Collection").
  2. **Featured Collections / Lookbook** — Grid of high-quality ethnic wear imagery with smooth hover effects.
  3. **Product Grid (Shop)** — At least 4-6 products with names, prices (in INR), and "Add to Cart" buttons. Interactive cart slide-over/panel.
  4. **Brand Story / About** — Artisanal focus, Hyderabad legacy, craftsmanship.
  5. **Testimonials / Social Proof** — Customer reviews from Cyberabad residents.
  6. **Trust Badges / Value Props** — Secure Payments, Custom Tailoring, 100% Organic Handloom, Direct-from-Weavers.
  7. **Footer** — Contact info (Cyberabad, Hyderabad), fake WhatsApp link using `https://wa.me/919876543212`.
- **Hard Constraints (NON-NEGOTIABLE)**:
  - STRICTLY NO DARK MODE. All elements must use light background aesthetics.
  - Lucide React icons only (no emojis as structural icons).
  - Fully mobile responsive with no horizontal overflow.
  - `"use client"` at the top of `page.jsx`.
  - Single CamelCase identifiers for function names in `page.jsx` and `layout.jsx` (`KritiHandloomsCyberabadPage`, `KritiHandloomsCyberabadLayout`).
  - Next.js must compile successfully with zero errors under `npm run build`.

## Step-by-Step Execution Plan

### Step 1: Initialize Project Metadata & Briefing
- Create/update `plan.md`, `progress.md`, `PROJECT.md`, and `BRIEFING.md` inside `.agents/orchestrator/`.
- Start heartbeat cron timer.

### Step 2: Design Exploration & Analysis (Explorer)
- Spawn an Explorer agent to explore design systems, pick high-quality Unsplash image URLs, define layout structures, and document the complete specification.

### Step 3: Code Implementation (Worker)
- Spawn a Worker agent with `ui-ux-pro-max` and `frontend-design` skills to generate the premium Next.js UI (`page.jsx` and `layout.jsx`).
- Ensure no dark mode, correct function names, proper Lucide React usage, and dynamic interactive client-side customizers.

### Step 4: Multi-Agent Review & Code Quality (Reviewer)
- Spawn a Reviewer agent to verify correctness, visual style conformance, mobile responsiveness, and contrast levels.

### Step 5: Forensic Integrity Audit (Auditor)
- Spawn a Forensic Auditor agent to verify that the implementation is genuine and doesn't contain hardcoded test overrides, dummy functions, or dark mode violations.

### Step 6: Build Verification (Worker)
- Spawn a Worker to run `npm run build` and ensure Next.js compiles the route with zero errors.

### Step 7: Final Verification & Sentinel Notification
- Verify all requirements are met.
- Notify the Sentinel (main agent) with a victory report.
