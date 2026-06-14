# Design Plan for Premium Car Detailing Sites in Attapur, Hyderabad

## 1. gorgeous-car-detailers-attapur

### Concept: Midnight Tech / High Contrast Luxury Detailing
A dark, mysterious, high-end design theme focusing on high-contrast luxury, glowing accents, and premium craftsmanship.

### Token System
- **Color Palette**:
  - **Jet Black**: `#030303` (Base background)
  - **Charcoal Card**: `rgba(18, 18, 18, 0.8)` (Glass card background)
  - **Gold Trim**: `#d4af37` (Accent borders, buttons, highlights)
  - **Glowing Yellow**: `#f59e0b` / `#fbbf24` (Glow effects, icons, micro-elements)
  - **Pure White**: `#ffffff` (Primary text)
  - **Muted Grey**: `#94a3b8` (Supporting text)
- **Typography**:
  - **Display/Headings**: Bold, letter-spaced, uppercase headers using a luxury display aesthetic (e.g. tracking-wider, font-black).
  - **Body**: Clean, high-legibility sans-serif (`Inter` or `Plus Jakarta Sans`).
- **Layout**:
  - Multi-layered parallax-like glow containers.
  - Wide grid grids with luxury gold borders (`border-amber-500/20`).
  - Sleek, thin dividing rules (`h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent`).
- **Signature Element**:
  - **Interactive Before/After Mirror-Finish Slider Widget**: An interactive React component showing a comparison slider where the user can click/drag to sweep between "Neglected Swirl Marks" and "Gorgeous Mirror Ceramic Glow" on a high-end luxury vehicle.

---

## 2. 5k-car-care-attapur

### Concept: Bento Grid / Tech Dashboard Detailer
An ultra-structured dashboard layout representing precision, telemetry, analytics, and service metrics. High energy, bright safety orange accents, and modular bento boxes.

### Token System
- **Color Palette**:
  - **Anthracite Dark**: `#0c0a09` (Stone-950 base background)
  - **Stone Tile**: `#1c1917` (Stone-900 / Stone-800 tile backgrounds)
  - **Safety Orange**: `#ea580c` / `#f97316` (Primary accents, hover states, statistics highlights)
  - **Warm White**: `#fafaf9` (Primary typography)
  - **Soft Amber / Orange Glow**: `rgba(249, 115, 22, 0.15)` (Accent glows)
- **Typography**:
  - **Display/Headings**: Numeric-focused, mechanical sans-serif or monospace style (wide track, condensed headings, precise).
  - **Body**: Clean sans-serif.
- **Layout**:
  - Strict bento grid mapping for Hero, Services, Packages, FAQ, and Stats.
  - Responsive column spans (`col-span-1`, `md:col-span-2`, `lg:col-span-3`).
- **Signature Element**:
  - **"Detailing Command Center Dashboard"**: A large bento cell containing a live simulated tracker of "Detailed Cars Counter" (+ live ticker), a mock real-time occupancy map of their Attapur workshop bay, and inline quick quote generator.

---

## ASCII Layout Wireframes

### Gorgeous Car Detailers (Luxury Scroll)
```
+-------------------------------------------------+
|   [GORGEOUS LOGO]        Services  PPF  Contact |
+-------------------------------------------------+
|                                                 |
|       HERO: THE GOLDEN GLOW OF CAR CARE         |
|             [Book VIP Detailing]                |
|                                                 |
+-------------------------------------------------+
|     SERVICES grid (Ceramic, PPF, Interiors)    |
|   +---------------+  +---------------+          |
|   | Gold border   |  | Gold border   |          |
|   +---------------+  +---------------+          |
+-------------------------------------------------+
|       SIGNATURE: Before/After Slider Widget     |
|       [Dusty/Scratched] <== Slider ==> [Shiny]  |
+-------------------------------------------------+
```

### 5K Car Care (Bento Grid)
```
+-------------------------------------------------+
|  [5K Logo]  [Stats Block]  [Bays Available: 2]  |
+-------------------------------------------------+
|  +--------------------+  +-------------------+  |
|  | HERO BENTO         |  | QUICK BOOKING     |  |
|  | "Attapur's #1"     |  | Orange button     |  |
|  +--------------------+  +-------------------+  |
|  +-----------+  +-----------+  +-------------+  |
|  | Ceramic   |  | PPF Box   |  | 5-Star      |  |
|  | Tile      |  | Tile      |  | Review Tile |  |
|  +-----------+  +-----------+  +-------------+  |
+-------------------------------------------------+
```
