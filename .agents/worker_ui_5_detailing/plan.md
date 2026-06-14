# Implementation Plan - Car Detailing UI Pages

## Step 1: Design Systems Definition & Brainstorming
- **Page 1: `clean-fast-car-wash-attapur`**
  - **Concept**: Electric/Neon Tech Green & Aqua. Deep teal background, fresh mint greens, and electric cyan accents. Speed, eco-friendly waterless details, rapid gloss services.
  - **Colors**:
    - Background: Deep Teal/Slate (`#07191e`, `#0a2228`)
    - Primary Accent: Electric Cyan (`#00f5ff`)
    - Secondary Accent: Mint Green (`#10b981` / `#00ffcc`)
    - Neutral text: Light Cyan-Gray (`#e2f1f5`)
  - **Signature Element**: Real-time Interactive "Water Saver & Time Saver Calculator" showing how waterless tech saves X liters of water and Y minutes compared to traditional wash.
- **Page 2: `detailing-mafia-banjara-hills`**
  - **Concept**: High-Contrast Geometric. Bold red and dark gray, triangles, angled polygon backgrounds, sharp diagonal section breaks, aggressive high-performance vibe.
  - **Colors**:
    - Background: Dark Charcoal/Matte Black (`#0a0a0a`, `#141414`)
    - Accent Red: Crimson/Apex Red (`#e11d48`)
    - Accent Gray: Medium Gray/Carbon Fiber (`#2d2d2d`, `#4b5563`)
    - Neutral text: Pure White/Silver (`#ffffff`, `#e5e7eb`)
  - **Signature Element**: Interactive "Interactive Layer Visualizer" for Ceramic Coating & PPF thickness (representing car paint, base coat, clear coat, and the ceramic/PPF protection layer).

## Step 2: Implement Sibling layout.jsx and page.jsx
- **Path 1: `app/client/clean-fast-car-wash-attapur/`**
  - `layout.jsx`: Set custom metadata for WhatsApp unfurling (title: "Clean & Fast Car Wash Attapur - Rapid Premium Detailing", description: "Eco-friendly waterless car wash and express detailing services in Attapur, Hyderabad.", siteName: "Clean & Fast Car Wash").
  - `page.jsx`: Implement the complete long-format site.
- **Path 2: `app/client/detailing-mafia-banjara-hills/`**
  - `layout.jsx`: Set custom metadata for WhatsApp unfurling (title: "The Detailing Mafia Banjara Hills - High-Performance Detailing Studio", description: "Premium ceramic coating, paint protection film (PPF), and paint correction specialists in Banjara Hills, Hyderabad.", siteName: "The Detailing Mafia").
  - `page.jsx`: Implement the complete long-format site.

## Step 3: Implement Long-Format Sections
Each page must contain:
1. **Hero**: Title, premium visuals (inline SVG shapes or image overlays), CTA buttons, key benefit badges.
2. **Services**: Interactive services grid (eco wash, gloss polish, interior deep clean, ceramic wrap, paint correction).
3. **Pricing Packages**: Packages cards with transparent pricing (e.g. Ceramic Coating, PPF, Premium Wash) showing features and "Book Appointment" CTA.
4. **Before/After Gallery**: Interactive slider or side-by-side comparison showing dramatic transformations.
5. **Testimonials**: Premium customer reviews, rating stars, reviewer details.
6. **FAQ**: Interactive accordion (FAQ toggle) answering common customer questions.
7. **Contact**: Elegant contact form, map location (embedded look or structured details for Hyderabad/Attapur/Banjara Hills), contact numbers.

## Step 4: Verification & Compilation
- Run Next.js build (`npm run build` or `npx next build`) to verify that both pages compile cleanly without errors.
- Confirm metadata and OpenGraph configuration in the browser/output.
- Fix linting errors or compilation warnings.
