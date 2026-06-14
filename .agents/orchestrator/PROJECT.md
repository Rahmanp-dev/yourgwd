# Project: Premium Car Detailing Sales Machine in Attapur, Hyderabad

## Architecture
- **Next.js Frontends**: Code 10 premium client pages under `app/client/[slug]/page.jsx` and `layout.jsx`.
- **E2E Testing / Verification**: Verify Next.js compilation using `npm run build` with zero errors.
- **Git Deployment**: Commit and push to `main` branch.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | UI Page Generation | Create 10 distinct, premium LONG-FORMAT client pages with Tailwind CSS via 5 parallel worker subagents. | None | PLANNED |
| 2 | Build Verification | Run `npm run build` and ensure compilation passes with zero errors. | M1 | PLANNED |
| 3 | Git Deployment | Commit all generated files and push to `main` branch. | M2 | PLANNED |

## Interface Contracts
### Next.js Frontend Pages
- Component: `app/client/[slug]/page.jsx`
- Layout: `app/client/[slug]/layout.jsx` for OpenGraph metadata.
- Styling: Tailwind CSS classes applying distinct premium design systems based on the `ui-ux-pro-max` skill.
- Content: Long format with Hero, Services, Pricing Packages (e.g. Ceramic Coating, PPF), Testimonials, Before/After Gallery, FAQ, and Contact. No generic templates allowed.
- Icons: Vector-based Lucide icons (import React and lucide-react if needed, or use inline SVG).

## Slugs and Design Systems:
1. `detailing-mafia-attapur` -> Glassmorphism (Frosted glass overlay, neon red/purple accents on deep carbon fiber grey, premium crime-syndicate-boss look)
2. `aqua-shine-detailing-attapur` -> Neumorphism (Soft, tactile metallic grey/blue surfaces, liquid/water droplet curves, high-end hydrodynamic feel)
3. `gorgeous-car-detailers-attapur` -> Dark Mode / Midnight Tech (Jet black, gold trim, glowing yellow accents, high contrast premium luxury detailing theme)
4. `5k-car-care-attapur` -> Bento Grid (Ultra-structured dashboard-style layout, bright safety orange and anthracite grey, showing statistics like cars detailed, packages, locations, ratings)
5. `vinayaka-car-wash-attapur` -> Minimalist / Swiss Typography (Pure white & deep dark metallic navy, bold sans-serif, high breathing room, ultra-clean aesthetic focusing on pure washing craftsmanship)
6. `gomechanic-attapur` -> Neo-brutalism (Thick black borders, hard shadows, industrial yellow and charcoal, high energy, bold service list grids, raw workshop aesthetic)
7. `ceramic-pro-jubilee-hills` -> Retro-futurism/Cyberpunk (Neon cyan & hot pink, glowing grid borders, carbon fiber textures, targeting high-end tuner cars and ceramic-pro coatings)
8. `ceramic-pro-hyderabad` -> Corporate / Premium Luxury (Deep executive navy, champagne gold accents, serif titles, high-status presentation of multi-stage correction, VIP customer perks)
9. `clean-fast-car-wash-attapur` -> Electric/Neon Tech Green & Aqua (Fresh mint greens and electric cyan on deep teal background, conveying speed, eco-friendly waterless details, and rapid gloss services)
10. `detailing-mafia-banjara-hills` -> High-Contrast Geometric (Triangles, angled polygon background elements, bold red & dark gray, sharp diagonal section breaks, aggressive high-performance detailing vibe)
