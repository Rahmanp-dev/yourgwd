# Implementation Plan - Biophilic Sage Jewellery Store Pages

This plan covers the implementation of Akoya Pearls and Suraj Bhan Jewellers Next.js pages.

## Design tokens & variables
- **Akoya Pearls**:
  - Main background: `#FAF8F4` (soft pearl white)
  - Card/Overlay background: `#FFFFFF`
  - Accent/Primary Sage: `#354A3B` (deep forest/sage green)
  - Light Sage: `#8EA393`
  - Gold Accent: `#D4B26F` (champagne gold)
  - Typography: `Prata` (Display) and `Plus_Jakarta_Sans` (Body)
- **Suraj Bhan Jewellers**:
  - Main background: `#FAF9F6` (antique cream)
  - Dark Accent Sage: `#27352B` (deep moss sage)
  - Soft Sage: `#728475`
  - Deep Heritage Gold: `#C59B4B` (antique gold)
  - Typography: `Cinzel` (Display) and `Inter` (Body)

## Components per page

### 1. Hero Header
- Sticky navbar with logo, custom branding, telephone link, and an "Inquire" button.
- Active tap states: `active:scale-95 transition-all` on buttons.
- Headline with premium font pair. Subheading outlining Hyderabad heritage.
- Background with subtle botanical overlays and elegant imagery (using high-quality Unsplash image URLs).

### 2. Brand Heritage
- Historical storytelling:
  - Akoya Pearls: Family legacy under Ghanshyamdas, Banjara Hills since inception, refining natural & cultured pearls.
  - Suraj Bhan Jewellers: Charminar-adjacent heritage since 1952, gold crafting for generations, temple jewellery masters.
- Layout: Organic asymmetric grid, decorative SVG floral designs.

### 3. Interactive Jewelry Customizer
- Clients choose:
  - Metal: 22K Gold, 18K Rose Gold, Platinum.
  - Gemstone: Diamond, Emerald, Ruby, Pearl.
- Interactive states:
  - Buttons/Toggles have active states.
  - Shows custom price calculations (e.g. base metal rate + gemstone rate + making charges).
  - Renders a dynamic visual mock: a beautiful, responsive SVG illustration of the chosen jewelry type (necklace/ring/earrings) where the metal color and gemstone color change dynamically based on selection.
  - Includes a "Reserve Design" call-to-action.

### 4. Signature Collection Grid
- Distinct collections:
  - Akoya Pearls: "Botanical Drops", "The Nizam's Lagoon", "Flora Chokers".
  - Suraj Bhan Jewellers: "Temple Garland", "Lotus Filigree", "Royal Charminar Polki".
- Image hover scale, organic border radii (e.g., leaf-shapes), price indicators.

### 5. Virtual Design Consultation Form
- Form fields: Full Name, Phone, Email, Preferred Date, Preferred Time, Jewelry Type, Message.
- Interactive form:
  - Form validation for required fields, email format, and phone number (must match Indian format or digits).
  - Simulated loading state when submitting (with a spinner and disabled inputs).
  - Success alert (toast or block) with booking confirmation details.

### 6. Customer Stories / Testimonials
- Real-looking reviews from high-net-worth clients in Hyderabad (Jubilee Hills, Banjara Hills, Charminar, Gachibowli).
- Beautiful cards with rating stars, organic bio-shaped quote icons.

### 7. Store Details Footer
- Store hours, direct phone call link, email link, maps placeholder, address.
- Custom styled footer with sage green backgrounds.

## Verification
- Test compile by running `npm run build`.
- Address any hydration or Next.js build errors.
