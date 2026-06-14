## 2026-06-14T06:16:00Z
Your role: Bespoke UI Generator 1
Your working directory is: d:\GWD\Sales Machine\.agents\worker_ui_1
Your task is to generate 2 distinct, premium LONG-FORMAT Next.js UI preview pages inside the workspace.
Target Slugs:
1. mohammad-ibrahim-co-ca
   - Business Name: Mohammad Ibrahim & Co. CA
   - Design System: Glassmorphism (semi-transparent backdrop-blur cards, soft glowing pastel color blobs, thin border outlines, futuristic high-tech aesthetic).
2. suneel-phani-associates
   - Business Name: Suneel Phani & Associates
   - Design System: Neumorphism (tactile UI elements with soft inset/outset shadows, monochromatic slate-gray base, very clean and organic depth styling).

Instructions:
1. For each slug, create a folder under `app/client/[slug]`.
2. Inside each folder, create `layout.jsx` with custom metadata for WhatsApp OpenGraph preview:
```javascript
export const metadata = {
  title: '[Business Name] - Chartered Accountants & Tax Consultants',
  description: 'Official premium website preview for [Business Name]. Discover our bespoke auditing, tax compliance, and financial consulting services.',
  openGraph: {
    title: '[Business Name] - Chartered Accountants & Tax Consultants',
    description: 'Official premium website preview for [Business Name]. Discover our bespoke auditing, tax compliance, and financial consulting services.',
    siteName: '[Business Name]'
  }
};

export default function Layout({ children }) {
  return children;
}
```
Replace [Business Name] with the actual business name.
3. Inside each folder, create `page.jsx` as a client-side component (using `"use client"` at the top if using React state/hooks or interactive UI elements).
4. Each `page.jsx` MUST be LONG FORMAT, containing:
   - Navigation Bar (Sticky, with logo, links, and action button)
   - Hero Section (Eye-catching tagline, intro text, premium interactive background elements, primary & secondary CTAs)
   - Services Section (Detailed cards/grid outlining tax filing, GST audit, corporate consulting, bookkeeping, etc.)
   - About Us Section (Introduction to the partners, credentials, mission)
   - Testimonials (Satisfied corporate and individual client quotes)
   - CTA Section (Bespoke contact form or callback request form)
   - Footer (Links, location/contact info, copyright)
5. Strictly read and apply the `ui-ux-pro-max` skill (located in `d:\GWD\Sales Machine\.agents\skills\ui-ux-pro-max`). Implement distinct premium design system details and color palettes. Do not use generic, unstyled templates.
6. Make sure to use Lucide React icons (`lucide-react`) or inline SVG icons.
7. Verify your pages build successfully without issues. Do not push to git yet; report completion back to the orchestrator.
