# Project: Premium Interior Designers in Attapur, Hyderabad

## Architecture
- **Next.js Frontends**: Code 20 premium client pages under `app/client/[slug]/page.jsx` and `layout.jsx`.
- **E2E Testing / Verification**: Verify Next.js compilation using `npm run build` with zero errors.
- **Git Deployment**: Commit and push to `main` branch.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | UI Page Generation | Create 20 distinct, premium LONG-FORMAT client pages with Tailwind CSS via 10 parallel worker subagents. | None | DONE |
| 2 | Build Verification | Run `npm run build` and ensure compilation passes with zero errors. | M1 | PLANNED |
| 3 | Git Deployment | Commit all generated files and push to `main` branch. | M2 | PLANNED |

## Interface Contracts
### Next.js Frontend Pages
- Component: `app/client/[slug]/page.jsx`
- Layout: `app/client/[slug]/layout.jsx` for OpenGraph metadata.
- Styling: Tailwind CSS classes applying distinct premium design systems based on the `ui-ux-pro-max` skill.
- Content: Long format with Hero, About Us, Services Portfolio (e.g. Living Room, Modular Kitchen, Wardrobes, Lighting), Design Process (e.g. Consult, Design, Execute), Testimonials, FAQ, and Contact Form. No generic templates allowed.
- Icons: Vector-based Lucide icons (import React and lucide-react, or use inline SVG).

## Slugs and Design Systems:
1. `tara-design-solutions-attapur` -> Japandi Fusion (Very minimal, slate `#2F3E46` and bamboo beige `#F5F2EB`, textured plaster whites `#FDFDFD`, massive breathing room, delicate lines, thin borders)
2. `livspace-attapur` -> Mid-Century Modern (Teal `#006E7F` and terracotta `#D84B20`, clean geometries, warm sand backdrop `#F9F5F0`, bold section headers, modular card structure)
3. `dasos-cabinets-hyderabad` -> Minimalist Scandinavian (Warm light oak wood tones `#D2B48C`, off-white background `#FAFAFA`, forest green/sage accents `#4F772D`, soft organic curves, spacious grid layout, clean sans-serif typography)
4. `mak-homes-construction` -> Industrial Chic/Neo-Brutalism (Raw concrete grey `#E5E5E5`, rusty amber/orange accents `#FF7F50`, heavy black borders, stark grid layout, monospaced tech fonts, bold metalwork showcase)
5. `luxe-designs-spaces-hyd` -> Neo-Classical Elegance / French Luxury (Champagne gold `#D4AF37`, marble white background `#FAFAFA`, rich bronze accents `#4A3B32`, high-contrast serif typography, ultra-premium editorial layout)
6. `homelane-attapur` -> Pastel Glassmorphism (Frosted translucent panels, soft pastel pink/purple/blue gradients, glowing background blobs, round corners, modern fluid typography)
7. `apple-interiors-hyd` -> High-Tech Modern / Midnight Tech (Jet black `#0A0A0A`, brushed steel silver `#E0E0E0`, subtle neon white/ice-blue glows `#00E5FF`, futuristic structural grids, clean sans-serif typography)
8. `metal-and-more` -> Brutalist (Stark grids, bold high-contrast primary colors, thick dark borders, offset shadows, custom typography)
9. `namasvi-interiors` -> Biophilic / Organic Green (Forest green `#1E3F20`, emerald `#50C878`, gold accents `#FFD700`, soft floral background tints `#F4F8F4`, curved cards, elegant serif headings, focusing on nature-integrated luxury)
10. `simply-interiors-hyd` -> Bento Grid / Contemporary (Structured grid sections, charcoal `#2C3E50` and burnt orange `#E67E22`, clean dividers, high information density, interactive tab sections for layout options)
11. `dlife-interiors-hyd` -> Art Deco (Deep emerald green `#097969` and metallic gold `#D4AF37`, geometric patterns, bold diagonal sections, serif display font, high contrast editorial styling)
12. `seema-design-studio` -> Neumorphism (Soft inset/outset shadows on soft grey backgrounds `#F0F0F3`, subtle glowing accents, clean minimalist UI elements)
13. `designcafe-hyderabad` -> Modern Mediterranean (Warm terracotta `#C04000`, olive green `#808000`, cream white backgrounds `#FDFBF7`, arches, elegant typography, warm sun-drenched feel)
14. `bonito-designs-hyderabad` -> Luxury Dark Mode (Polished obsidian black `#0B0C10`, titanium gold accents `#C5A059`, soft warm spotlights, high-end photography grids, luxury branding)
15. `decorpot-hyderabad` -> Modern Minimalist (Off-black text `#111111`, pure white `#FFFFFF` canvas, ultra-thin light gray borders, generous margins, delicate typography, clean line icons)
16. `chary-interiors` -> Craft / Heritage Warm (Warm walnut wood tones `#8B5A2B`, rich crimson/burgundy accents `#800020`, beige backgrounds `#F5F5DC`, focusing on bespoke woodcraft and traditional-modern fusion)
17. `ss-interiors-secunderabad` -> Scandinavian Dark (Deep charcoal `#1C1C1C`, cool grey `#A9A9A9`, ice blue accents `#87CEEB`, light ash wood highlights `#E6E6FA`, clean functional layouts)
18. `icon-interior-design-attapur` -> Pastel Minimalism (Soft lavender `#E6E6FA`, peach `#FFDAB9`, light sand backgrounds `#FAF0E6`, rounded buttons, friendly serif headings, clean and calming UI)
19. `elements-design-lab` -> Cyber-Industrial (Charcoal grey `#333333`, hazard yellow accents `#FFCC00`, technical grids, monospace code-like styling, raw material tables)
20. `style-home-interiors-attapur` -> Coastal Chic (Ocean breeze blue `#008080`, warm sand beige `#F4A460`, crisp white `#FFFFFF`, airy and light sections, soft driftwood textures)
