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

## 2026-06-14T10:54:12Z

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

## 2026-06-15T17:14:33Z

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




## 2026-06-16T07:54:00Z

Build 20 highly distinct, premium, long-format Next.js UI preview pages for independent jewellery stores in Hyderabad inside `app/client/[slug]`. The subagents must utilize different design systems (Glassmorphism, Neumorphism, Heritage, Dark Mode, etc.) using Tailwind CSS and follow the `ui-ux-pro-max` and `frontend-design` guidelines.

Working directory: `d:\GWD\Sales Machine`
Integrity mode: development

## Requirements

### R1. UI Page Components
Create the Next.js `page.jsx` and `layout.jsx` files for each of the 20 independent jewellery stores. Each page must be highly polished, visually premium, and completely functional on the client side.

The 20 leads and their assigned design styles are:
1. **Tibarumal & Sons** (`tibarumal-sons-shaikpet`): Modern Luxury / Glassmorphism
2. **Tibarumal Ramnivas Jewellers** (`tibarumal-ramnivas-jubilee-hills`): Modern Luxury / Glassmorphism
3. **Darpan Mangatrai Pearls & Jewellers** (`darpan-mangatrai-pearls`): Royal Indian Heritage (Gold/Crimson theme)
4. **Krishna Pearls & Jewellers** (`krishna-pearls-jewellers`): Royal Indian Heritage (Gold/Crimson theme)
5. **Sri Jagdamba Pearls** (`sri-jagdamba-pearls`): Contemporary Minimalist (Cream/Bronze theme)
6. **Suhani Pittie** (`suhani-pittie-banjara-hills`): Contemporary Minimalist (Cream/Bronze theme)
7. **PMJ Jewels** (`pmj-jewels-banjara-hills`): Dark Mode / Luxury Diamond (Slate/Gold theme)
8. **Vasundhara Diamond Roof** (`vasundhara-diamond-roof`): Dark Mode / Luxury Diamond (Slate/Gold theme)
9. **Manepally Jewellers** (`manepally-jewellers-general-bazar`): Classic Elegance / High-Contrast Serif (Emerald/Ivory theme)
10. **Sri Krishna Jewellers** (`sri-krishna-jewellers-banjara-hills`): Classic Elegance / High-Contrast Serif (Emerald/Ivory theme)
11. **Totaram & Sons Jewellers** (`totaram-sons-jewellers-abids`): Neumorphic Modern (Soft shadows, light theme)
12. **Totaram Murarilal & Sons** (`totaram-murarilal-sons`): Neumorphic Modern (Soft shadows, light theme)
13. **Meena Jewellers** (`meena-jewellers-banjara-hills`): Soft Pastel Luxury (Rose Gold/Blush theme)
14. **Musaddilal Jewellers** (`musaddilal-jewellers-basheer-bagh`): Soft Pastel Luxury (Rose Gold/Blush theme)
15. **Ghanshyamdas Jewellers** (`ghanshyamdas-jewellers-abids`): Cyber-Platinum / Futuristic Metal (Silver/Teal theme)
16. **Modi Pearls** (`modi-pearls-original`): Cyber-Platinum / Futuristic Metal (Silver/Teal theme)
17. **Akoya Pearls** (`akoya-pearls-ghanshyamdas`): Organic Biophilic / Floral Nature (Sage/Pearl theme)
18. **Suraj Bhan Jewellers** (`suraj-bhan-jewellers`): Organic Biophilic / Floral Nature (Sage/Pearl theme)
19. **Gopal Jewellers** (`gopal-jewellers-moula-ali`): Bold Art Deco / Retro (Navy/Mustard theme)
20. **Neelkanth Jewellers** (`neelkanth-jewellers-somajiguda`): Bold Art Deco / Retro (Navy/Mustard theme)

### R2. Long Format Content Sections
Each client page must be **long-format** and include the following sections:
- **Hero Header**: Engaging title, taglines, and immersive background gradients/imagery.
- **Brand Heritage**: A section detailing their independent legacy and craft.
- **Interactive Jewelry Customizer**: Client-side interactive widget where users can choose metal type (22K Gold, 18K Rose Gold, Platinum) and gemstone (Diamond, Emerald, Ruby, Pearl) to see custom price estimates and mock visuals.
- **Signature Collection Grid**: Grid display of premium product cards (e.g., Temple Necklaces, Diamond Chokers, Pearl Strings).
- **Virtual Design Consultation**: A contact/booking form with active state validations.
- **Customer Stories / Testimonials**: Real-looking reviews from Hyderabad-based clients.
- **Store Details Footer**: Showcasing real contact numbers, address, and email details.

