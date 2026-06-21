# Plan: Banjara Hills Skin Clinics Preview Pages (New Batch)

## Task Assessment
- **Scope**: Create 10 premium, long-format, light-mode Next.js UI preview pages for Skin & Cosmetic Clinics in Banjara Hills, Hyderabad, under `app/client/[slug]/` (each with `page.jsx` and `layout.jsx`).
- **Slugs to build**:
  1. `saanvis-laser-skin-clinic-banjara-hills` (Joyful Pastel Coral)
  2. `beauty-world-skin-clinic-banjara-hills` (Luxury Gold & Pearl)
  3. `transform-skin-clinic-banjara-hills` (Clean Medical Mint)
  4. `riyaanz-aesthetic-banjara-hills` (Lavender Glassmorphism)
  5. `dr-rameshs-dermatique-banjara-hills` (Terracotta Organic Warmth)
  6. `dr-phanisri-skin-clinic-banjara-hills` (Fresh Orchid Violet)
  7. `shayas-cosmetic-clinic-banjara-hills` (Champagne Premium)
  8. `jds-clinic-banjara-hills` (Sky Blue Wellness)
  9. `reva-health-skin-clinic-banjara-hills` (Rose Gold Neumorphism)
  10. `dermatrendz-skin-care-centre-jubilee-hills` (Sage Green Minimalist)
- **Hard Constraints**:
  - STRICTLY NO DARK MODE. Clean, light, bright pastels or clean whitespace aesthetics only.
  - 9 Required Sections per page:
    1. Hero Section
    2. Stats Bar
    3. Founder / Head Doctor Bio
    4. Treatments & Services Selector
    5. Interactive Skin Assessment Questionnaire
    6. Results / Before & After Showcase
    7. Patient Testimonials
    8. Appointment Booking / Enquiry Form (with real-time validation and reference number confirmation screen)
    9. Clinic Location & Hours Footer
  - Single CamelCase function names in `page.jsx` and `layout.jsx` (e.g. `SaanvisLaserSkinClinicPage`, `SaanvisLaserSkinClinicLayout`).
  - Use Lucide React icons only (no emojis as structural icons).
  - Use real Unsplash images only (`?auto=format&fit=crop&q=80&w=800`).
  - Mobile responsiveness with no horizontal overflow.
  - Zero compilation errors on `npm run build`.

## Step-by-Step Execution Plan

### Step 1: Initialize Project Metadata & Plan
- Write `plan.md`, `progress.md`, `PROJECT.md`, and `BRIEFING.md` in the orchestrator directory.
- Start the heartbeat cron.

### Step 2: Parallel Worker Dispatch
- Spawn 5 parallel worker subagents using `teamwork_preview_worker` with the `ui-ux-pro-max` and `frontend-design` skills.
- Each worker will implement exactly 2 clinic pages (`page.jsx` and `layout.jsx`) in their respective directories under `app/client/`.
- Allocation:
  - **Worker 1 (worker_clinic_1)**: `saanvis-laser-skin-clinic-banjara-hills` (Joyful Pastel Coral) & `beauty-world-skin-clinic-banjara-hills` (Luxury Gold & Pearl)
  - **Worker 2 (worker_clinic_2)**: `transform-skin-clinic-banjara-hills` (Clean Medical Mint) & `riyaanz-aesthetic-banjara-hills` (Lavender Glassmorphism)
  - **Worker 3 (worker_clinic_3)**: `dr-rameshs-dermatique-banjara-hills` (Terracotta Organic Warmth) & `dr-phanisri-skin-clinic-banjara-hills` (Fresh Orchid Violet)
  - **Worker 4 (worker_clinic_4)**: `shayas-cosmetic-clinic-banjara-hills` (Champagne Premium) & `jds-clinic-banjara-hills` (Sky Blue Wellness)
  - **Worker 5 (worker_clinic_5)**: `reva-health-skin-clinic-banjara-hills` (Rose Gold Neumorphism) & `dermatrendz-skin-care-centre-jubilee-hills` (Sage Green Minimalist)

### Step 3: Monitor & Lifecycle Management
- Track subagent progress via heartbeat checks.
- If any subagent stalls or fails, apply the fault-tolerance ladder (Retry -> Replace).

### Step 4: Verification & Build Compilation Check
- Spawn a verification worker (`worker_build_verify`) to run `npm run build` and ensure the Next.js routes compile successfully with zero errors.
- Confirm all pages conform to visual quality, layout, sections, and metadata constraints.

### Step 5: Final Handover
- Collect and synthesize results into `handoff.md`.
- Report completion back to the Sentinel.
