# Task Plan - Jewellery Store Preview Pages

## Steps

1. **Create Layout with Metadata (`app/client/[slug]/layout.jsx`)**
   - Implement OpenGraph properties, dynamic titles, and description matching each jewellery store.
   - Verify file is created and syntactically valid.

2. **Create Page Component (`app/client/[slug]/page.jsx`)**
   - Support both slugs: `totaram-sons-jewellers-abids` and `totaram-murarilal-sons`.
   - Setup fallback if slug is not recognized.
   - Inject slug-specific Google Fonts and Neumorphic Modern CSS variables/classes.
   - Design highly distinct layouts:
     - **Totaram & Sons Jewellers**: Estd. 1901 Nizam heritage, Prata + Jakarta Sans typography, cool slate gray background, emerald & gold accents, asymmetrical hero layout, timeline heritage, circular customizer selectors, Nizam Archive signature showcase, and staggered reviews.
     - **Totaram Murarilal & Sons**: Fine luxury boutique, Cinzel + Inter typography, warm sandstone background, ruby burgundy & rose gold accents, symmetric hero, multi-column stories heritage, step-by-step customizer with sliders, Artisan creation process signature, and quote bubble reviews.
   - Build **Interactive Customizer** widget with dynamic SVG rendering for Ring, Pendant, and Necklace, calculating real breakdown prices (metal weight, metal price, gemstone, crafting charge, GST, and total).
   - Build **Virtual Design Consultation** form with inline validation (name, email, 10-digit Indian phone) and 2-second simulated loading state with success state.
   - Build **Store Details Footer** with exact address, phone, email, and store hours.

3. **Local Testing & Compilation**
   - Run Next.js build using `npm run build` command to ensure zero errors.
   - Fix any syntax or Next.js build warnings.

4. **Verify Layout & UI pro-max compliance**
   - Check touch targets size, ensure zero emojis, and active tap neumorphic feedback (outset to inset transition on press).
   - Ensure color contrast and readable typography pairing.

5. **Write Handoff Report**
   - Save findings, logic chain, and verification details in `handoff.md`.
