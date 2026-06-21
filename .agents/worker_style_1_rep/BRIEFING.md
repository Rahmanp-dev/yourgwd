# BRIEFING — 2026-06-21T10:35:45Z

## Mission
Implement 2 distinct, premium, long-format Next.js UI preview pages for California Dreamworks and Percept Interior Solutions under [slug] routes.

## 🔒 My Identity
- Archetype: teamwork_preview_worker
- Roles: implementer, qa, specialist
- Working directory: d:\GWD\Sales Machine\.agents\worker_style_1_rep/
- Original parent: c9c92643-5208-4212-835b-f7d463c14215
- Milestone: UI Preview Implementation

## 🔒 Key Constraints
- Light mode only, strictly no dark backgrounds or dark: selectors.
- Both routes must resolve at app/client/[slug]/layout.jsx and app/client/[slug]/page.jsx.
- Must have all 9 required sections in each page.
- Function names must be single CamelCase: CaliforniaDreamworksPage, CaliforniaDreamworksLayout, PerceptInteriorSolutionsPage, PerceptInteriorSolutionsLayout.
- "use client" on every page.jsx.
- Lucide React icons only (no emojis).
- Unsplash image URLs only with proper query parameters.
- Mobile responsive, tap/click feedback, no horizontal overflow.

## Current Parent
- Conversation ID: c9c92643-5208-4212-835b-f7d463c14215
- Updated: not yet

## Task Summary
- **What to build**: Two Next.js pages/layouts under dynamic route `app/client/[slug]`.
- **Success criteria**: Pages match user's design systems (Earthy Glassmorphism vs. Clean Modern Minimalist), compile cleanly, and support dynamic routing for the two specific slugs (`california-dreamworks-banjara-hills` and `percept-interior-solutions-banjara-hills`).
- **Interface contracts**: [TBD]
- **Code layout**: [TBD]

## Key Decisions Made
- Use a single dynamic router or conditional rendering based on the slug, or static-like routing inside a dynamic route. Wait, the requirement says "Create `app/client/[slug]/layout.jsx` and `app/client/[slug]/page.jsx` for both slugs." This is a single dynamic route folder! So inside `app/client/[slug]/page.jsx`, we should inspect the `slug` parameter (or `params.slug`) and render the appropriate page component: `CaliforniaDreamworksPage` for `california-dreamworks-banjara-hills` and `PerceptInteriorSolutionsPage` for `percept-interior-solutions-banjara-hills`. And similarly for layout.jsx. Let's make sure!

## Change Tracker
- **Files modified**: None
- **Build status**: Untested
- **Pending issues**: None

## Quality Status
- **Build/test result**: Untested
- **Lint status**: Untested
- **Tests added/modified**: None

## Loaded Skills
- **Source**: d:\GWD\Sales Machine\.agents\skills\ui-ux-pro-max\SKILL.md
- **Local copy**: d:\GWD\Sales Machine\.agents\worker_style_1_rep\skills\ui-ux-pro-max\SKILL.md
- **Core methodology**: Premium UI/UX design heuristics for web and mobile components.
- **Source**: d:\GWD\Sales Machine\.agents\skills\frontend-design\SKILL.md
- **Local copy**: d:\GWD\Sales Machine\.agents\worker_style_1_rep\skills\frontend-design\SKILL.md
- **Core methodology**: Distinctive visual design and font pairings.

## Artifact Index
- None
