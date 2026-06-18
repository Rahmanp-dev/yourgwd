# Design Plan — Srishti Cloud Kitchen & Spice Route Cloud Kitchen

## Page 1: Srishti Cloud Kitchen (`srishti-cloud-kitchen-uppal`)
Traditional Hyderabad & Andhra culinary heritage modernized. Warm, organic, traditional-yet-modern feel.

### 1. Token System
- **Colors**:
  - Background: Off-white (`#F8FAFC`)
  - Accent background (Slate): `#334155` (Slate-700)
  - Card background: `#FFFFFF` (White) with warm cream shadows
  - Primary Brand Accent: Burnt Orange (`#EA580C` / Tailwind `orange-600`)
  - Light Slate elements: `#F1F5F9` (Slate-100)
- **Typography**:
  - Display Font: `Playfair_Display` (elegant, heritage, artisanal)
  - Body Font: `Plus_Jakarta_Sans` (crisp, modern, readable)
- **Layout**:
  - Structured Bento Grid with varying aspect ratios. Rounded corners (`rounded-2xl` and `rounded-3xl`) for cards.
  - Interactive customizer embedded as a prominent, curved bento cell.
- **Signature Unique Element**:
  - *Interactive Heritage Spice Drawer*: A visual, selectable grid element representing local spices (Guntur Chilli, Chettinad Pepper, Hyd Cardamom) where selecting a spice highlights its signature dishes and tells its sourcing story in Uppal.

---

## Page 2: Spice Route Cloud Kitchen (`spice-route-cloud-kitchen-uppal`)
Progressive fusion & Pan-Asian culinary exploration. Sharp, modern, corporate-friendly, high tech.

### 1. Token System
- **Colors**:
  - Background: Off-white (`#F8FAFC`)
  - Accent background (Slate): `#1E293B` (Slate-800) / `#334155` (Slate-700)
  - Card background: `#FFFFFF` (White) with sharp slate-gray borders
  - Primary Brand Accent: Burnt Orange (`#EA580C`)
  - Accent Highlights: Teal/Orange fusion accents
- **Typography**:
  - Display Font: `Plus_Jakarta_Sans` (heavy bold weights, ultra-modern)
  - Body Font: `Inter` (neutral, crisp, information-dense)
- **Layout**:
  - Strict rectangular, modular Bento Grid with very clean gutters. Shorter card border radius (`rounded-lg` or `rounded-xl`) and dual-line borders.
- **Signature Unique Element**:
  - *The "Spice Trail" Interactive Map Grid*: A bento cell containing a step-by-step route tracker that demonstrates how their ingredients travel from origin (Malabar Coast, Guntur, Coorg) to the cloud kitchen in Uppal, Hyderabad.

---

## Review & Verification Against Brief
- Palette fits Slate, Burnt Orange, Off-white perfectly.
- Strictly light mode (no dark backgrounds for body).
- Responsive grid design utilizing Next.js layout features.
- Lucide React used for all icons (no emojis).
- Form contains robust client-side active validations (checks format, empty fields, phone length).
- Testimonials feature local references (Uppal, Gachibowli, Secunderabad).
