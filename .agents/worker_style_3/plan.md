# Contemporary Minimalist Jewellery Store Preview Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build 2 premium, highly distinct, long-format Next.js UI preview pages for Sri Jagdamba Pearls and Suhani Pittie under the dynamic route `app/client/[slug]`.

**Architecture:** A single dynamic `page.jsx` component that checks `params.slug`. If `slug === 'sri-jagdamba-pearls'`, it renders the custom Sri Jagdamba Pearls layout. If `slug === 'suhani-pittie-banjara-hills'`, it renders the Suhani Pittie layout. For any other slug, it falls back to the original dynamic healthtech preview component to maintain backward compatibility and avoid route collision. The `layout.jsx` is updated to include OpenGraph metadata for both jewellery stores.

**Tech Stack:** Next.js App Router (16.2.9), React 18, Tailwind CSS (via script layout), Lucide Icons.

---

### Task 1: Update OpenGraph Metadata Layout
**Files:**
- Modify: `app/client/[slug]/layout.jsx`

- [ ] **Step 1: Re-read the layout.jsx file**
- [ ] **Step 2: Add Sri Jagdamba Pearls and Suhani Pittie to metadata generation**
  Add conditions for `sri-jagdamba-pearls` and `suhani-pittie-banjara-hills` inside `generateMetadata` function. Use premium descriptions and high-quality jewelry photography URLs.

```javascript
  } else if (slug === 'sri-jagdamba-pearls') {
    return {
      title: 'Sri Jagdamba Pearls - Authentic Pearl & Gold Heritage',
      description: 'Experience Hyderabad\'s ultimate legacy of pearls. Exquisite South Sea pearls, freshwater pearls, temple necklaces, and traditional bridal sets on MG Road.',
      openGraph: {
        title: 'Sri Jagdamba Pearls - Authentic Pearl & Gold Heritage',
        description: 'Experience Hyderabad\'s ultimate legacy of pearls. Exquisite South Sea pearls, freshwater pearls, temple necklaces, and traditional bridal sets on MG Road.',
        siteName: 'Sri Jagdamba Pearls',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200&h=630',
            width: 1200,
            height: 630,
            alt: 'Sri Jagdamba Pearls Collection',
          },
        ],
      },
    };
  } else if (slug === 'suhani-pittie-banjara-hills') {
    return {
      title: 'Suhani Pittie - Contemporary & Avant-Garde Designer Jewellery',
      description: 'Explore award-winning contemporary metal art and handcrafted designer jewellery in Banjara Hills, Hyderabad. Elegant minimalism with sleek bronze borders.',
      openGraph: {
        title: 'Suhani Pittie - Contemporary & Avant-Garde Designer Jewellery',
        description: 'Explore award-winning contemporary metal art and handcrafted designer jewellery in Banjara Hills, Hyderabad. Elegant minimalism with sleek bronze borders.',
        siteName: 'Suhani Pittie',
        images: [
          {
            url: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1200&h=630',
            width: 1200,
            height: 630,
            alt: 'Suhani Pittie Designer Collection',
          },
        ],
      },
    };
  }
```

- [ ] **Step 3: Save changes and verify compiling/linting of layout**

---

### Task 2: Remove/Integrate Conflicting Dynamic Route
**Files:**
- Create: `app/client/[slug]/page.jsx`
- Modify/Remove: `app/client/[clientName]/page.jsx`

- [ ] **Step 1: Read the healthtech preview in app/client/[clientName]/page.jsx**
- [ ] **Step 2: Copy the healthtech preview code to serve as fallback in app/client/[slug]/page.jsx**
- [ ] **Step 3: Create the base app/client/[slug]/page.jsx file**
  Structure it with the fallback check:
  
