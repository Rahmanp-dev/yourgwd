# Task Plan - Next.js UI Previews for Attapur Interior Designers

This plan outlines the design and implementation steps for generating highly polished, interactive preview pages for two interior design clients in Attapur, Hyderabad:
1. **Decorpot Hyderabad** (Modern Minimalist style)
2. **Chary Interiors & Furnitures** (Craft / Heritage Warm style)

## Steps

### Step 1: Decorpot Hyderabad Layout
- **File**: `app/client/decorpot-hyderabad/layout.jsx`
- **Details**: Export metadata with OpenGraph title, description, and high-quality minimalist interior Unsplash image.
- **Verification**: Verify file write and code syntax.

### Step 2: Decorpot Hyderabad Page Component
- **File**: `app/client/decorpot-hyderabad/page.jsx`
- **Details**: Implement a "use client" component in Modern Minimalist style.
  - Colors: Pure white (#FFFFFF) background, Off-black (#111111) text, ultra-thin borders.
  - Content: Hero, tabbed Services portfolio, Interactive Cost Estimator, Testimonials, collapsible FAQs, Contact Form (with state), and Footer.
  - Icons: Lucide-React clean line icons with thin stroke.
- **Verification**: Check state operations (tabs, FAQ toggle, live cost calculation, form submission, and reset).

### Step 3: Chary Interiors Layout
- **File**: `app/client/chary-interiors/layout.jsx`
- **Details**: Export metadata with OpenGraph title, description, and high-quality woodcraft interior Unsplash image.
- **Verification**: Verify file write and code syntax.

### Step 4: Chary Interiors Page Component
- **File**: `app/client/chary-interiors/page.jsx`
- **Details**: Implement a "use client" component in Craft / Heritage Warm style.
  - Colors: Beige background (#F5F5DC), warm walnut text/wood tones (#8B5A2B), rich burgundy accents (#800020).
  - Content: Warm Walnut Hero, tabbed Custom furniture/fittings, Traditional craft cost estimator, Traditional testimonies, collapsible FAQs, Contact Form (with state), and Footer.
- **Verification**: Check state operations (tabs, FAQ toggle, wood selection, live estimate, form states).

### Step 5: Compilation and Verification
- **Details**: Run compilation checks or code analysis if possible to verify there are no syntax errors or breaking imports.
- **Verification**: Check Next.js build or run linter checks.

### Step 6: Handoff Report
- **File**: `.agents/worker_ui_attapur_8/handoff.md`
- **Details**: Generate the five-component handoff report.
