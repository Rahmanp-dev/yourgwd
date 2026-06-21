## 2026-06-21T10:35:45Z
You are a teamwork_preview_worker. Your role is Worker Style 1.
Your working directory is: d:\GWD\Sales Machine\.agents\worker_style_1_rep/
Your mission is to implement 2 distinct, premium, long-format Next.js UI preview pages inside the workspace `d:\GWD\Sales Machine`.

The 2 pages to build are:
1. California Dreamworks
- Slug: california-dreamworks-banjara-hills
- Principal Designer: Aliraza
- Phone: +91 98492 57860
- Address: Inwinex Towers, Road No. 2, Opposite Rainbow Children's Hospital, Banjara Hills, Hyderabad, Telangana 500034
- Specializations: Luxury Residential, Custom Cabinetry, Commercial Retail
- Design System: Earthy Glassmorphism — soft warm beige/sandy backdrop (#FAF0DD or bg-amber-50/50), frosted white glass cards (backdrop-blur-md bg-white/70), warm terracotta accents (#D35400), clean serif-sans typography (Playfair Display + Outfit).

2. Percept Interior Solutions
- Slug: percept-interior-solutions-banjara-hills
- Principal Designer: Feroz
- Phone: +91 90000 04706
- Address: Ground Floor, #8-2-310/1/10/1, Road No. 10, Nandi Nagar, Banjara Hills, Hyderabad, Telangana 500034
- Specializations: Modern Residential, Office Fit-outs, Wallpaper & Wall Decor
- Design System: Clean Modern Minimalist — crisp pure white backdrop, thin charcoal borders, high contrast layouts, royal blue accents (#2E86C1), sans-serif (Inter/Plus Jakarta Sans).

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
4. Function names must be single CamelCase identifiers: `CaliforniaDreamworksPage`, `CaliforniaDreamworksLayout`, `PerceptInteriorSolutionsPage`, `PerceptInteriorSolutionsLayout`.
5. Use `"use client"` directive at the top of every `page.jsx`.
6. Use Lucide React icons only. No emoji icons.
7. Use real Unsplash URLs with `?auto=format&fit=crop&q=80&w=800`.
8. Fully mobile responsive, clean typography pairings, active tap/click feedback for all buttons/tabs, zero horizontal overflow.
9. Initialize your `progress.md` in your working directory and update it regularly.
10. Verify compile success by running `npm run build` or similar checking.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

When completed, write a handoff report to `handoff.md` in your working directory, and message the parent orchestrator (c9c92643-5208-4212-835b-f7d463c14215) with the paths of your generated pages and layout files.