### R3. Visual Excellence & Responsiveness
All pages must be fully mobile responsive. The typography must pair elegant display fonts (e.g. Playfair Display, Cinzel, Prata) with readable body faces (e.g. Plus Jakarta Sans, Inter). Vector-based icons (Lucide/Heroicons) must be used instead of emojis. Active tap feedback must be implemented for all buttons and tabs.

---

## Acceptance Criteria

### Compilation & Routing
- [ ] All 20 page routes compile under `npm run build` with zero errors.
- [ ] Direct URLs `https://yourgwd.vercel.app/client/[slug]` correctly resolve and load.

### Visual Quality & UX
- [ ] All 20 pages feature mobile responsive layouts (checked at 375px and 1280px width) with no horizontal overflow.
- [ ] No emojis are used as structural icons on any page.
- [ ] Interactive customizer widgets update state and calculate pricing correctly.
- [ ] Dynamic OpenGraph metadata is configured in each client's `layout.jsx` for rich WhatsApp unfurling.
- [ ] The contact footer displays the correct phone and email details.

## 2026-06-17T05:48:11Z

# Teamwork Project Prompt — Draft

Build 20 highly distinct, premium, long-format Next.js UI preview pages for Caterers & Cloud Kitchens in Uppal, Hyderabad inside `app/client/[slug]`.

Working directory: d:\GWD\Sales Machine
Integrity mode: development

## Requirements

### R1. Develop 20 Distinct UI Pages
Create the Next.js `page.jsx` and `layout.jsx` files for 20 real-world caterers and cloud kitchens in Uppal. Each page must be highly polished, visually premium, and completely functional on the client side. Use different design systems (Glassmorphism, Neumorphism, Light Mode, etc.) using Tailwind CSS classes. No generic templates allowed. **Do not use Dark Mode**.

The 20 leads and slugs are:
1. Amba Ji Sri Panchamukhi Caterers (amba-ji-caterers-uppal)
2. Jyothi Caterers (jyothi-caterers-uppal)
3. Jaswanth Caterers (jaswanth-caterers-uppal)
4. Sri Venkateshwara Caterers (sri-venkateshwara-caterers-uppal)
5. New Vindu Caterers (new-vindu-caterers-uppal)
6. Raaj Thaarak Caterers (raaj-thaarak-caterers-uppal)
7. Nakshatra Catering (nakshatra-catering-uppal)
8. Golden Caterers (golden-caterers-uppal)
9. Shri Lakshmi Caterers (shri-lakshmi-caterers-uppal)
10. SV Caterers (sv-caterers-uppal)
11. Ruchi Caterers (ruchi-caterers-uppal)
12. Balaji Caterers (balaji-caterers-uppal)
13. Annapurna Caterers (annapurna-caterers-uppal)
14. Srishti Cloud Kitchen (srishti-cloud-kitchen-uppal)
15. Swagath Caterers (swagath-caterers-uppal)
16. Maharaja Caterers (maharaja-caterers-uppal)
17. Spice Route Cloud Kitchen (spice-route-cloud-kitchen-uppal)
18. Vantillu Caterers (vantillu-caterers-uppal)
19. Shahi Darbar Caterers (shahi-darbar-caterers-uppal)
20. Ulavacharu Cloud Kitchen (ulavacharu-cloud-kitchen-uppal)

### R2. Long Format Content Sections
Each client page must be **long-format** and include the following sections:
- **Hero Header**: Engaging title, taglines, and immersive background gradients/imagery.
- **Brand Story/Heritage**: A section detailing their catering legacy and specialty.
- **Interactive Menu Customizer/Estimator**: Client-side interactive widget where users can select event types (Wedding, Corporate, Birthday), guest count, and menu tiers (Standard, Premium, Royal) to see custom price estimates.
- **Signature Dishes Grid**: Grid display of premium food cards.
- **Booking Consultation**: A contact/booking form with active state validations.
- **Customer Testimonials**: Real-looking reviews from Hyderabad-based clients.
- **Store Details Footer**: Showcasing real contact numbers, address, and email details.

### R3. Visual Excellence & Responsiveness
All pages must be fully mobile responsive. The typography must pair elegant display fonts with readable body faces. Vector-based icons (Lucide) must be used instead of emojis. Active tap feedback must be implemented for all buttons and tabs. Strictly follow the `frontend-design` and `ui-ux-pro-max` guidelines.

## Acceptance Criteria

### Compilation & Routing
- [ ] All 20 page routes compile under `npm run build` with zero errors.
- [ ] Direct URLs `https://yourgwd.vercel.app/client/[slug]` correctly resolve and load.

### Visual Quality & UX
- [ ] All 20 pages feature mobile responsive layouts with no horizontal overflow.
- [ ] No dark mode is used on any page.
- [ ] Interactive customizer widgets update state and calculate pricing correctly.
- [ ] The contact footer displays the correct authentic phone and email details.




