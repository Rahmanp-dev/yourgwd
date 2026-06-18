# UI/UX Pro Max - Design Intelligence

Comprehensive design guide for web and mobile applications. Contains 50+ styles, 161 color palettes, 57 font pairings, 161 product types with reasoning rules, 99 UX guidelines, and 25 chart types across 10 technology stacks.

## Key Checks for Professional UI:

1. **Accessibility (CRITICAL)**
   - Minimum 4.5:1 ratio for normal text (large text 3:1).
   - Visible focus rings on interactive elements.
   - Descriptive alt text and aria-labels for icons.
   - Sequential heading hierarchy, no level skip.

2. **Touch & Interaction (CRITICAL)**
   - Min 44×44px touch targets.
   - Minimum 8px gap between targets.
   - Clear pressed/tap feedback (ripple/opacity/elevation/scale feedback).
   - Disable buttons during async operations, show spinner or progress.

3. **Performance (HIGH)**
   - Use WebP/AVIF, lazy load non-critical assets.
   - Declare dimensions or aspect-ratio to prevent layout shift.
   - Skeleton/shimmer screens instead of long blocking spinners.

4. **Style Selection (HIGH)**
   - Match style to product type.
   - Avoid emojis for structural elements; use vector SVG icons (e.g. Lucide).
   - Clear states for hover/pressed/disabled.

5. **Layout & Responsive (HIGH)**
   - Design mobile-first, scale to desktop.
   - Spacing scale based on 4px/8px increments.
   - Respect safe-areas for fixed headers/footers.
   - Consistent container max-width.

6. **Typography & Color (MEDIUM)**
   - Line height 1.5-1.75 for body.
   - Tabular/monospaced numbers for prices and data columns.
   - Semantic color tokens instead of raw hex.
   - Text measure 60-75 characters per line on desktop.

7. **Animation (MEDIUM)**
   - Duration 150-300ms for micro-interactions.
   - Use transform/opacity; avoid animating width/height.
   - Respect prefers-reduced-motion.
