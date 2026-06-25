# Project: Premium E-commerce Preview Page - Kriti Handlooms

## Architecture
- **Next.js Frontend**: Premium, long-format, light-mode Next.js UI preview page under `app/client/kriti-handlooms-cyberabad/page.jsx` & `layout.jsx`.
- **Rules**:
  - Strictly Light Mode. NO dark mode on any element whatsoever. No `dark:` Tailwind classes, no `bg-gray-900`, `bg-slate-900`, `bg-black`, etc.
  - No emojis as structural icons (use Lucide React icons).
  - Fully mobile responsive with zero horizontal overflow.
  - Function names in layout/page must be single CamelCase identifiers (`KritiHandloomsCyberabadPage`, `KritiHandloomsCyberabadLayout`).
  - Next.js page components must start with `"use client"` directive.
  - High quality Unsplash URLs with `?auto=format&fit=crop&q=80&w=800` parameters.

## Milestones
| # | Name | Scope | Dependencies | Status | Subagent ID | Folder Paths |
|---|------|-------|-------------|--------|-------------|--------------|
| 1 | UI Discovery | Design exploration and asset selection | None | DONE | 1d123e96-1ac7-4ba7-ac69-664081eb3145 | `.agents/explorer_kriti_1/` |
| 2 | UI Generation | page.jsx and layout.jsx implementation | M1 | PLANNED | TBD | `app/client/kriti-handlooms-cyberabad/` |
| 3 | Code Review | Style, responsiveness, and content check | M2 | PLANNED | TBD | `app/client/kriti-handlooms-cyberabad/` |
| 4 | Forensic Audit | Verify compliance and no-dark-mode constraints | M3 | PLANNED | TBD | Project Root |
| 5 | Build Verification | Run `npm run build` to verify compilation. | M2 | PLANNED | TBD | Project Root |

## Required Content Sections (7 Sections Minimum)
### Kriti Handlooms (Earthy Organic Claymorphism System):
1. **Hero Section** — Large headline ("Kriti Handlooms"), tagline, engaging hero visual (use Unsplash), primary CTA ("Shop Collection").
2. **Featured Collections / Lookbook** — Grid of high-quality ethnic wear imagery.
3. **Product Grid (Shop)** — At least 4-6 products with names, prices (in INR), and "Add to Cart" buttons.
4. **Brand Story / About** — Artisanal focus, craftsmanship.
5. **Testimonials / Social Proof** — Customer reviews.
6. **Trust Badges / Value Props** — E.g., Secure Payments, Custom Tailoring.
7. **Footer** — Contact info, fake WhatsApp link using `https://wa.me/919876543212`.
