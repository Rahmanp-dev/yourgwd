# BRIEFING — 2026-06-17T11:33:00+05:30

## Mission
Build 2 premium, highly distinct, long-format Next.js UI preview pages for Caterers & Cloud Kitchens in Uppal, Hyderabad.

## 🔒 My Identity
- Archetype: worker_style_2_uppal
- Roles: implementer, qa, specialist
- Working directory: d:\GWD\Sales Machine\.agents\worker_style_2_uppal
- Original parent: 56c2689c-34eb-4dc2-bb55-cde6771e2483
- Milestone: build-client-previews

## 🔒 Key Constraints
- Assigned Design Style: Neumorphic Modern Light
- Palette: Soft cream background (#F4F4F1), soft orange/red buttons and highlights, orange/yellow food details.
- No Dark Mode: Must be light, warm, or pastel tones.
- Target routes:
  1. Jaswanth Caterers: `app/client/jaswanth-caterers-uppal/page.jsx` & `layout.jsx`
  2. Sri Venkateshwara Caterers: `app/client/sri-venkateshwara-caterers-uppal/page.jsx` & `layout.jsx`
- Each route must have layout.jsx with metadata for proper WhatsApp unfurling (OpenGraph matching https://yourgwd.vercel.app/client/[slug]).
- Required sections:
  1. Hero Header (taglines, background gradient/colors, food images layout)
  2. Brand Story/Heritage (Uppal roots, cooking legacy, hygiene, chefs)
  3. Interactive Menu Customizer/Estimator (Event type, guest count slider, menu tiers, custom pricing, mock items)
  4. Signature Dishes Grid (cards of premium dishes)
  5. Booking Consultation Form (validation, phone, email, success notifications)
  6. Customer Testimonials (mentioning local places in Hyderabad: Uppal, Gachibowli, Secunderabad)
  7. Store Details Footer (real address, phone, email in Uppal, Hyderabad)
- Fonts: Display + readable body faces.
- Icons: Lucide icons (no emojis).
- Tap feedback: Active state feedback on buttons.

## Loaded Skills
- ui-ux-pro-max: d:\GWD\Sales Machine\.agents\skills\ui-ux-pro-max\SKILL.md
- frontend-design: d:\GWD\Sales Machine\.agents\skills\frontend-design\SKILL.md

## Change Tracker
- **Files modified**:
  - `app/client/jaswanth-caterers-uppal/layout.jsx` — Layout metadata & font setup.
  - `app/client/jaswanth-caterers-uppal/page.jsx` — Premium Neumorphic Light page.
  - `app/client/sri-venkateshwara-caterers-uppal/layout.jsx` — Layout metadata & font setup.
  - `app/client/sri-venkateshwara-caterers-uppal/page.jsx` — Traditional Neumorphic Light page.
- **Build status**: Pass. Compiled successfully.
- **Pending issues**: None.

## Quality Status
- **Build/test result**: Pass
- **Lint status**: Clean
- **Tests added/modified**: N/A

## Key Decisions Made
- Define custom Neumorphic Modern Light style presets in page component `<style>` tag to keep it self-contained.
- Build unique layout concepts for the two caterers to ensure they look *highly distinct* while sharing the same design style.

## Artifact Index
- d:\GWD\Sales Machine\.agents\worker_style_2_uppal\ORIGINAL_REQUEST.md — Request history log.
