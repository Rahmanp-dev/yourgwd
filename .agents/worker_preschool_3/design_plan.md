# Design Plan: Premium Preschool Showcases

This document outlines the design decisions for the two assigned slugs:
1. `kangaroo-kids-tolichowki` (Style: Nature Green)
2. `orchids-international-school-tolichowki` (Style: Luxury Pearl)

---

## 1. Kangaroo Kids (Nature Green)

### Design Tokens
- **Theme**: Nature Green
- **Palette**:
  - Primary Earthy Sage: `#6BAA75` (Sage Green)
  - Background Cream: `#FEFAE0` (Warm Cream)
  - Accent Forest: `#2C4A3E` (Deep Forest Green)
  - Warm Sand: `#F4F1DE` (Muted Beige for cards)
  - Soft Coral Highlight: `#E07A5F` (Tints of Rust for buttons & CTAs)
  - Base Text: `#1E293B` (Slate-800 for high readability)
- **Typography**:
  - Headings: **Merriweather** (serif, classic and friendly)
  - Body: **Open Sans** (sans-serif, clean and legible)
- **Signature Element**: 
  - **"The Curiosity Leaf Canopy"**: An interactive circular leaf selector for the philosophy/curriculum highlights where clicking on different leaves dynamically reveals different educational milestones (Exploration, Expression, Play, Cognition) with smooth animations.

### ASCII Wireframe
```
+-------------------------------------------------------------+
| [Logo KK]                   Our Phil  Programs  Admissions  [Btn: Contact] |
+-------------------------------------------------------------+
|                                                             |
|   Nature-Inspired Nurturing... (Merriweather H1)           |
|   Welcome to Kangaroo Kids Tolichowki. (Open Sans)         |
|   [Enroll Now Button - Soft Coral]                         |
|   (Background: Sage & Cream Gradient)                      |
|                                                             |
+-------------------------------------------------------------+
| Stats: 15+ Years | 500+ Active | 100% Satisfied | 12:1 Ratio |
+-------------------------------------------------------------+
| Curiosity Leaf Canopy:                                      |
|   (o) Play    (o) Explore    (o) Grow    (o) Create         |
|   +-------------------------------------------------------+ |
|   | Description card showing philosophy details           | |
|   +-------------------------------------------------------+ |
+-------------------------------------------------------------+
| Programs: Playgroup | Nursery | LKG | UKG | Daycare          |
+-------------------------------------------------------------+
| Interactive Fee Estimator & Form                            |
+-------------------------------------------------------------+
```

---

## 2. Orchids International School (Luxury Pearl)

### Design Tokens
- **Theme**: Luxury Pearl
- **Palette**:
  - Primary Champagne: `#F5E6C8` (Muted Warm Gold/Champagne)
  - Accent Deep Navy: `#1B4080` (Deep Royal Navy)
  - Background Rich Cream: `#FDFBF7` (Soft Pearl/Parchment)
  - Secondary Accent Gold: `#D4AF37` (Metallic Gold)
  - Base Text: `#1E293B` (Slate-800)
- **Typography**:
  - Headings: **Playfair Display** (refined serif, elegant and intellectual)
  - Body: **Inter** (modern sans-serif, high-end professional feel)
- **Signature Element**:
  - **"The Pearl Timeline Navigator"**: An elegant, interactive horizontal timeline with gold pearls as nodes. Hovering or clicking on a pearl changes the focus of the school's historical achievements and elite philosophy points in Tolichowki.

### ASCII Wireframe
```
+-------------------------------------------------------------+
| [Logo Orchids]              Philosophy  Academic  Admissions  [Btn: Inquiry] |
+-------------------------------------------------------------+
|                                                             |
|   A Legacy of Academic Distinction...                       |
|   Premium Luxury Preschool in Tolichowki.                   |
|   [Schedule Private Tour - Navy/Gold]                      |
|   (Background: Pearl & Champagne Gradient)                  |
|                                                             |
+-------------------------------------------------------------+
| Stats: Top Ranked | 25+ Campuses | 98% Ivy Readiness | 8:1 Ratio |
+-------------------------------------------------------------+
| Pearl Timeline Navigator:                                   |
|   --(*)--    --(*)--    --(*)--    --(*)--                  |
|   Node 1     Node 2     Node 3     Node 4                   |
|   +-------------------------------------------------------+ |
|   | Achievement or premium milestone detail               | |
|   +-------------------------------------------------------+ |
+-------------------------------------------------------------+
```

---

## 3. Core Requirements Implementation Plan

We will create two separate pages, each adhering strictly to:
- No dark mode.
- Tailwind CSS styling only.
- Lucide React icons.
- Complete client-side interactions (`"use client"`), single CamelCase functions.
- Detailed validation inside forms, automatic child age calculation (with years and months description).
- Dynamic fee estimator that sums up tuition, admin fees, optional transportation, daycare, and lunch, with a neat tabular receipt.
