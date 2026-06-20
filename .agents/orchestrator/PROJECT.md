# Project: Tolichowki Pre-school Preview Pages

## Architecture
- **Next.js Frontends**: Code 10 premium pre-school pages under `app/client/[slug]/page.jsx` and `layout.jsx`.
- **E2E Testing / Verification**: Verify Next.js compilation using `npm run build` with zero errors.
- **Rules**: Strictly Light Mode (NO dark mode), no emojis as structural icons (use Lucide React icons), fully mobile responsive, single CamelCase identifiers for components.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | UI Page Generation | Create 10 distinct, premium LONG-FORMAT client pages with Tailwind CSS via 5 parallel worker subagents. Strictly Light Mode. | None | IN_PROGRESS (73c9969c-d730-49e3-bc2e-dc1fe72bf4d6, 4464d181-db61-43eb-91a1-4ee469dfe2c4, c3d52801-5b70-42a6-89ba-cd4b06c97480, 7f8aafd0-028f-4b4d-b12b-00c4ddcd1e03, 1aa2b3e4-c912-476b-ba0a-2fbc9979682d) |
| 2 | Build Verification | Run `npm run build` and ensure compilation passes with zero errors. | M1 | PLANNED |
| 3 | Final Reporting | Deliver handoff and report to Sentinel. | M2 | PLANNED |

## Interface Contracts
### Next.js Frontend Pages
- Component: `app/client/[slug]/page.jsx` (must use `"use client"` directive)
- Layout: `app/client/[slug]/layout.jsx` for custom OpenGraph metadata with single CamelCase layout function names.
- Styling: Tailwind CSS classes applying distinct premium design systems based on the `ui-ux-pro-max` skill. Strictly Light Mode (NO dark mode).
- Sections: Minimum 7 full content sections per page (specifically the 9 required sections):
  1. **Hero Section**: Engaging title, taglines, light gradient backgrounds, primary CTA linking to admission form.
  2. **Stats Bar**: 3-4 metrics (e.g. Years Est., Enrolled, Activities, Parent Satisfaction %).
  3. **About / Philosophy**: Mission, teaching approach, unique factors in Tolichowki.
  4. **Curriculum & Programs**: 4-6 cards (Playgroup, Nursery, LKG, UKG, Daycare, After-school) with icon, age range, highlights.
  5. **Facilities Gallery**: Visual showcase of classrooms/play areas using Unsplash images with hover effects.
  6. **Fee Estimator**: Interactive widget using `useState` to calculate fees.
  7. **Parent Testimonials**: 3-4 review cards with star ratings.
  8. **Admission Enquiry Form**: Child's/Parent's details, DOB (with auto age calculation), program dropdown, date, validations, success card.
  9. **Contact & Location Footer**: Address in Tolichowki, phone, email, operating hours, Google Maps iframe placeholder.

- Icons: Vector-based Lucide React icons. No emojis as structural icons.

## Slugs and Design Systems:

1. `bachpan-play-school-tolichowki`
   - **Design Style**: Cheerful Glassmorphism
   - **Palette**: Primary rose/coral (`#F76E6E`), white frosted cards, playful rounded corners
   - **Font**: Nunito

2. `kidzee-tolichowki`
   - **Design Style**: Fresh Neumorphism
   - **Palette**: Soft mint green (`#A8E6CF`), subtle shadow-inset elements, clean aesthetics
   - **Font**: Plus Jakarta Sans

3. `little-millennium-tolichowki`
   - **Design Style**: Sunshine Flat
   - **Palette**: Bright yellow (`#FFD166`), orange accents (`#F4845F`), geometric shapes
   - **Font**: Poppins

4. `eurokids-tolichowki`
   - **Design Style**: Sky Blue Minimal
   - **Palette**: Soft sky blue (`#BDE0FE`), white cards, gentle gradients
   - **Font**: Inter

5. `kangaroo-kids-tolichowki`
   - **Design Style**: Nature Green
   - **Palette**: Earthy sage (`#6BAA75`), cream backgrounds (`#FEFAE0`)
   - **Font**: Merriweather (headings) + Open Sans (body)

6. `orchids-international-school-tolichowki`
   - **Design Style**: Luxury Pearl
   - **Palette**: Champagne (`#F5E6C8`), deep navy accent text (`#1B4080`), premium feel
   - **Font**: Playfair Display (headings) + Inter (body)

7. `stem-kids-preschool-tolichowki`
   - **Design Style**: Tech Bright
   - **Palette**: Electric purple (`#7B61FF`), lime green accents (`#B5FF6D`), futuristic clean design
   - **Font**: Space Grotesk

8. `maple-bear-preschool-tolichowki`
   - **Design Style**: Canadian Warmth
   - **Palette**: Maple red (`#C0392B`) on warm cream, bear paw motifs
   - **Font**: Lato (headings) + Georgia (body)

9. `little-elly-preschool-tolichowki`
   - **Design Style**: Pastel Rainbow
   - **Palette**: Lavender (`#C9B8FF`), soft pink (`#FFB3C6`), multi-hue gradient hero
   - **Font**: Quicksand

10. `footprints-play-school-tolichowki`
    - **Design Style**: Terracotta Warmth
    - **Palette**: Dusty terracotta (`#E07A5F`), sand (`#F2CC8F`), footprint-inspired dividers
    - **Font**: Josefin Sans
