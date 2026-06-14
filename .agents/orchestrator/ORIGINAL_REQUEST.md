# Original User Request

## 2026-06-13T06:07:06Z

# Teamwork Project Prompt

Find 10 real-world PropTech & Real Estate leads in Shaikpet, Hyderabad, inject them into MongoDB with live Vercel URLs, build 10 bespoke Next.js Tailwind preview sites using subagents, and push everything to GitHub to trigger a Vercel deployment.

Working directory: `d:\GWD\Sales Machine`
Integrity mode: demo

## Requirements

### R1. Lead Discovery & Injection
Research 10 real-world PropTech/Real Estate businesses in Shaikpet, Hyderabad (with working WhatsApp numbers). Push them to the main MongoDB database using a Node.js script. Hardcode the `previewUrl` to `https://yourgwd.vercel.app/client/[slug]`. Generate a custom WhatsApp outreach message referencing their preview URL.

### R2. Bespoke UI Generation
Use the `invoke_subagent` tool to spawn 5 parallel frontend subagents to build 10 distinct, premium Next.js UI preview pages inside `app/client/[slug]`. The subagents MUST strictly read and apply the `ui-ux-pro-max` skill to construct different design systems (Glassmorphism, Neumorphism, Dark Mode, etc.) using Tailwind CSS classes. Ensure the custom `layout.jsx` metadata fix is applied for each so WhatsApp unfurling works correctly.

### R3. Deployment
Verify the Next.js builds. Commit all new files to git and push them to GitHub to trigger the Vercel deployment.

## Acceptance Criteria

### Verification & Quality
- [ ] MongoDB contains 10 new leads for Shaikpet Real Estate with `previewUrl` pointing to `https://yourgwd.vercel.app/client/[slug]`.
- [ ] 10 new folders exist in `app/client/`, each containing a `page.jsx` with extensive Tailwind CSS styling and a `layout.jsx` for custom OpenGraph metadata.
- [ ] Running `npm run build` succeeds with zero errors across the newly generated routes.
- [ ] Changes are successfully pushed to the `main` branch on GitHub.

## 2026-06-14T11:44:54+05:30

# Project Completion Request
1. R1 is already complete (leads are already injected in MongoDB).
2. Spawn parallel worker subagents (up to 5) to generate 10 distinct, premium LONG-FORMAT Next.js UI preview pages inside `app/client/[slug]`. The slugs are:
   - mohammad-ibrahim-co-ca
   - suneel-phani-associates
   - maximum-tax-consultant
   - shiv-kumar-mididoddi-tax
   - spr-associates
   - k-praveen-kumar-associates
   - sai-reddy-yanala-ca
   - y-tax-consultancy
   - kasula-associates
   - ns-co
   Ensure each page is LONG FORMAT, with multiple sections like Hero, Services, About Us, Testimonials, CTA, Footer. Use distinct premium design systems (e.g. Glassmorphism, Neumorphism, Dark Mode, etc.) styled with Tailwind CSS, strictly reading and applying the `ui-ux-pro-max` skill. No generic templates allowed.
3. Verify the Next.js builds. Running `npm run build` must succeed with zero errors.
4. Commit all new files to git and push them to the `main` branch on GitHub.

## 2026-06-14T12:06:43+05:30

Generate 10 highly distinct, premium Next.js UI preview pages for Premium Car Detailing businesses in Attapur, Hyderabad, deploying 5 parallel subagents.

Mission:
Generate 10 highly distinct, premium Next.js UI preview pages for Premium Car Detailing businesses in Attapur, Hyderabad, deploying 5 parallel subagents.

Key Requirements:
1. Bespoke UI Generation: Spawn 5 parallel frontend subagents to build 10 distinct, premium Next.js UI preview pages inside `app/client/[slug]`.
The 10 leads are:
- The Detailing Mafia (Attapur) at `app/client/detailing-mafia-attapur`
- Aqua Shine Auto Detailing Studio at `app/client/aqua-shine-detailing-attapur`
- Gorgeous Car Detailers at `app/client/gorgeous-car-detailers-attapur`
- 5K Car Care at `app/client/5k-car-care-attapur`
- Vinayaka Car Wash at `app/client/vinayaka-car-wash-attapur`
- GoMechanic Attapur at `app/client/gomechanic-attapur`
- Ceramic Pro Jubilee Hills at `app/client/ceramic-pro-jubilee-hills`
- Ceramic Pro Hyderabad at `app/client/ceramic-pro-hyderabad`
- Clean Fast Car Wash at `app/client/clean-fast-car-wash-attapur`
- The Detailing Mafia Banjara Hills at `app/client/detailing-mafia-banjara-hills`

2. Design Aesthetics: Read and apply the `/frontend-design ui-ux-pro-max` skill to construct different design systems (Glassmorphism, Neumorphism, Dark Mode, etc.) using Tailwind CSS classes. No generic templates allowed.
3. Long Format Sites: The pages must be long-format. Every page must contain multiple extensive sections: Hero, Services, Pricing Packages (e.g., Ceramic Coating, PPF), Testimonials, Before/After Gallery, FAQ, and Contact.
4. WhatsApp Unfurling: Ensure the custom `layout.jsx` metadata fix is applied for each so WhatsApp unfurling works correctly.

Acceptance Criteria:
- 10 new folders exist in `app/client/`, each containing a `page.jsx` with extensive Tailwind CSS styling and a `layout.jsx` for custom OpenGraph metadata.
- The generated pages are extremely long-format, scrolling through multiple detailing-specific sections.
- Running `npm run build` succeeds with zero errors across the newly generated routes.
