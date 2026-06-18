# Implementation Plan: Neumorphic Modern Jewellery Store Preview Pages

We need to build 2 distinct, premium, long-format Next.js UI preview pages using a Neumorphic Modern design system for:
1. **Totaram & Sons Jewellers** (Abids, Hyderabad)
2. **Totaram Murarilal & Sons** (Abids Road, Hyderabad)

## Neumorphic Modern Design Tokens
- Background: Light off-white/gray (e.g., `#F0F2F5` or `#EAECEF`)
- Outset shadow: `shadow-[6px_6px_12px_rgba(163,177,198,0.5),-6px_-6px_12px_rgba(255,255,255,0.8)]`
- Inset shadow: `shadow-[inset_6px_6px_12px_rgba(163,177,198,0.5),inset_-3px_-3px_8px_rgba(255,255,255,0.8)]`
- Active press shadow: `shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.8)]`
- Border: `border border-white/40`

---

## Step 1: Design Totaram & Sons Jewellers
- **Aesthetic**: Classic Nizam Heritage & Royal Traditional Gold.
- **Font pairing**: `Prata` (serif display) + `Inter` (sans body).
- **Primary Color Accent**: Antique Gold (`#C5A880` / `#9A7B56`).
- **Layout**: Centered, balanced, elegant margins, traditional decorative motifs in SVGs.
- **Interactive Customizer**: Metal & Gem selection with traditional temple-style preview (SVG).
- **Path**: `app/client/totaram-sons-jewellers-abids/page.jsx` and `layout.jsx`.

## Step 2: Design Totaram Murarilal & Sons
- **Aesthetic**: Contemporary Elite & Modern Indian Diamond.
- **Font pairing**: `Cinzel` (serif display) + `Plus Jakarta Sans` (sans body).
- **Primary Color Accent**: Deep Ruby/Royal Crimson (`#9F1239` / `#BE123C`).
- **Layout**: Asymmetrical editorial, grid-heavy, clean bold borders, minimal ornamentation.
- **Interactive Customizer**: Metal & Gem selection with modern geometric jewelry preview (SVG).
- **Path**: `app/client/totaram-murarilal-sons/page.jsx` and `layout.jsx`.

---

## Step 3: Implement Customizer Logic
- Both pages need a fully interactive client-side customizer.
- Metals: 22K Gold, 18K Rose Gold, Platinum.
- Gemstones: Diamond, Emerald, Ruby, Pearl.
- Calculations must be genuine (no hardcoding of results).
  - Price = (Metal weight * Metal price/g) + (Gem count/carat * Gem price/unit) + Making charges.
  - Interactive sliders for weight (grams) and gem quantity (carat/units).

## Step 4: Implement Consultation Form
- Form fields: Name, Phone, Email, Preferred Date, Notes.
- Form must have validation (checking phone digits, email format, presence of name/date).
- Loading states with spinner.
- Success state displaying booking confirmation with mock ID and details.

## Step 5: Implement Signature Collections & Footers
- Different sets of items for each store to highlight distinct offerings (traditional heavy gold temple jewelry vs. modern solitaire & diamond sets).
- Footers containing correct contact information (addresses, phones, emails).

## Step 6: Verification & Testing
- Run `npm run build` to ensure no syntax/compilation issues.
- Fix all lint errors and compile-time warnings.
