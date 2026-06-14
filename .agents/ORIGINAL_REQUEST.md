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

## 2026-06-14T06:14:30Z

# Teamwork Project Prompt

Find 10 real-world CA firms and tax consultants in LB Nagar, Hyderabad, inject them into MongoDB with live Vercel URLs, build 10 bespoke long-format Next.js Tailwind preview sites using subagents, and push everything to GitHub to trigger a Vercel deployment.

Working directory: `d:\GWD\Sales Machine`
Integrity mode: demo

## Requirements

### R1. Lead Discovery & Injection
Research 10 real-world CA firms & tax consultants in LB Nagar, Hyderabad (with working WhatsApp numbers). Push them to the main MongoDB database using a Node.js script. Hardcode the `previewUrl` to `https://yourgwd.vercel.app/client/[slug]`. Generate a custom WhatsApp outreach message referencing their preview URL.
**(NOTE: I have ALREADY completed R1. The leads are in MongoDB. Please focus on R2 and R3.)**

### R2. Bespoke UI Generation
Use the `invoke_subagent` tool to spawn 5 parallel frontend subagents to build 10 distinct, premium LONG-FORMAT Next.js UI preview pages inside `app/client/[slug]`. 
The 10 slugs are:
1. mohammad-ibrahim-co-ca
2. suneel-phani-associates
3. maximum-tax-consultant
4. shiv-kumar-mididoddi-tax
5. spr-associates
6. k-praveen-kumar-associates
7. sai-reddy-yanala-ca
8. y-tax-consultancy
9. kasula-associates
10. ns-co

The subagents MUST strictly read and apply the `ui-ux-pro-max` skill to construct different design systems (Glassmorphism, Neumorphism, Dark Mode, etc.) using Tailwind CSS classes. No generic templates allowed. The pages must be LONG FORMAT (multiple sections like Hero, Services, About Us, Testimonials, CTA, Footer).

### R3. Deployment
Verify the Next.js builds. Commit all new files to git and push them to GitHub to trigger the Vercel deployment.

## Acceptance Criteria

### Verification & Quality
- [x] MongoDB contains 10 new leads for LB Nagar CA firms with `previewUrl` pointing to `https://yourgwd.vercel.app/client/[slug]` and real WhatsApp numbers. (ALREADY DONE)
- [ ] 10 new folders exist in `app/client/`, each containing a LONG-FORMAT `page.jsx` with extensive Tailwind CSS styling and unique premium design systems.
- [ ] Running `npm run build` succeeds with zero errors across the newly generated routes.
- [ ] Changes are successfully pushed to the `main` branch on GitHub.

## 2026-06-14T06:36:18Z

# Teamwork Project Prompt

Generate 10 highly distinct, premium Next.js UI preview pages for Premium Car Detailing businesses in Attapur, Hyderabad, deploying 5 parallel subagents.

Working directory: d:\GWD\Sales Machine
Integrity mode: demo

## Requirements

### R1. Bespoke UI Generation
Use the `invoke_subagent` tool to spawn 5 parallel frontend subagents to build 10 distinct, premium Next.js UI preview pages inside `app/client/[slug]`. 

**The 10 Premium Car Detailing Leads are:**
1. The Detailing Mafia (Attapur) at `app/client/detailing-mafia-attapur`
2. Aqua Shine Auto Detailing Studio at `app/client/aqua-shine-detailing-attapur`
3. Gorgeous Car Detailers at `app/client/gorgeous-car-detailers-attapur`
4. 5K Car Care at `app/client/5k-car-care-attapur`
5. Vinayaka Car Wash at `app/client/vinayaka-car-wash-attapur`
6. GoMechanic Attapur at `app/client/gomechanic-attapur`
7. Ceramic Pro Jubilee Hills at `app/client/ceramic-pro-jubilee-hills`
8. Ceramic Pro Hyderabad at `app/client/ceramic-pro-hyderabad`
9. Clean Fast Car Wash at `app/client/clean-fast-car-wash-attapur`
10. The Detailing Mafia Banjara Hills at `app/client/detailing-mafia-banjara-hills`

### R2. Design Aesthetics
The subagents MUST strictly read and apply the `/frontend-design ui-ux-pro-max` skill to construct different design systems (Glassmorphism, Neumorphism, Dark Mode, etc.) using Tailwind CSS classes. No generic templates allowed. 

### R3. Long Format Sites
The pages must be **LONG FORMAT SITES**. Do not create short or single-screen landing pages. Every page must contain multiple extensive sections: Hero, Services, Pricing Packages (e.g. Ceramic Coating, PPF), Testimonials, Before/After Gallery, FAQ, and Contact. 

### R4. WhatsApp Unfurling
Ensure the custom `layout.jsx` metadata fix is applied for each so WhatsApp unfurling works correctly.

## Acceptance Criteria

### Verification & Quality
- [ ] 10 new folders exist in `app/client/`, each containing a `page.jsx` with extensive Tailwind CSS styling and a `layout.jsx` for custom OpenGraph metadata.
- [ ] The generated pages are extremely long-format, scrolling through multiple detailing-specific sections.
- [ ] Running `npm run build` succeeds with zero errors across the newly generated routes.

