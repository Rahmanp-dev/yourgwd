# Clinic Landing Pages Implementation Plan

We will create two premium Next.js client pages for:
1. **Kosmoderma Skin & Hair Clinic** (`kosmoderma-skin-clinic-tolichowki`)
2. **Skinns Clinic** (`skinns-clinic-tolichowki`)

## Design Tokens & Palette
- Creamy Warm Sand Background: `#F5EBE6`
- Terracotta: `#C2593F`
- Warm Honey: `#F59E0B`
- Style: Bold Retro / Warm Clay & Terracotta, Rounded Playful Layout, Friendly Family Clinic Feel.
- Strict Light Mode.

## Layout & Page Designs

### 1. Kosmoderma Skin & Hair Clinic (`kosmoderma-skin-clinic-tolichowki`)
- **Visual Style**: Chunky Retro (Neo-Brutalist inspired with rounded corners). Bold outlines (`border-4 border-[#C2593F]`), offset shadow cards (`shadow-[6px_6px_0px_0px_#C2593F]`), retro sticker-style badges, large friendly rounded buttons (`rounded-2xl`), and a structured grid.
- **Fonts**: `Fredoka` (playful Display font) and `Outfit` (clean Sans font).
- **Interactive Estimator**: "Treatment Budget Planner" with chunky select boxes, a session-count dial, and retro receipt-style breakdown displaying price, discounts, taxes, and final total.
- **Booking Form**: Multi-step or blocky card form with full input validation, helper hints, and custom error badges.

### 2. Skinns Clinic (`skinns-clinic-tolichowki`)
- **Visual Style**: Soft Claymorphism Retro. Soft curved containers (`rounded-[2rem]`), multi-layered soft shadows (`shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),_6px_6px_20px_rgba(194,89,63,0.15)]`), warm terracotta gradient accents, and organic decorative frames. It feels smooth, comforting, and organic.
- **Fonts**: `Space_Grotesque` (bold display font) and `Plus_Jakarta_Sans` (warm, approachable body font).
- **Interactive Estimator**: "Skin & Hair Care Assessment Estimator" with horizontal progress bar, interactive toggle pills for body area, and session select sliders with real-time feedback.
- **Booking Form**: Soft claymorphic form fields, responsive focus rings, and an interactive slot selector.

---

## File List

### Kosmoderma:
- `app/client/kosmoderma-skin-clinic-tolichowki/layout.jsx`
- `app/client/kosmoderma-skin-clinic-tolichowki/page.jsx`

### Skinns Clinic:
- `app/client/skinns-clinic-tolichowki/layout.jsx`
- `app/client/skinns-clinic-tolichowki/page.jsx`

---

## Verification Steps
1. Create directories and file structures.
2. Run build step (`npm run build` or `npx next build`) to verify there are no compilation errors.
3. Verify layout files are exporting the standard layouts and static metadata.
4. Verify components handle browser/client state correctly without SSR mismatch.
