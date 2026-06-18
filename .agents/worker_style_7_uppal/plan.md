# Next.js UI Preview Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Build two premium, highly distinct, light-mode-only long-format Next.js UI preview pages for Annapurna Caterers and Swagath Caterers in Uppal, Hyderabad, featuring Soft Pastel Gourmet / Rose Gold & Blush style.

**Architecture:** 
- Static directories inside Next.js App Router: `app/client/annapurna-caterers-uppal/` and `app/client/swagath-caterers-uppal/`.
- `"use client"` React components with custom interactive states (menu estimator, booking form validations).
- WhatsApp-optimized OpenGraph metadata configured in `layout.jsx`.

**Tech Stack:** React 18, Next.js 16, Tailwind CSS, Lucide Icons.

---

### Task 1: Create Annapurna Caterers Layout
**Files:**
- Create: `app/client/annapurna-caterers-uppal/layout.jsx`

- [ ] **Step 1: Write Layout File**
  Implement layout with correct OpenGraph metadata pointing to `https://yourgwd.vercel.app/client/annapurna-caterers-uppal`, loading Google Fonts via `next/font/google` (Playfair Display for display, Plus Jakarta Sans for body), and styling container with Blush / Warm White tones.
- [ ] **Step 2: Verify Layout syntax**
  Check that imports and exports are correct.

### Task 2: Create Annapurna Caterers Page Component
**Files:**
- Create: `app/client/annapurna-caterers-uppal/page.jsx`

- [ ] **Step 1: Write Page File**
  Implement Annapurna Caterers page with:
  - Hero Header: "Annapurna Caterers" title in elegant serif, traditional luxury tagline, premium food photos grid, rose gold border details.
  - Brand Story: "The Legacy of Pure Taste", tracing roots from Hyderabad's historic kitchens, strict ISO hygiene, culinary expertise in Uppal.
  - Interactive Customizer: Slider/input for guest count, event type select, menu tier select (Standard: ₹450, Premium: ₹900, Royal: ₹1600), calculating total, and displaying a list of dishes included.
  - Signature Dishes: 6 premium traditional/royal dishes in a grid with custom hover/scale effects.
  - Consultation Form: Validating email, phone (10-12 digits), required fields, with loading and success states.
  - Testimonials: Authentic Hyderabad reviews mentioning Gachibowli, Uppal, Secunderabad.
  - Store Details Footer: Real phone, address, and email.
- [ ] **Step 2: Verify component rendering**
  Ensure code has no syntax errors and uses clean React state hooks.

### Task 3: Create Swagath Caterers Layout
**Files:**
- Create: `app/client/swagath-caterers-uppal/layout.jsx`

- [ ] **Step 1: Write Layout File**
  Implement layout with correct OpenGraph metadata pointing to `https://yourgwd.vercel.app/client/swagath-caterers-uppal`, loading Google Fonts via `next/font/google` (Outfit for display, Inter for body), styling container with friendly rounded corners and soft pastel gradient background.
- [ ] **Step 2: Verify Layout syntax**
  Check that imports and exports are correct.

### Task 4: Create Swagath Caterers Page Component
**Files:**
- Create: `app/client/swagath-caterers-uppal/page.jsx`

- [ ] **Step 1: Write Page File**
  Implement Swagath Caterers page with:
  - Hero Header: "Swagath Caterers" title in modern display font, modern fusion gourmet tagline, contemporary food photos grid with rounded corners, blush pink gradient backdrop.
  - Brand Story: "Crafting Culinary Moments", tracing their modern fusion expertise, custom curated menus, interactive live counter stations.
  - Interactive Customizer: Guest count input, event type, menu tier (Standard: ₹550, Premium: ₹1100, Royal: ₹2100), dynamic estimate rendering, mock customizer with tab selections.
  - Signature Dishes: 6 contemporary/fusion dishes with rounded cards and zoom-on-hover style.
  - Consultation Form: Distinct design from Annapurna, same rigorous validation of fields.
  - Testimonials: Reviews featuring Secunderabad, Gachibowli, Uppal, and Jubilee Hills.
  - Store Footer: Address in Uppal, phone number, and email.
- [ ] **Step 2: Verify component rendering**
  Ensure no syntax errors.

### Task 5: Compilation and Verification Build
- [ ] **Step 1: Run Next.js Build**
  Run `npm run build` to compile the app and ensure there are no build errors.
- [ ] **Step 2: Fix any compile/lint errors**
  Inspect any errors output, correct them, and re-run build.
