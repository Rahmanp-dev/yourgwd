# Original User Request

## Initial Request — 2026-06-13T10:42:43+05:30

Search and identify 10 local Healthtech / Clinic targets in Tolichowki, Hyderabad that lack a web presence, build 10 fully customized bespoke Next.js pages for them, and push them directly to MongoDB.

Working directory: d:\GWD\Sales Machine
Integrity mode: development

## Requirements

### R1. Target Discovery & Niche Verification
- Search for 10 real Healthtech, Digital Health, or local outpatient clinics in Tolichowki, Hyderabad.
- Verify that they currently lack a dedicated website (i.e. only have aggregators like Justdial or Google Maps listings). Discard any targets with established websites.

### R2. Direct MongoDB Integration
- Autonomously push the 10 qualified leads directly into the live MongoDB database using the Mongoose schema.
- Populate all standard lead schema fields (id, name, city, niche, websiteQuality audit, custom WhatsApp message, and previewUrl).

### R3. Bespoke Next.js Frontend Development
- Code 10 completely unique, different, and beautifully designed landing pages under `app/client/[lead-slug]/page.jsx`.
- Each site must follow the `frontend-design` guidelines (unique color palettes, custom typography, distinct features such as telemedicine intake, scheduling, or diagnostics booking based on the lead's niche). No generic templates or boilerplate copies.

## Acceptance Criteria

### Database Integrity
- [ ] A script or Mongoose query successfully retrieves exactly 10 leads from the database where `city` matches "Tolichowki, Hyderabad".
- [ ] All 10 records have a populated `whatsappMessage` containing a link to their custom preview URL.

### Build and Compilation
- [ ] The Next.js build compiler (`npm run build` or `npx next build`) completes successfully with zero compilation or routing errors for all 10 new routes.
- [ ] There are 10 new, unique directories under `app/client/` containing custom `page.jsx` source code.

### Visual Distinctiveness
- [ ] No two preview sites share the same color palette (at least 4 distinct hex tokens per site) or the same layout structure. Each must feel custom-designed for that specific clinic.

## Follow-up — 2026-06-14T06:14:30Z

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

## Follow-up — 2026-06-14T06:36:18Z

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

## Follow-up — 2026-06-14T16:24:12+05:30

# Teamwork Project Prompt

Generate 10 highly distinct, premium LONG FORMAT Next.js UI preview pages for Interior Designers in Kokapet, Hyderabad, deploying 5 parallel subagents.

Working directory: d:\GWD\Sales Machine
Integrity mode: demo

## Requirements

### R1. Bespoke LONG FORMAT UI Generation
Use the `invoke_subagent` tool to spawn 5 parallel frontend subagents to build 10 distinct, premium Next.js UI preview pages inside `app/client/[slug]`. 
The sites must be LONG FORMAT (extensive, multi-section landing pages), not short generic ones.

**The 10 Interior Designers are:**
1. Luxe Designs & Spaces (luxe-designs-kokapet)
2. HomeLane Kokapet (homelane-kokapet)
3. Livspace Kokapet (livspace-kokapet)
4. Apple Interiors (apple-interiors-kokapet)
5. Tara Design Solutions (tara-design-solutions)
6. Metal & More (metal-and-more-interiors)
7. Namasvi Interiors (namasvi-interiors-narsingi)
8. Simply Interiors Gachibowli (simply-interiors-gachibowli)
9. Morph Design Co. (morph-design-co)
10. D'LIFE Interiors (dlife-interiors-hyderabad)

### R2. Design Aesthetics
The subagents MUST strictly read and apply the `/frontend-design ui-ux-pro-max` skill to construct different design systems (Glassmorphism, Neumorphism, Dark Mode, Minimalist, Brutalist, etc.) using Tailwind CSS classes. No generic templates allowed. 

### R3. WhatsApp Unfurling
Ensure the custom `layout.jsx` metadata fix is applied for each so WhatsApp unfurling works correctly.

## Acceptance Criteria

### Verification & Quality
- [ ] 10 new folders exist in `app/client/`, each containing a LONG FORMAT `page.jsx` with extensive Tailwind CSS styling and a `layout.jsx` for custom OpenGraph metadata.
- [ ] Running `npm run build` succeeds with zero errors across the newly generated routes.

## Follow-up — 2026-06-15T17:14:33Z

# Teamwork Project Prompt

Generate 20 highly distinct, premium LONG FORMAT Next.js UI preview pages for Interior Designers in Attapur, Hyderabad, deploying 10 parallel subagents.

Working directory: d:\GWD\Sales Machine
Integrity mode: demo

## Requirements

### R1. Bespoke LONG FORMAT UI Generation
Use the `invoke_subagent` tool to spawn 10 parallel frontend subagents to build 20 distinct, premium Next.js UI preview pages inside `app/client/[slug]`. 
The sites must be LONG FORMAT (extensive, multi-section landing pages), not short generic ones. Each subagent will handle 2 clients.

**The 20 Interior Designers are:**
1. Tara Design Solutions (tara-design-solutions-attapur)
2. Livspace Attapur (livspace-attapur)
3. Dasos Cabinets (dasos-cabinets-hyderabad)
4. MAK Homes Construction (mak-homes-construction)
5. Luxe Designs & Spaces (luxe-designs-spaces-hyd)
6. HomeLane Attapur (homelane-attapur)
7. Apple Interiors (apple-interiors-hyd)
8. Metal & More (metal-and-more)
9. Namasvi Interiors (namasvi-interiors)
10. Simply Interiors (simply-interiors-hyd)
11. D'LIFE Interiors (dlife-interiors-hyd)
12. Seema Design Studio (seema-design-studio)
13. DesignCafe Hyderabad (designcafe-hyderabad)
14. Bonito Designs Hyderabad (bonito-designs-hyderabad)
15. Decorpot Hyderabad (decorpot-hyderabad)
16. Chary Interiors & Furnitures (chary-interiors)
17. SS Interiors Secunderabad (ss-interiors-secunderabad)
18. Icon Interior Design (icon-interior-design-attapur)
19. Elements Design Lab (elements-design-lab)
20. Style Home Interiors (style-home-interiors-attapur)

### R2. Design Aesthetics
The subagents MUST strictly read and apply the `/frontend-design ui-ux-pro-max` skill to construct different design systems (Glassmorphism, Neumorphism, Light Mode, Dark Mode, Minimalist, Brutalist, etc.) using Tailwind CSS classes. No generic templates allowed. 

### R3. WhatsApp Unfurling
Ensure the custom `layout.jsx` metadata fix is applied for each so WhatsApp unfurling works correctly.

## Acceptance Criteria

### Verification & Quality
- [ ] 20 new folders exist in `app/client/`, each containing a LONG FORMAT `page.jsx` with extensive Tailwind CSS styling and a `layout.jsx` for custom OpenGraph metadata.
- [ ] Running `npm run build` succeeds with zero errors across the newly generated routes.



