# Design Plan: Premium Jewellery Store Previews

We are designing two highly distinct, premium jewellery preview pages for historic Hyderabad-based jewellers, using the **Emerald & Ivory** design system with a **Classic Elegance / High-Contrast Serif** tone.

---

## 1. Manepally Jewellers (Secunderabad Legacy)
*Theme: Traditional Nizami Opulence & Bridal Heritage*

### Token System
- **Colors**:
  - Background: Rich Ivory (`#FDFBF7`)
  - Primary Text / Surfaces: Deep Royal Emerald (`#063B30`)
  - Secondary Text: Slate Emerald (`#2E4E47`)
  - Borders: Warm Bronze (`#C5A880`)
  - Accent / Gold: Antique Gold (`#D4AF37`)
- **Typography**:
  - Display Font: `Cinzel` (classical, formal Roman serif)
  - Body Font: `Plus Jakarta Sans` (clean, contemporary sans-serif)
- **Layout Structure**:
  - Symmetrical, formal balance. Intricate double-line borders, traditional arch/dome framing, and gold ornamental dividers. Centered text alignments for titles.
- **Signature Element**:
  - **The Heritage Arch Gallery**: Frame showcasing temple jewellery inside hand-drawn architectural Mughal arch vector mockups (styled via CSS clip-paths/borders), creating a sense of visiting a physical royal vault in Secunderabad.

---

## 2. Sri Krishna Jewellers (Banjara Hills Modern Elite)
*Theme: Couture Diamonds & Contemporary Gemstone Luxury*

### Token System
- **Colors**:
  - Background: Rich Ivory (`#FCFAF2`) and Deep Velvet Emerald (`#03221C`) for high-contrast section alternation.
  - Primary Text: Charcoal Green (`#142421`) on light sections, Warm Ivory (`#FCFAF2`) on dark sections.
  - Borders: Sleek Brass / Gold (`#CCA43B`)
  - Accent: Brilliant Diamond Blue (`#E0F2FE` / `#38BDF8`) for highlights.
- **Typography**:
  - Display Font: `Prata` (didone-style serif, high-contrast, editorial fashion feel)
  - Body Font: `Inter` (neutral, high-legibility sans-serif)
- **Layout Structure**:
  - Asymmetric grid, editorial magazine layout, large full-bleed imagery mockups, elegant thin border lines, spacious whitespace, and bold typographic treatments. Left-aligned headings with sophisticated subtitles.
- **Signature Element**:
  - **Dynamic Diamond Solitaire Facets**: A bespoke interactive visual in the customizer that dynamically renders a 3D-like rotating solitaire ring blueprint/wireframe (styled via Tailwind & SVG paths) responding to the metal and gemstone parameters in real-time.

---

## Interactive Customizer Architecture
Both widgets will offer choice of:
- **Metal Type**: 22K Gold (rate: ₹7,200/g), 18K Rose Gold (rate: ₹6,100/g), Platinum (rate: ₹3,800/g)
- **Gemstone**: Diamond (rate: ₹85,000/ct), Emerald (rate: ₹45,000/ct), Ruby (rate: ₹35,000/ct), Pearl (rate: ₹12,000/ct)
- **Estimates**: Calculating subtotal based on weight (g), carat/size, making charges (12% for Manepally, 15% for Sri Krishna), and GST (3%).
- **Interactive Visual**: Standard SVG rendering that changes color dynamically based on metal and gemstone.

## Consultation Form
- Interactive inputs: Name, Phone (validating 10-12 digits), Email (standard regex), Date, and Notes.
- Form validation: client-side checks with inline error messaging.
- Loading/Submitting state: Button shifts to spinner, disabling inputs, then shows a beautiful success card with booking ID.
- Active tap feedback on all buttons: `active:scale-95 transition-all`.
