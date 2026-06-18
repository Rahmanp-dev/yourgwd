# Soft Pastel Skin Clinics Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement 2 distinct, premium, LONG FORMAT Next.js client pages (Oliva Skin & Hair Clinic and Kaya Skin Clinic) under `app/client/[slug]` with layouts, in a soft pastel blush & rose theme, with interactive components and input validation, and verify compilation.

**Architecture:** Create static directory structures under `app/client/oliva-skin-clinic-tolichowki` and `app/client/kaya-skin-clinic-tolichowki` each containing a custom `layout.jsx` with unique OpenGraph metadata and a custom `page.jsx` using client-side React. The pages use custom light-mode soft pastel styles, responsive styling, Lucide React icons, interactive treatment estimators, and robust consultation booking forms.

**Tech Stack:** Next.js (App Router), React, Tailwind CSS, Lucide React

---

### Task 1: Implement Oliva Skin & Hair Clinic

**Files:**
- Create: `app/client/oliva-skin-clinic-tolichowki/layout.jsx`
- Create: `app/client/oliva-skin-clinic-tolichowki/page.jsx`

- [ ] **Step 1: Create Oliva layout.jsx with custom OpenGraph metadata**
  Write metadata tailored to Oliva Skin & Hair Clinic, Tolichowki. Ensure the image is a high-quality relevant Unsplash image, and set up metadata for proper WhatsApp unfurling.

- [ ] **Step 2: Create Oliva page.jsx with soft blush serif style**
  Implement the full long-format page with:
  - `"use client";` directive.
  - Soft pink/lavender backdrop (#FFF5F5, #FFF0F5, text: #2D3748) with elegant serif headers.
  - Hero Header with Oliva branding, phone: `9849551988`.
  - Clinic Expertise/About detailing dermatology and hair transplant services.
  - Interactive Treatment Estimator calculating estimated price based on Treatment Type (Acne Scar, Laser Hair Reduction, Skin Lightening, Hair Loss), Body Area (Full Face, Underarms, Arms, Full Body), and Sessions (1, 3, 6, 8) with real interactive calculations and state.
  - Services Grid showcasing distinct service cards with hover animations.
  - Booking Consultation Form with input validation (name: minimum 3 chars, phone: exactly 10 digits, email check, treatment selection, showing inline errors, and successful booking confirmation state).
  - Patient Transformations/Testimonials showing clinical results.
  - Store Details Footer featuring phone, authentic address (Oasis Plaza, Tolichowki Road, Hyderabad), and open hours.
  - Make sure all icons are imported from `lucide-react`.

---

### Task 2: Implement Kaya Skin Clinic

**Files:**
- Create: `app/client/kaya-skin-clinic-tolichowki/layout.jsx`
- Create: `app/client/kaya-skin-clinic-tolichowki/page.jsx`

- [ ] **Step 1: Create Kaya layout.jsx with custom OpenGraph metadata**
  Write metadata tailored to Kaya Skin Clinic, Tolichowki. Set up metadata for WhatsApp unfurling.

- [ ] **Step 2: Create Kaya page.jsx with soft lavender rose modern style**
  Implement the full long-format page with:
  - `"use client";` directive.
  - Distinct modern visual style (using organic rounded borders, geometric highlights, rose gold accents like border color `#E0A899` or similar).
  - Hero Header with Kaya branding, phone: `9391018899`.
  - Clinic Expertise/About detailing Kaya's customized skincare and advanced dermatological solutions.
  - Interactive Treatment Estimator calculating estimated price based on Treatment Type (Laser Hair Removal, Pigmentation, Anti-Aging, Acne Cure), Body Area (Face, Neck, Hands, Full Body), and Sessions (1, 4, 6, 10) with custom logic separate from Oliva's.
  - Services Grid highlighting Kaya's premium offerings.
  - Booking Consultation Form with input validation (name: min 3 chars, phone: 10 digits, email format check, and distinct design/state from Oliva's form).
  - Patient Transformations/Testimonials.
  - Store Details Footer featuring phone, authentic address (Tolichowki X Roads, Hyderabad), and open hours.
  - Ensure only Lucide React icons are used.

---

### Task 3: Local Verification and Compilation

- [ ] **Step 1: Run Next.js build or linter check**
  Run compilation/build command to ensure no syntax errors, import errors, or layout violations occur in the newly created folders.
