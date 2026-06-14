# Plan - Premium Next.js UI Previews Generation

This plan details the steps required to generate two distinct, premium long-format Next.js UI preview pages for:
1. **Sai Reddy Yanala CA** (Retro-futurism / Cyberpunk)
2. **Y Tax Consultancy** (Corporate Gold & Navy)

## Phase 1: Preparation & Design System Definition
- Check the structure of `app/client` to confirm where files will be created.
- Review design directives from the `ui-ux-pro-max` skill for Retro-futurism/Cyberpunk and Corporate Gold & Navy.
- Define the exact styling tokens (colors, borders, fonts, effects) for both targets.

## Phase 2: Create Files for Target 1 (`sai-reddy-yanala-ca`)
- Create folder `app/client/sai-reddy-yanala-ca`.
- Create `layout.jsx` with customized WhatsApp preview OpenGraph metadata for "Sai Reddy Yanala CA".
- Create `page.jsx` containing:
  - Sticky Navigation Bar
  - Hero Section (Cyberpunk style, glowing effects, grid/matrix background elements, primary/secondary CTAs)
  - Services Section (Tax filing, audit, GST compliance, consulting cards with tech brackets)
  - About Us Section (Introduction to partners, credentials, mission)
  - Testimonials (Satisfied corporate and individual quotes)
  - CTA Section (Bespoke callback/contact form)
  - Footer (Links, contact info, copyright)

## Phase 3: Create Files for Target 2 (`y-tax-consultancy`)
- Create folder `app/client/y-tax-consultancy`.
- Create `layout.jsx` with customized WhatsApp preview OpenGraph metadata for "Y Tax Consultancy".
- Create `page.jsx` containing:
  - Sticky Navigation Bar (Gold border, dark navy backdrop)
  - Hero Section (Corporate Gold & Navy luxury, heavy gold accents, elegant typography, primary/secondary CTAs)
  - Services Section (Corporate consulting, auditing, wealth management, bookkeeping)
  - About Us Section (Credentials, history, partners)
  - Testimonials (High-end corporate client statements)
  - CTA Section (Bespoke consultation request form)
  - Footer (Elegant gold accent border, contact info, links, copyright)

## Phase 4: Verification & Build Testing
- Run next compilation (`npm run build`) to ensure there are no syntax errors, missing packages, or build failures.
- Verify metadata is correctly loaded.
- Inspect code for layout/spacing/visual conventions (using the `ui-ux-pro-max` checklist).

## Phase 5: Handoff & Status Reporting
- Update `BRIEFING.md` with final files, build status, and decisions.
- Write a detailed `handoff.md` report.
- Message the main orchestrator agent using the Handoff Protocol.
