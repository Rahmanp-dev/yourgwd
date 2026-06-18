# Project: Tolichowki Skin & Cosmetic Clinics Preview Pages

## Architecture
- **Next.js Frontends**: Code 20 premium client pages under `app/client/[slug]/page.jsx` and `layout.jsx`.
- **E2E Testing / Verification**: Verify Next.js compilation using `npm run build` with zero errors.
- **Git Deployment**: Commit and push to `main` branch.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | UI Page Generation | Create 20 distinct, premium LONG-FORMAT client pages with Tailwind CSS via 10 parallel worker subagents. No dark mode. | None | PLANNED |
| 2 | Build Verification | Run `npm run build` and ensure compilation passes with zero errors. | M1 | PLANNED |
| 3 | Git Deployment | Commit all generated files and push to `main` branch. | M2 | PLANNED |

## Interface Contracts
### Next.js Frontend Pages
- Component: `app/client/[slug]/page.jsx`
- Layout: `app/client/[slug]/layout.jsx` for OpenGraph metadata.
- Styling: Tailwind CSS classes applying distinct premium design systems based on the `ui-ux-pro-max` skill. Strictly Light Mode (NO dark mode).
- Content: Long format with:
  - **Hero Header**: Engaging title, taglines, and immersive background gradients/imagery.
  - **Clinic Expertise/About**: A section detailing their cosmetic legacy and specialty.
  - **Interactive Treatment Estimator**: Client-side interactive widget where users can select treatment types (e.g. Laser Hair Removal, Acne Scar Treatment, Anti-Aging, Botox), body areas, and sessions to see custom price estimates and mock visuals.
  - **Services Grid**: Grid display of premium treatment cards.
  - **Booking Consultation Form**: A contact/booking form with active state validations.
  - **Patient Transformations/Testimonials**: Real-looking reviews from Hyderabad-based clients.
  - **Store Details Footer**: Showcasing real contact numbers, address, and email details.
- Icons: Vector-based Lucide icons (import React and lucide-react, or use inline SVG). No emojis allowed.

## Slugs and Design Systems:

1. `dermed-clinic-tolichowki` & `afaq-laser-cosmetic-clinic`
   - **Design Style**: Glassmorphism Light / Frosted Translucent (Soft pink/peach background, frosted glass cards, glow effects, rose gold borders)
   - **Palette**: Blush Pink (`#FFF0EE`), Rose Gold (`#B76E79`), Warm White (`#FFFDFD`).

2. `celestee-skin-clinic-tolichowki` & `ambrosia-clinic-tolichowki`
   - **Design Style**: Neumorphic Clean / Soft Dermatology (Soft grey-blue background, soft shadows, inset/outset inputs and cards, calming cyan highlights)
   - **Palette**: Soft grey-blue background (`#F0F4F8`), calming cyan (`#06B6D4`), dark slate (`#1E293B`).

3. `cura-skin-hair-clinic` & `eternelle-aesthetics-tolichowki`
   - **Design Style**: Luxury Classic Gold & Cream (Rich cream base, elegant serif headings, warm gold accent, thin dark slate borders)
   - **Palette**: Cream base (`#FAF8F5`), gold accent (`#D4AF37`), slate text (`#334155`).

4. `oliva-skin-clinic-tolichowki` & `kaya-skin-clinic-tolichowki`
   - **Design Style**: Soft Pastel Blush & Rose (Rose gold accents, soft pink/lavender backdrop, rounded cards, organic waves)
   - **Palette**: Soft pink background (`#FFF5F5`), lavender-blush (`#FFF0F5`), deep slate (`#2D3748`).

5. `clear-skin-centre-tolichowki` & `sree-skin-care-clinic-tolichowki`
   - **Design Style**: Modern Bento Grid / Clean Slate (Crisp off-white background, structured borders, pastel teal accent buttons, dense info cards)
   - **Palette**: Off-white base (`#F8FAFC`), teal accent (`#0D9488`), dark grey (`#1F2937`).

6. `radiance-skin-clinic-tolichowki` & `dr-nivedita-dadu-dermatology`
   - **Design Style**: Organic Wellness Green / Sage & Forest (Sage and mint base, eucalyptus green buttons, raw/organic shapes, leaf motifs, fresh hydration feel)
   - **Palette**: Sage green (`#EAF0EB`), mint accents (`#A7F3D0`), forest green (`#065F46`).

7. `dermaclinix-hyderabad-tolichowki` & `elite-skin-hair-clinic-tolichowki`
   - **Design Style**: Minimalist High-Contrast Chic (Pure white base, crisp slate text, sharp 1px borders, bold elegant sans-serif, high-fashion medical vibe, vivid sky blue highlight)
   - **Palette**: Pure white (`#FFFFFF`), sky blue highlight (`#0EA5E9`), dark slate (`#0F172A`).

8. `vcare-skin-hair-clinic-tolichowki` & `labelle-skin-hair-clinic-tolichowki`
   - **Design Style**: Futuristic Pearl / Cyber-Metallic (Ultra light silver/pearl background, soft metallic blue gradients, holographic glass cards, lavender buttons)
   - **Palette**: Pearl background (`#F3F4F6`), metallic blue (`#3B82F6`), lavender (`#8B5CF6`).

9. `kosmoderma-skin-clinic-tolichowki` & `skinns-clinic-tolichowki`
   - **Design Style**: Bold Retro / Warm Clay & Terracotta (Creamy warm sand background, terracotta, warm honey accents, rounded playful layout, friendly family clinic feel)
   - **Palette**: Warm sand (`#F5EBE6`), terracotta (`#C2593F`), honey (`#F59E0B`).

10. `rejuve-skin-hair-clinic-tolichowki` & `flawless-skin-laser-clinic-tolichowki`
    - **Design Style**: Luxury Orchid & Plum (Very pale lavender-blush base, deep royal plum accents, orchid buttons, elegant floral borders)
    - **Palette**: Lavender-blush base (`#FAF5FF`), plum accents (`#4A154B`), orchid highlight (`#A855F7`).