```javascript
"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
// Import icons
import { 
  Phone, MapPin, Mail, Award, Clock, Star, Sparkles, ChevronRight, 
  Send, Compass, HelpCircle, RefreshCw, Scissors, Gem, Crown, 
  Sliders, MessageSquare, Heart, Share2, Instagram, ArrowRight,
  Shield, Check, ArrowLeft, Video, Calendar, UserCircle, Activity,
  HeartPulse, CheckCircle2
} from 'lucide-react';

export default function DynamicClientPage() {
  const params = useParams();
  const slug = params?.slug;

  if (slug === 'sri-jagdamba-pearls') {
    return <SriJagdambaPearlsPage />;
  }
  if (slug === 'suhani-pittie-banjara-hills') {
    return <SuhaniPittiePage />;
  }

  // Fallback to Healthtech Preview
  return <HealthtechPreview slug={slug} />;
}
```

- [ ] **Step 4: Remove the conflicting `app/client/[clientName]` folder**
  Run PowerShell to delete `app/client/[clientName]`.
  Command: `Remove-Item -Recurse -Force -LiteralPath "app\client\[clientName]"`

---

### Task 3: Implement Sri Jagdamba Pearls Page
**Files:**
- Modify: `app/client/[slug]/page.jsx`

- [ ] **Step 1: Implement SriJagdambaPearlsPage Component**
  Include:
  - Global CSS styles including fonts Google pairing: Prata display font with Plus Jakarta Sans body.
  - Symmetrical cream/light gold minimal styling: Cream bg `#FDFBF7`, soft gold borders `#D4AF37`, elegant bronze text `#8C6239`.
  - Hero Header: "The Pearl Legacy of Hyderabad".
  - Brand Heritage: Secunderabad MG Road heritage, pearls selection, Royal Nizami connection since 1975.
  - Customizer: Metal (22K Gold, 18K Rose Gold, Platinum) + Gems (Pearl, Diamond, Ruby, Emerald). Real pricing formulas: gold=₹7200/g, rosegold=₹6100/g, plat=₹3800/g. Pearl=₹12000/u, diamond=₹85000/ct, ruby=₹35000/ct, emerald=₹45000/ct. Making charges 12%. Active states, dynamic visual mockup representation using clean interactive SVG outlines.
  - Signature Collection: Chokers, Nizami strings, Royal Pearl necklaces.
  - Consultation Form: Inputs (name, phone, email, date, custom note) with inline validation and simulated loading/success state.
  - Testimonials: Authentic Hyderabad-based client reviews.
  - Footer: store location details, email, and phone.

---

### Task 4: Implement Suhani Pittie Page
**Files:**
- Modify: `app/client/[slug]/page.jsx`

- [ ] **Step 1: Implement SuhaniPittiePage Component**
  Include:
  - Global CSS styles: Cinzel display font with Inter body font.
  - Asymmetric layout, double lines, sleek bronze borders `#A87C43`, deep bronze/brass text `#593E1A`, bone/warm gray cream background `#F5F2EC`.
  - Hero Header: "Avant-Garde Metal Art".
  - Brand Heritage: Contemporary sculptor designer, metal craftsmanship, Banjara Hills store details.
  - Customizer: Metal + Gem selection with design-forward visuals and pricing. Custom gold=₹7500/g, rosegold=₹6400/g, plat=₹4000/g. Diamond=₹90000/ct, emerald=₹50000/ct, ruby=₹40000/ct, pearl=₹10000/u. Design premium 22%. Minimalist visual wire-frame mockup utilizing elegant SVGs.
  - Signature Collection: Brass & Gold chokers, structural neckpieces, contemporary cuffs.
  - Consultation Form: Inputs with unique clean styling and validations.
  - Testimonials: Banjara Hills elite client reviews.
  - Footer: Road No. 4, Banjara Hills contact information.

---

### Task 5: Verification & Build Compilation
**Files:**
- Run Build

- [ ] **Step 1: Verify compilation with zero errors**
  Command: `npm run build`
- [ ] **Step 2: Correct any warnings, lints, or missing elements**
