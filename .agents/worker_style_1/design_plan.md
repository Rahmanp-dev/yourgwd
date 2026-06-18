# Design Plan: Premium Jewellery Store Previews

This plan outlines the visual identity, token systems, and layouts for the two independent jewellery store preview pages under `app/client/[slug]`. Both pages share the "Modern Luxury / Glassmorphism" design system, but are styled with highly distinct themes.

---

## 1. Tibarumal & Sons (tibarumal-sons-shaikpet)

### Subject & Audience
- **Subject**: Royal Nizami heritage with a focus on antique gold and fine emeralds.
- **Audience**: Elite bridal shoppers and heritage collectors seeking traditional luxury.
- **Tone**: Botanical luxury, warm antique gold, royal emerald.

### Visual Tokens
- **Background**: Deep obsidian green (`#030906`)
- **Accent Primary (Gold)**: Warm rose gold (`#d9ab73`)
- **Accent Secondary (Emerald)**: Jade green (`#2d7a57`)
- **Glass Panel**: Translucent jade-black (`rgba(6, 15, 10, 0.7)`) with backdrop blur (`backdrop-blur-xl`)
- **Glow Color**: Emerald/gold gradient (`linear-gradient(135deg, rgba(45, 122, 87, 0.25), rgba(217, 171, 115, 0.15))`)
- **Typography**:
  - Display: `Prata` (elegant serif)
  - Body: `Inter` (crisp, structural)

### Layout & Wireframe
- **Hero**: Center-aligned typography with a large glowing brand emblem backdrop.
- **Heritage**: Two-column layout; left text description, right interactive historic timeline.
- **Signature Grid**: Asymmetrical masonry grid of 4 high-end collection showcases.
- **Signature Element**: **The Emerald Aura Customizer** - a customizer widget surrounded by a glowing radial backdrop that reacts dynamically to the gemstone selected (e.g., green aura for Emerald, red for Ruby, white for Pearl/Diamond).

```
+-------------------------------------------------------+
|                       NAVBAR                          |
+-------------------------------------------------------+
|                                                       |
|                     [EMBLEM GLOW]                     |
|                  TIBARUMAL & SONS                     |
|                Heritage Since 1920                    |
|                                                       |
+-------------------------------------------------------+
|  HERITAGE TIMELINE       |  HERITAGE STORY            |
|  1920: Nizam's Jewelers  |  "Crafting royal legacies  |
|  1950: Shaikpet Store    |   passed down through      |
|  1990: Modern Masterpieces|  generations..."          |
+-------------------------------------------------------+
|  INTERACTIVE CUSTOMIZER (Emerald Aura Glow)           |
|  Metal: [22K Gold] [Platinum] [18K Rose Gold]         |
|  Gem:   [Diamond]  [Emerald]  [Ruby] [Pearl]          |
|  Visual: (Dynamic Glow Backdrop & Product Mockup)     |
|  Price Estimate: INR X,XX,XXX                         |
+-------------------------------------------------------+
|  SIGNATURE COLLECTIONS (Masonry Grid)                 |
|  +--------------------+  +--------------------+       |
|  | Temple Necklaces   |  | The Royal Emeralds |       |
|  +--------------------+  +--------------------+       |
|  | Shaikpet Solitaires|  | Antique Chokers    |       |
|  +--------------------+  +--------------------+       |
+-------------------------------------------------------+
|  CONSULTATION FORM                                    |
|  [Name] [Phone] [Date] [Submit Consultation]          |
+-------------------------------------------------------+
|  TESTIMONIALS (Floating Glass Cards)                  |
+-------------------------------------------------------+
```

---

## 2. Tibarumal Ramnivas Jewellers (tibarumal-ramnivas-jubilee-hills)

### Subject & Audience
- **Subject**: Contemporary high luxury, diamonds, platinum, and bespoke haute joaillerie.
- **Audience**: High-net-worth individuals, modern brides, and design-oriented elites of Jubilee Hills.
- **Tone**: Cool high-tech luxury, ice platinum, diamond white, champagne gold.

### Visual Tokens
- **Background**: Deep midnight violet-black (`#07070b`)
- **Accent Primary (Champagne)**: Light champagne gold (`#eacb96`)
- **Accent Secondary (Platinum)**: Ice blue / diamond white (`#a5b4fc`)
- **Glass Panel**: Translucent sapphire-black (`rgba(10, 10, 18, 0.75)`) with backdrop blur (`backdrop-blur-2xl`)
- **Glow Color**: Champagne/indigo gradient (`linear-gradient(135deg, rgba(234, 203, 150, 0.15), rgba(165, 180, 252, 0.15))`)
- **Typography**:
  - Display: `Cinzel` (geometric Roman serif)
  - Body: `Plus Jakarta Sans` (modern, geometric)

### Layout & Wireframe
- **Hero**: Left-aligned typography with a geometric wireframe diamond drawing background.
- **Heritage**: Large typographic sections with clean horizontal dividers and structural highlights.
- **Signature Grid**: Structured Bento Grid (combining large image cards with small stats and stories).
- **Signature Element**: **The Scintillation Customizer** - interactive widget with card borders that run a continuous glowing gradient sweep matching the selected metal & gemstone, styled to represent light reflecting through a diamond.

```
+-------------------------------------------------------+
|                     NAVBAR (Minimalist)               |
+-------------------------------------------------------+
|                                                       |
|  TIBARUMAL RAMNIVAS                                   |
|  Jubilee Hills Masterpieces                           |
|  [Virtual Diamond Vector BG]                          |
|                                                       |
+-------------------------------------------------------+
|  HERITAGE SECTION (Alternating Rows)                  |
|  ===================================================  |
|  Legacy of Innovation: From Royal Court to Jubilee    |
|  ===================================================  |
|  Artisanal Brilliance: Uncompromising platinum craft  |
+-------------------------------------------------------+
|  INTERACTIVE CUSTOMIZER (Scintillation Sweep Border)  |
|  +-------------------------------------------------+  |
|  | Metal Selector    | Gem Selector                |  |
|  | 22K Gold / Plat   | Diamond / Ruby / Pearl      |  |
|  |-------------------------------------------------|  |
|  | Mock Visual       | Live Price Calculator       |  |
|  +-------------------------------------------------+  |
+-------------------------------------------------------+
|  BENTO GRID COLLECTIONS                               |
|  +---------------------------+ +-------------------+  |
|  | Jubilee Chokers           | | Diamond Brillian  |  |
|  +---------------------------+ +-------------------+  |
|  | Pearls Strings            | | Bespoke Rings     |  |
|  +---------------------------+ +-------------------+  |
+-------------------------------------------------------+
|  CONSULTATION FORM (Centered Glass Frame)             |
|  +-------------------------------------------------+  |
|  |               Schedule Consultation             |  |
|  +-------------------------------------------------+  |
+-------------------------------------------------------+
|  TESTIMONIALS (Carousel Slider)                       |
+-------------------------------------------------------+
```

---

## 3. Dynamic Routing & Shared Engine
To prevent code duplication and provide optimal loading speed, we will implement `app/client/[slug]/page.jsx` as a dynamic page. 
- It reads the `slug` parameter.
- It dynamically resolves the theme token class names, content strings, and layout structures for either `tibarumal-sons-shaikpet` or `tibarumal-ramnivas-jubilee-hills`.
- In case of an invalid slug, it displays a premium error/empty state redirecting to the active jewellery pages.
