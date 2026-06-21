## 2026-06-21T10:35:45Z
You are a teamwork_preview_worker. Your role is Worker Style 2.
Your working directory is: d:\GWD\Sales Machine\.agents\worker_style_2_rep/
Your mission is to implement 2 distinct, premium, long-format Next.js UI preview pages inside the workspace `d:\GWD\Sales Machine`.

The 2 pages to build are:
1. Raavera Interior Designer
- Slug: raavera-interior-designer-banjara-hills
- Principal Designer: Raavera
- Phone: +91 93962 22444
- Address: Banjara Hills, Hyderabad - 500034 (Landmark: Near State Bank ATM)
- Specializations: Residential Interiors, Space Planning, Custom Home Decor
- Design System: Warm Neumorphism — soft ivory/cream backdrop (#FAF8F5), smooth neumorphic inset/outset cards, warm brass/gold accents (#C5A880), elegant Poppins font.

2. Design Edge
- Slug: design-edge-banjara-hills
- Principal Designer: Ram K. Mahidhar
- Phone: +91 97034 57917
- Address: Door No. 6-3-596/65, 2nd Floor, Adarsh Villa, Naveen Nagar Colony, Road No. 1, Banjara Hills, Hyderabad - 500034
- Specializations: Commercial and Corporate Offices, Luxury Residential, Turnkey Interiors
- Design System: Fresh Botanical Mint — soft minty sage green (#E8F8F5), forest green accents (#1E8449), clean modern card layouts, rounded shapes, friendly Quicksand font.

Apply the skills:
- ui-ux-pro-max (d:\GWD\Sales Machine\.agents\skills\ui-ux-pro-max\SKILL.md)
- frontend-design (d:\GWD\Sales Machine\.agents\skills\frontend-design\SKILL.md)

Requirements:
1. Create `app/client/[slug]/layout.jsx` and `app/client/[slug]/page.jsx` for both slugs.
2. STRICTLY NO DARK MODE. All pages must use Light Mode, bright pastels, or clean whitespace aesthetics. No `dark:` Tailwind classes, no `bg-gray-900`, `bg-slate-900`, `bg-black`, or similar dark backgrounds.
3. Every page MUST include all 9 required sections:
   - Hero Section: Large headline, tagline, luxury interior photo (no dark colors), CTA linking to consultation booking.
   - Stats Bar: 3-4 metrics (e.g. Projects Completed, Years of Experience, Design Awards, Satisfied Clients).
   - Principal Designer Bio: Introduces the designer by name, their philosophy and qualifications.
   - Portfolio Showcase / Interactive Style Selector: Tab selector for styles (e.g., Modern Minimalist, Art Deco, Luxury Classical, Contemporary), showing mock project gallery, materials, execution budget.
   - Interactive Design Style Quiz: 3-4 questions dynamically recommending a style based on user choice.
   - Our Design Process: Interactive step-by-step workflow (Consultation, Concept, 3D Rendering, Procurement, Execution).
   - Client Testimonials: 3-4 reviews specific to Hyderabad families/projects.
   - Consultation Booking / Enquiry Form: Name, Phone, Email, Project Type dropdown, Budget range dropdown, Start Date, Message. Client-side real-time validation, success screen with confirmation reference number.
   - Studio Location & Hours Footer: Address, phone, operating hours, embedded map placeholder.
4. Function names must be single CamelCase identifiers: `RaaveraInteriorDesignerPage`, `RaaveraInteriorDesignerLayout`, `DesignEdgePage`, `DesignEdgeLayout`.
5. Use `"use client"` directive at the top of every `page.jsx`.
6. Use Lucide React icons only. No emoji icons.
7. Use real Unsplash URLs with `?auto=format&fit=crop&q=80&w=800`.
8. Fully mobile responsive, clean typography pairings, active tap/click feedback for all buttons/tabs, zero horizontal overflow.
9. Initialize your `progress.md` in your working directory and update it regularly.
10. Verify compile success by running `npm run build` or similar checking.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

When completed, write a handoff report to `handoff.md` in your working directory, and message the parent orchestrator (c9c92643-5208-4212-835b-f7d463c14215) with the paths of your generated pages and layout files.
