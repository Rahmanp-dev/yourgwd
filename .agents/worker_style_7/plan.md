# Clinic Client Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement 2 distinct, premium, long-format Next.js client pages and layouts under `app/client/[slug]` with the Minimalist High-Contrast Chic design style.
1. Dermaclinix Hyderabad (`dermaclinix-hyderabad-tolichowki`), Phone: `9849012345`
2. Elite Skin & Hair Clinic (`elite-skin-hair-clinic-tolichowki`), Phone: `9246543210`

**Architecture:** Use App Router static sub-folders under `app/client/` containing `layout.jsx` and `page.jsx` with `"use client"` React components. Design styles utilize purely light-mode styling with pure white (#FFFFFF), sky blue highlight (#0EA5E9), and dark slate (#0F172A). Lucide React icons are used instead of emojis.

**Tech Stack:** Next.js (App Router), React, Tailwind CSS, Lucide React.

---

### Task 1: Create Dermaclinix Hyderabad Layout
**Files:**
- Create: `app/client/dermaclinix-hyderabad-tolichowki/layout.jsx`

- [ ] **Step 1: Write Layout with OpenGraph Metadata**
  Create the file with the following exact content:
  ```javascript
  export const metadata = {
    title: 'Dermaclinix Hyderabad - Premium Skin & Hair Clinic',
    description: 'Experience advanced dermatological care at Dermaclinix Tolichowki. Advanced laser treatments, hair transplants, and clinical skin care. Call +91 98490 12345.',
    openGraph: {
      title: 'Dermaclinix Hyderabad | Premium Skin & Hair Care',
      description: 'Stark, minimal elegance meets medical precision at Tolichowki. Contact +91 98490 12345.',
      url: 'https://salesmachine.gwd.com/client/dermaclinix-hyderabad-tolichowki',
      siteName: 'Dermaclinix Hyderabad',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&h=630&q=80',
          width: 1200,
          height: 630,
          alt: 'Dermaclinix Hyderabad Clinic',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
  };

  export default function Layout({ children }) {
    return children;
  }
  ```

---

### Task 2: Create Elite Skin & Hair Clinic Layout
**Files:**
- Create: `app/client/elite-skin-hair-clinic-tolichowki/layout.jsx`

- [ ] **Step 1: Write Layout with OpenGraph Metadata**
  Create the file with the following exact content:
  ```javascript
  export const metadata = {
    title: 'Elite Skin & Hair Clinic - Tolichowki, Hyderabad',
    description: 'State-of-the-art dermatological and hair restoration treatments. Experience Elite care at Tolichowki. Call +91 92465 43210.',
    openGraph: {
      title: 'Elite Skin & Hair Clinic | Tolichowki',
      description: 'Elevated aesthetics, customized clinical hair & skin care. Phone: 9246543210.',
      url: 'https://salesmachine.gwd.com/client/elite-skin-hair-clinic-tolichowki',
      siteName: 'Elite Skin & Hair Clinic',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&h=630&q=80',
          width: 1200,
          height: 630,
          alt: 'Elite Skin & Hair Clinic',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
  };

  export default function Layout({ children }) {
    return children;
  }
  ```

---

### Task 3: Implement Dermaclinix Hyderabad Page (Stark Editorial Grid Style)
**Files:**
- Create: `app/client/dermaclinix-hyderabad-tolichowki/page.jsx`

- [ ] **Step 1: Implement Page Component**
  Write page content featuring:
  - Stark light-mode editorial grid (zero border radius, thick 1px dark slate borders).
  - Editorial header nav.
  - Interactive price estimator with segment selector tabs.
  - Services list with clear breakdown.
  - Booking form with client validation (checks empty fields and 10-digit phone format).
  - Footer with Tolichowki address and Phone `9849012345`.
  - Let's create the file and implement the complete React structure.

---

### Task 4: Implement Elite Skin & Hair Clinic Page (Elegant Centered Flow Style)
**Files:**
- Create: `app/client/elite-skin-hair-clinic-tolichowki/page.jsx`

- [ ] **Step 1: Implement Page Component**
  Write page content featuring:
  - Floating layouts, high-contrast chic design style with rounded corners (`rounded-3xl` or `rounded-full`).
  - Centered hero and clean aesthetic details.
  - Interactive price estimator using select lists and interactive slider controls.
  - Services grid with clean hover effect cards.
  - Booking form with inputs validation (validates phone and name, shows success message).
  - Footer with Tolichowki address and Phone `9246543210`.

---

### Task 5: Compilation and Verification Check
**Files:**
- None (verify code by building)

- [ ] **Step 1: Build the Next.js app to check for compilation errors**
  Run command: `npm run build`
  Verify that the build compiles successfully without errors.
