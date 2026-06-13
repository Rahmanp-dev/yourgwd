## 2026-06-13T06:11:38Z
Objective: Build 2 distinct, premium Next.js client pages inside app/client/[slug]/ using Glassmorphism design and apply the custom layout.jsx metadata fix.

Clients:
1. Aditya Construction Company (slug: aditya-construction-company, niche: Residential Builder)
2. Sri Sreenivasa Constructions (slug: sri-sreenivasa-constructions, niche: Residential Builder)

Instructions:
1. Read the ui-ux-pro-max skill to understand how to apply Glassmorphism (e.g., bg-white/10 backdrop-blur-md border border-white/20, soft shadows).
2. For each client, code a unique client component in app/client/[slug]/page.jsx (use "use client"). Do NOT copy each other's layouts or text. The pages should feel premium, containing real estate/builder sections (hero, projects showcase, dynamic appointment/consultation booking form, client testimonials, contact details, footer).
3. For each client, create a sibling layout.jsx in app/client/[slug]/layout.jsx to export metadata for WhatsApp OpenGraph unfurling. Example:
   export const metadata = {
     title: 'Aditya Construction Company - Premium Real Estate Preview',
     description: 'Explore the bespoke digital preview designed for Aditya Construction Company in Shaikpet, Hyderabad.',
     openGraph: {
       title: 'Aditya Construction Company - Premium Real Estate Preview',
       description: 'Explore the bespoke digital preview designed for Aditya Construction Company in Shaikpet, Hyderabad.',
       siteName: 'Aditya Construction Company'
     }
   };
   export default function Layout({ children }) {
     return children;
   }

Your working directory is d:\GWD\Sales Machine\.agents\worker_ui_1.
MANDATORY INTEGRITY WARNING: DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
