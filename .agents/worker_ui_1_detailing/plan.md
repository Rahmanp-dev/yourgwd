# Implementation Plan — Premium Car Detailing Pages in Attapur

We are implementing two premium car detailing pages in `app/client/[slug]/` directories. Both pages are long-format Next.js pages containing Hero, Services, Pricing Packages, Testimonials, Before/After Gallery, FAQ, and Contact.

## 1. detailing-mafia-attapur (Glassmorphism)
- **Concept**: Premium "Boss" look, deep carbon/obsidian dark background, neon red/purple accents, glowing buttons, frosted glass panels.
- **Color Palette**:
  - Base Dark Background: `#0A0A0C` (Obsidian)
  - Card Background: `#16161A` with `backdrop-blur-xl` and `border border-white/10`
  - Neon Accent 1: Purple (`#a855f7`)
  - Neon Accent 2: Neon Red (`#ff0055` / `rgb(239, 68, 68)`)
- **Signature Element**: An interactive "PPF Paint Shield Visualizer" where users select between Gloss, Matte, and Stealth finishes, showing how light reflectances change on a car chassis diagram.
- **Hyderabad Landmark Context**: Near Pillar 140, PVNR Expressway, Attapur.
- **Copy Theme**: High-authority, boss-level, protective. "The Mafia Treatment: Bulletproof Shine."

## 2. aqua-shine-detailing-attapur (Neumorphism)
- **Concept**: Soft, tactile metallic grey-blue surfaces, liquid/water droplet curves, smooth rounded corners, hydrodynamic feel.
- **Color Palette**:
  - Base Soft Metallic Gray-Blue: `#E2E8F0` / `#D1D5DB` base or Custom Neumorphic Gray: `#E6EEF8`
  - Shadow Outset Light: `white` (`shadow-[-8px_-8px_16px_rgba(255,255,255,0.9)]`)
  - Shadow Outset Dark: `#B8C9DC` (`shadow-[8px_8px_16px_rgba(184,201,220,0.8)]`)
  - Highlight Accent: Deep Hydrodynamic Cyan/Teal (`#0EA5E9`)
- **Signature Element**: An interactive "Hydrophobic Water Droplet Slider" - adjust the slider to see how the water contact angle changes (from 70° to 120° for nanoceramic coating) and how water droplets slide off the hood.
- **Copy Theme**: Scientific, clean, hydro-science. "Hydrodynamic Perfection. Science of Ultimate Reflection."

## 3. Metadata and Layout Structure
Both clients will have:
- `layout.jsx` providing title, description, and WhatsApp unfurling (openGraph `title`, `description`, `siteName`).
- `page.jsx` as the entrypoint containing all sections.
- Responsive tailwind grid layouts down to mobile 375px.
- Lucide React icons.

## Verification Checklist
- [ ] Compile and build with Next.js build (`npm run build` or `npx next build`) to verify no warnings or errors.
- [ ] Verify standard viewport accessibility, line length, and buttons.
- [ ] Confirm no hardcoded dummy outputs in verification.
