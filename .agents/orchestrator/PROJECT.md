# Project: Premium E-commerce Preview Pages - Aanya Ethnic Boutique & Kriti Handlooms

## Architecture
- **Next.js Frontends**: Premium, long-format, light-mode Next.js UI preview pages under:
  - `app/client/aanya-ethnic-cyberabad/page.jsx` & `layout.jsx`
  - `app/client/kriti-handlooms-cyberabad/page.jsx` & `layout.jsx`
- **Rules**:
  - Strictly Light Mode. NO dark mode on any element whatsoever. No `dark:` Tailwind classes, no `bg-gray-900`, `bg-slate-900`, `bg-black`, etc.
  - No emojis as structural icons (use Lucide React icons).
  - Fully mobile responsive with zero horizontal overflow.
  - Function names in layout/page must be single CamelCase identifiers.
  - Next.js page components must start with `"use client"` directive.
  - High quality Unsplash URLs with `?auto=format&fit=crop&q=80&w=800` parameters.

## Milestones
| # | Name | Scope | Dependencies | Status | Subagent ID | Folder Paths |
|---|------|-------|-------------|--------|-------------|--------------|
| 1 | UI Discovery (Aanya) | Design exploration and asset selection | None | DONE | eb698dac-8006-4ad2-8335-5469478df6b5 | `.agents/teamwork_preview_explorer_aanya_discovery/` |
| 2 | UI Generation (Aanya) | Aanya boutique page & layout implementation | M1 | IN_PROGRESS | 2e756f28-3421-46e1-a9a9-c5abb1286dc3 | `app/client/aanya-ethnic-cyberabad/` |
| 3 | UI Discovery (Kriti) | Design exploration and asset selection | None | IN_PROGRESS | 1d123e96-1ac7-4ba7-ac69-664081eb3145 | `.agents/teamwork_preview_explorer_kriti_1/` etc. |
| 4 | UI Generation (Kriti) | Kriti boutique page & layout implementation | M3 | PLANNED | TBD | `app/client/kriti-handlooms-cyberabad/` |
| 5 | Build Verification | Run `npm run build` to verify compilation for both. | M2, M4 | PLANNED | TBD | Project Root |
| 6 | Forensic Audit | Verify compliance and no-dark-mode constraints | M5 | PLANNED | TBD | Project Root |

## Required Content Sections (7 Sections Minimum)
### Aanya Ethnic Boutique (Glassmorphism System):
1. Hero Section ("Aanya Ethnic Boutique")
2. Featured Collections / Lookbook
3. Product Grid (4-6 products with INR prices)
4. Brand Story / About (Artisanal focus)
5. Testimonials / Social Proof
6. Trust Badges / Value Props
7. Footer (Cyberabad boutique info, WhatsApp `https://wa.me/919876543210`)

### Kriti Handlooms (Earthy Organic Claymorphism System):
1. Hero Section ("Kriti Handlooms")
2. Featured Collections / Lookbook
3. Product Grid (4-6 products with INR prices)
4. Brand Story / About (Artisanal focus)
5. Testimonials / Social Proof
6. Trust Badges / Value Props
7. Footer (Cyberabad handloom info, WhatsApp `https://wa.me/919876543212`)
