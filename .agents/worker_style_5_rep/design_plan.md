# Design Plan — Premium Next.js UI Preview Pages

This document details the design system, typography, color palettes, layouts, and signatures for the two premium interior design studio preview pages in Banjara Hills, Hyderabad.

---

## 1. Aamir & Hameeda Design Studio

### Subject & Grounding
- **Client**: Aamir & Hameeda Design Studio
- **Aesthetic**: Avant-Garde Glassmorphism. A high-fashion, bold, but light and airy look using frosted glass cards, subtle pinkish-lavender gradients, and bright violet accents.
- **Audience**: HNWIs in Banjara Hills & Jubilee Hills looking for elite, luxury minimalist residences and high-concept retail/hospitality spaces.
- **Signature Element**: **"Frosted Glass Material Board & Interactive Style Quiz Card"** — A floating card interface with high-blur background filters (`backdrop-blur-md`) that mimics real interior design physical sample boards (swatches of marble, violet fabric, metal trims) overlaid on a fluid pastel-lavender ambient background.

### Design Tokens
- **Color Palette**:
  - `Base Gradient Start`: `#FFF0F5` (Lavender Blush)
  - `Base Gradient End`: `#E6E6FA` (Lavender)
  - `Frosted Card BG`: `rgba(255, 255, 255, 0.4)`
  - `Accent Violet`: `#8E44AD` (Bright Violet)
  - `Text Primary`: `#2C1A38` (Deep Plum/Charcoal)
  - `Accent Violet Light`: `#A569BD` (Soft Violet)
- **Typography**:
  - **Heading/Display**: `Outfit` (Bold, letter-spacing tracking-tight)
  - **Body & Captions**: `Outfit` (Regular/Medium, tracking-wide)
- **Layout Concept**:
  - A sophisticated asymmetric layout where text and image cards stagger, utilizing frosted cards with thin bright-violet borders (`border border-violet-200/50`) and soft plum text for elite readability.
- **ASCII Layout Wireframe**:
  ```text
  +-------------------------------------------------------------+
  |  [Logo: A&H]               [Nav Links]        [Book Button] |
  +-------------------------------------------------------------+
  |                                                             |
  |  HERO: Frosted Glass Panel with Bold Violet Accent Text     |
  |  "Luxury Minimalism Redefined."                             |
  |                                                             |
  |  +--------------------+   [Light Unsplash Luxury Interior]  |
  |  |  Frosted CTA Card  |   |                                |
  |  +--------------------+   +--------------------------------+  |
  |                                                             |
  +-------------------------------------------------------------+
  |  STATS BAR: Staggered Frosted Pillars                       |
  +-------------------------------------------------------------+
  |  BIO: Staggered columns, principal photo & philosophy       |
  +-------------------------------------------------------------+
  |  STYLE SELECTOR & MATERIAL BOARD (Interactive Tabs)         |
  +-------------------------------------------------------------+
  |  INTERACTIVE DESIGN STYLE QUIZ                              |
  +-------------------------------------------------------------+
  |  STEP-BY-STEP DESIGN PROCESS                                |
  +-------------------------------------------------------------+
  |  TESTIMONIALS & CONTACT FORM                                |
  +-------------------------------------------------------------+
  ```

---

## 2. Sahani Interiors

### Subject & Grounding
- **Client**: Sahani Interiors
- **Aesthetic**: Coastal Wellness Light. Clean, breezy, therapeutic, high-whitespace look with soft sky blue backgrounds, crisp white cards, ocean blue highlights, and clean sans-serif typography.
- **Audience**: Families in Hyderabad seeking highly functional space maximization, budget-conscious yet premium-feeling residential woodwork and renovations.
- **Signature Element**: **"Breezy Space-Maximization Interactive Slider/Process Deck"** — A clean horizontal layout with oceanic highlights and crisp white cards representing modular layouts (smart wardrobes, hidden spaces) that transform on tap.

### Design Tokens
- **Color Palette**:
  - `Background`: `#F7FBFD` (Ice Blue / Breezy white)
  - `Card Background`: `#FFFFFF` (Crisp White)
  - `Soft Sky Blue`: `#EBF5FB` (Soft Sky Blue)
  - `Accent Ocean Blue`: `#2980B9` (Ocean Blue)
  - `Text Primary`: `#1F3A52` (Deep Navy)
  - `Highlight Sky Blue`: `#AED6F1` (Sky Highlight)
- **Typography**:
  - **Heading/Display**: `Plus Jakarta Sans` (Extra Bold/Semi Bold)
  - **Body & Captions**: `Plus Jakarta Sans` (Regular/Medium)
- **Layout Concept**:
  - High-whitespace grid layout with clean blue borders, rounded card corners, and light ocean blue shadows (`shadow-[0_8px_30px_rgb(235,245,251,0.5)]`). Minimalist, structural, and inviting.
- **ASCII Layout Wireframe**:
  ```text
  +-------------------------------------------------------------+
  |  [Logo: Sahani]            [Nav Links]        [Book Button] |
  +-------------------------------------------------------------+
  |                                                             |
  |  HERO: Breezy Light Sky Blue Background                     |
  |  "Intelligent Spaces. Coastal Comfort."                     |
  |                                                             |
  |  [Crisp White Card CTA]      [Bright Airy Woodwork Photo]   |
  |                                                             |
  +-------------------------------------------------------------+
  |  STATS BAR: White Cards with Ocean Blue Outlines            |
  +-------------------------------------------------------------+
  |  BIO: Clean columns introducing Sahani & Space Philosophy   |
  +-------------------------------------------------------------+
  |  PORTFOLIO SHOWCASE: Grid with Clean Highlights             |
  +-------------------------------------------------------------+
  |  STYLE QUIZ: Sky Blue Rounded Container                     |
  +-------------------------------------------------------------+
  |  DESIGN PROCESS: 5-step horizontal path                     |
  +-------------------------------------------------------------+
  |  TESTIMONIALS & CONSULTATION BOOKING                        |
  +-------------------------------------------------------------+
  ```
