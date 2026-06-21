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





## 2026-06-20T15:25:16Z

# Teamwork Project: 10 Premium Pre-school UI Preview Pages — Tolichowki, Hyderabad

Build 10 highly distinct, premium, LONG FORMAT Next.js UI preview pages for Pre-schools & Play schools in Tolichowki, Hyderabad, inside `app/client/[slug]`.

Working directory: d:\GWD\Sales Machine

## Critical Rules (NON-NEGOTIABLE)
- **STRICTLY NO DARK MODE** on any page whatsoever. All pages must use Light Mode, bright pastels, or clean whitespace aesthetics.
- All pages must be **long-format** — minimum 7 full content sections per page.
- Each page must be **visually distinct** — use completely different color palettes, typography pairings, and layout structures. No two pages should look alike.
- Use **Tailwind CSS** classes for all styling. No inline styles.
- Use **Lucide React** icons only. No emoji used as structural icons.
- All pages must be **fully mobile responsive** with no horizontal overflow.
- Use `"use client"` directive at the top of every `page.jsx`.

## Schools to Build (10 pages)
1. Bachpan Play School Tolichowki → slug: `bachpan-play-school-tolichowki`
2. Kidzee Tolichowki → slug: `kidzee-tolichowki`
3. Little Millennium Tolichowki → slug: `little-millennium-tolichowki`
4. EuroKids Tolichowki → slug: `eurokids-tolichowki`
5. Kangaroo Kids Tolichowki → slug: `kangaroo-kids-tolichowki`
6. Orchids The International School Tolichowki → slug: `orchids-international-school-tolichowki`
7. STEM Kids Preschool Tolichowki → slug: `stem-kids-preschool-tolichowki`
8. Maple Bear Canadian Preschool Tolichowki → slug: `maple-bear-preschool-tolichowki`
9. Little Elly Preschool Tolichowki → slug: `little-elly-preschool-tolichowki`
10. Footprints Play School Tolichowki → slug: `footprints-play-school-tolichowki`

## Required Sections per Page (Long Format)
Each page MUST include ALL of the following sections:
1. Hero Section — Large headline, tagline, engaging hero visual with gradient backgrounds (NO dark colors), primary CTA button linking to admission form section.
2. Stats Bar — 3-4 achievement metrics (e.g., Years Established, Children Enrolled, Activities Offered, Parent Satisfaction %).
3. About / Our Philosophy — Mission statement, teaching approach, what makes this school unique in Tolichowki.
4. Curriculum & Programs — 4-6 program cards (Playgroup, Nursery, LKG, UKG, Daycare, After-school). Each card with icon, program name, age range, key highlights.
5. Facilities Gallery — Visual showcase of classrooms, play areas, library, activity rooms using Unsplash images with beautiful hover effects.
6. Fee & Admission Estimator — Interactive widget: user selects program type (Playgroup/Nursery/LKG/UKG) and sees estimated annual fees, registration fees, with a breakdown table.
7. Parent Testimonials — 3-4 review cards with star ratings, parent names, and authentic-sounding feedback specific to Tolichowki families.
8. Admission Enquiry Form — Full form with: Child's Name, Parent's Name, Phone, Email, Child's DOB (with age auto-calculation), Program Interest (dropdown), Preferred Start Date, Message. Include real-time validation (required fields, phone format, email format). On successful submission show a confirmation card with a reference number.
9. Contact & Location Footer — Real school address in Tolichowki, phone number, email, operating hours, and an embedded Google Maps placeholder iframe.

## Design System Assignments (apply distinctly per page)
- `bachpan-play-school-tolichowki`: Cheerful Glassmorphism — primary rose/coral (#F76E6E), white frosted cards, playful rounded corners, bubbly font (Nunito)
- `kidzee-tolichowki`: Fresh Neumorphism — soft mint green (#A8E6CF), subtle shadow-inset elements, clean sans-serif (Plus Jakarta Sans)
- `little-millennium-tolichowki`: Sunshine Flat — bright yellow (#FFD166), orange accents (#F4845F), geometric shapes, bold Poppins
- `eurokids-tolichowki`: Sky Blue Minimal — soft sky blue (#BDE0FE), white cards, gentle gradients, Inter font
- `kangaroo-kids-tolichowki`: Nature Green — earthy sage (#6BAA75), cream backgrounds (#FEFAE0), warm serif + sans pairing (Merriweather + Open Sans)
- `orchids-international-school-tolichowki`: Luxury Pearl — champagne (#F5E6C8), deep navy accent text (#1B4080), serif-forward design (Playfair Display), premium feel
- `stem-kids-preschool-tolichowki`: Tech Bright — electric purple (#7B61FF), lime green accents (#B5FF6D), dark-free futuristic design, Space Grotesk
- `maple-bear-preschool-tolichowki`: Canadian Warmth — maple red (#C0392B) on warm cream, bear paw motif in icons, Lato + Georgia
- `little-elly-preschool-tolichowki`: Pastel Rainbow — lavender (#C9B8FF), soft pink (#FFB3C6), multi-hue gradient hero, Quicksand font
- `footprints-play-school-tolichowki`: Terracotta Warmth — dusty terracotta (#E07A5F), sand (#F2CC8F), Josefin Sans, playful footprint-inspired dividers

## File Structure per School
For each slug, create:
- `app/client/{slug}/page.jsx` — Full interactive React component (use client)
- `app/client/{slug}/layout.jsx` — SEO metadata layout with school name in title

## Technical Requirements
- Function names in page.jsx and layout.jsx must be single CamelCase identifiers (no spaces). E.g., `BachpanPlaySchoolPage`, `KidzeeTolichowkiLayout`.
- All images: use real Unsplash URLs with ?auto=format&fit=crop&q=80&w=800 parameters.
- Interactive Fee Estimator: use useState to track selected program and render price breakdown dynamically.
- Admission form: use useState for form fields and errors; show success confirmation on submit (simulated with setTimeout).
- Smooth scroll navigation in header to section anchors.
- Mobile hamburger menu for small screens.

## Acceptance Criteria
- [ ] All 10 page.jsx and layout.jsx files created in correct app/client/{slug}/ paths.
- [ ] npm run build passes with zero errors for all 10 new routes.
- [ ] Zero dark mode: no dark: Tailwind classes, no bg-gray-900, bg-slate-900, bg-black or similar dark backgrounds used as primary backgrounds.
- [ ] Each page has all 9 required sections.
- [ ] Fee Estimator widget correctly changes price breakdown when user selects different programs.
- [ ] Admission form validates inputs and shows success state.
- [ ] All pages are fully mobile responsive (no horizontal overflow at 375px viewport).
- [ ] Each page uses a visually distinct color palette from the design system assignments above.

## Follow-up — 2026-06-21T09:40:34Z

Build 10 highly distinct, premium, long-format Next.js UI preview pages for Skin & Cosmetic Clinics in Banjara Hills, Hyderabad, inside `app/client/[slug]`.

Working directory: d:\GWD\Sales Machine
Integrity mode: development

## Requirements

### R1. Develop 10 Distinct UI Pages
Create the Next.js `page.jsx` and `layout.jsx` files for 10 real-world skin & cosmetic clinics in Banjara Hills. Each page must be highly polished, visually premium, and completely functional on the client side. Use different design systems (Glassmorphism, Neumorphism, Light Mode, etc.) using Tailwind CSS classes. No generic templates allowed. **STRICTLY NO DARK MODE on any page whatsoever. All pages must use Light Mode, bright pastels, or clean whitespace aesthetics.**

### R2. Long Format Content Sections (7-9 sections minimum per page)
Each page MUST include all of the following sections:
1. **Hero Section** — Large headline, tagline, engaging hero visual with gradient backgrounds (NO dark colors), primary CTA button linking to appointment form section.
2. **Stats Bar** — 3-4 achievement metrics (e.g., Years of Experience, Happy Patients, Successful Treatments, Certified Dermatologists).
3. **Founder / Head Doctor Bio** — Introduces the lead dermatologist (real name and credentials from crawled data), their philosophy, and qualifications.
4. **Treatments & Services Selector** — Client-side interactive widget: users can select different treatment categories (Acne, Anti-Aging, Laser, Hair Transplant) and view specific treatment options, expected sessions, and custom price ranges.
5. **Interactive Skin Assessment Questionnaire** — A mini client-side questionnaire (3-4 questions) that dynamically recommends a treatment category based on user answers.
6. **Results / Before & After Showcase** — A visual gallery showing mock results/case studies.
7. **Patient Testimonials** — 3-4 review cards with star ratings, patient names, and authentic-sounding feedback specific to Banjara Hills families.
8. **Appointment Booking / Enquiry Form** — Full form with: Child/Adult Name, Phone, Email, Preferred Date, Treatment Interest (dropdown), Preferred Doctor. Include real-time validation. On successful submission show a confirmation card with a reference number.
9. **Clinic Location & Hours Footer** — Detailed contact info (real phone number, address, and email from crawled data), operating hours, and an embedded maps placeholder.

### R3. Visual Excellence & Responsiveness
All pages must be fully mobile responsive with no horizontal overflow. Typography must pair elegant display fonts with readable body faces. Vector-based icons (Lucide) must be used instead of emojis. Active tap feedback must be implemented for all buttons and tabs.

---

## Clinics to Build & Design Systems

### 1. Oliva Skin & Hair Clinic
* **Slug:** `oliva-clinic-banjara-hills`
* **Lead Doctor:** Dr. Chadalavada Pragathi (MBBS, MD (DVL))
* **Phone:** +91 8977755473
* **Address:** House No. 8-2-270/B/1, 2nd Floor, Q Mart Building, Road No. 3, Uptown Banjara, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Laser hair reduction, Acne scar treatment, Pigmentation treatment
* **Design System:** **Champagne Premium** — primary gold/champagne (#D4AF37), luxury serif display typography (Playfair Display), elegant light cream backgrounds (#FDFBF7), clean spacing.

### 2. Kaya Clinic
* **Slug:** `kaya-clinic-banjara-hills`
* **Lead Doctor:** Dr. Samatha Nuthalapati (MBBS, MD (DVL))
* **Phone:** +91 8657569378
* **Address:** Municipal No. 6/3, Le Benaka, Opposite GIVA Silver & Gold Jewellery, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Laser hair reduction, Acne scar treatment, Chemical peels
* **Design System:** **Clean Medical Mint** — primary soft mint (#10B981), high contrast clinical clean layout, sans-serif (Inter/Plus Jakarta Sans), pure white backgrounds.

### 3. Clinica Derm
* **Slug:** `clinica-derm-banjara-hills`
* **Lead Doctor:** Dr. Deepthi Atmakuri (MBBS, DDVL)
* **Phone:** +91 6309801421
* **Address:** 2nd Floor, H.No: 8-2-686, 16/2, Road No. 12, beside Pepperfry, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Morpheus8 RF microneedling, HydraFacial, Laser hair reduction
* **Design System:** **Rose Gold Neumorphism** — soft rose tint (#FFF5F5), neumorphic inset and outset shadows, modern elegant typography (Outfit).

### 4. Sri Skin & Cosmetology Centre
* **Slug:** `sri-skin-clinic-banjara-hills`
* **Lead Doctor:** Dr. D. Sudha Vani (MBBS, MD (Dermatology))
* **Phone:** +91 9849303221
* **Address:** First Floor, Kimtee Banjara Heights, Opposite Pride Honda Showroom, Road No. 12, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Vitiligo light therapy (PUVA/NBUVB), Q-switched laser resurfacing, Skin tightening
* **Design System:** **Luxury Glassmorphism** — frosted white cards, subtle blur backdrop, coral/salmon primary accents (#FA8072), bubbly clean Nunito font.

### 5. Reborn Skin & Hair Clinic
* **Slug:** `reborn-skin-clinic-banjara-hills`
* **Lead Doctor:** Dr. Kakollu Sravani (MBBS, MD (DVL))
* **Phone:** +91 9581062000
* **Address:** 4th Floor, Brooks Brothers Building, Road Number 2, BNR Colony, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Laser hair removal, PRP hair therapy, Chemical peels
* **Design System:** **Pearl White Minimalist** — ultra-clean, minimal lines, light grey and silver borders, soft lavender accents (#8B5CF6), sans-serif (Plus Jakarta Sans).

### 6. The Skin Sensé by Dr. Alekya Singapore
* **Slug:** `the-skin-sense-banjara-hills`
* **Lead Doctor:** Dr. Alekya Singapore (MBBS, DDVL)
* **Phone:** +91 9014696430
* **Address:** Bhavya's Fantastika, 201/208, Road No. 12, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Biostimulants (Sculptra/Radiesse), HydraFacials, Double chin reduction
* **Design System:** **Terracotta Organic Warmth** — warm sandy backgrounds (#FDF6F0), terracotta primary (#C05621), warm editorial typography (Merriweather display + Open Sans body).

### 7. Sikara Clinics
* **Slug:** `sikara-clinics-banjara-hills`
* **Lead Doctor:** Dr. Sanky Divya (MBBS, DDVL)
* **Phone:** +91 8121968111
* **Address:** 1st Floor, H.No: 8-2-120/77/1 & 3, Road No. 2, Opposite KBR Park, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Laser hair reduction, Skin tightening, Acne treatments
* **Design System:** **Sky Blue Wellness** — soft sky blue (#0EA5E9), pure clean white layout, friendly rounded buttons, sans-serif (Inter).

### 8. Dr. Syeda Nikhat's Skin Care Clinic
* **Slug:** `dr-nikhat-skin-clinic-banjara-hills`
* **Lead Doctor:** Dr. Syeda Nikhat Baquer (MBBS, DDVL)
* **Phone:** +91 9492571972
* **Address:** Road No. 2, Beside Birth Place Hospital, L V Prasad Eye Hospital Road, Opposite Harley Davidson Showroom, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Pediatric dermatology, Hair loss treatment (PRP/Plasma therapy), Laser scar revision
* **Design System:** **Joyful Pastel Coral** — friendly pediatric-dermatology touch, soft peach/coral accents (#FF8A8A), rounded shapes, playful Nunito font.

### 9. Labelle Slimming, Skin & Hair Clinic
* **Slug:** `labelle-clinic-banjara-hills`
* **Lead Doctor:** Dr. Pooja Tatapudi (MBBS, MD, DNB)
* **Phone:** +91 8019002020
* **Address:** 2nd Floor, Survey No. 403, Venkateshwara Co-operative House Building Society, 1 & 102/1, Lane No. 12, beside HDFC Bank, MLA Colony, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Pigmentation treatment, Skin lightening, Acne scar removal
* **Design System:** **Platinum Premium Luxury** — dark grey/charcoal text on soft beige (#F5F5F0), thin elegant borders, serif typography, high-end spa aesthetic.

### 10. Manira Dermatology & Aesthetics
* **Slug:** `manira-dermatology-banjara-hills`
* **Lead Doctor:** Dr. V. Manjula Priyadarshini (MBBS, DDVL)
* **Phone:** +91 7569139558
* **Address:** 1st Floor, House No. 8-2-601/A, Plot No. 159, Road No. 10, Banjara Hills, Hyderabad, Telangana 500028
* **Treatments:** Botox & Fillers, Chemical peels, Hair PRP & GFC therapy
* **Design System:** **Fresh Orchid Violet** — primary soft violet/orchid (#A78BFA), modern card layouts with glassmorphic borders, chic Sans-Serif font (Outfit).

---

## Technical Requirements
- Use `"use client"` directive at the top of every `page.jsx`.
- Function names in `page.jsx` and `layout.jsx` must be single CamelCase identifiers (no spaces). E.g., `OlivaClinicBanjaraHillsPage`, `KayaClinicBanjaraHillsLayout`.
- Use **Lucide React** icons only. No emoji used as structural icons.
- All images: use real Unsplash URLs with `?auto=format&fit=crop&q=80&w=800` parameters.
- Interactive Fee/Treatment Estimator: use `useState` to track selected category and render specific treatments dynamically.
- Form validation must be handled on the client side with custom error messages and visual feedback.

## Acceptance Criteria

### Compilation & Routing
- [ ] All 10 page routes compile under `npm run build` with zero errors.
- [ ] Direct URLs `https://yourgwd.vercel.app/client/[slug]` correctly resolve and load.

### Visual Quality & UX
- [ ] All 10 pages feature mobile responsive layouts with no horizontal overflow.
- [ ] No dark mode is used on any page.
- [ ] Each page uses a visually distinct color palette and styling based on its assigned design system.
- [ ] All 9 required sections are present on every page.
- [ ] Interactive treatment widgets and skin questionnaires work dynamically on the client side.
- [ ] The contact footer displays the correct authentic phone and address details.


## 2026-06-21T10:00:12Z

# Teamwork Project: 10 Premium Skin & Cosmetic Clinics — Banjara Hills, Hyderabad

Build 10 highly distinct, premium, long-format Next.js UI preview pages for 10 new website-less Skin & Cosmetic Clinics in Banjara Hills, Hyderabad, inside `app/client/[slug]`.

Working directory: d:\GWD\Sales Machine
Integrity mode: development

## Requirements

### R1. Develop 10 Distinct UI Pages
Create the Next.js `page.jsx` and `layout.jsx` files for 10 real-world skin & cosmetic clinics in Banjara Hills. Each page must be highly polished, visually premium, and completely functional on the client side. Use different design systems (Glassmorphism, Neumorphism, Light Mode, etc.) using Tailwind CSS classes. No generic templates allowed. **STRICTLY NO DARK MODE on any page whatsoever. All pages must use Light Mode, bright pastels, or clean whitespace aesthetics.**

### R2. Long Format Content Sections (7-9 sections minimum per page)
Each page MUST include all of the following sections:
1. **Hero Section** — Large headline, tagline, engaging hero visual with gradient backgrounds (NO dark colors), primary CTA button linking to appointment form section.
2. **Stats Bar** — 3-4 achievement metrics (e.g., Years of Experience, Happy Patients, Successful Treatments, Certified Dermatologists).
3. **Founder / Head Doctor Bio** — Introduces the lead dermatologist (real name and credentials from crawled data), their philosophy, and qualifications.
4. **Treatments & Services Selector** — Client-side interactive widget: users can select different treatment categories (Acne, Anti-Aging, Laser, Hair Transplant) and view specific treatment options, expected sessions, and custom price ranges.
5. **Interactive Skin Assessment Questionnaire** — A mini client-side questionnaire (3-4 questions) that dynamically recommends a treatment category based on user answers.
6. **Results / Before & After Showcase** — A visual gallery showing mock results/case studies.
7. **Patient Testimonials** — 3-4 review cards with star ratings, patient names, and authentic-sounding feedback specific to Banjara Hills families.
8. **Appointment Booking / Enquiry Form** — Full form with: Child/Adult Name, Phone, Email, Preferred Date, Treatment Interest (dropdown), Preferred Doctor. Include real-time validation. On successful submission show a confirmation card with a reference number.
9. **Clinic Location & Hours Footer** — Detailed contact info (real phone number, address, and email from crawled data), operating hours, and an embedded maps placeholder.

### R3. Visual Excellence & Responsiveness
All pages must be fully mobile responsive with no horizontal overflow. Typography must pair elegant display fonts with readable body faces. Vector-based icons (Lucide) must be used instead of emojis. Active tap feedback must be implemented for all buttons and tabs.

---

## Clinics to Build & Design Systems

### 1. Saanvi's Laser Skin & Hair Clinic
* **Slug:** `saanvis-laser-skin-clinic-banjara-hills`
* **Lead Doctor:** Dr. G.S.S. Sandeep (MBBS, MD (Dermatology, Venereology & Leprosy))
* **Phone:** +91 9848230000
* **Address:** 6-3-252/3, EAPL Ascent, Opp: Bank of Bahrain & Kuwait, Irram Manzil Colony, Banjara Hills, Hyderabad, Telangana 500082
* **Treatments:** PRP hair therapy, Laser skin resurfacing, Chemical peels
* **Design System:** **Joyful Pastel Coral** — primary peach/coral (#FFA07A) accents, soft rounded shapes, bubbly clean Nunito font.

### 2. Beauty World Cosmetic & Skin Clinic
* **Slug:** `beauty-world-skin-clinic-banjara-hills`
* **Lead Doctor:** Dr. Amarnath Patil (MBBS, MD)
* **Phone:** +91 9849015093
* **Address:** Opposite Kotak Mahindra Bank, Road No. 1, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Botox & fillers, Laser hair reduction, Chemical peels
* **Design System:** **Luxury Gold & Pearl** — primary champagne/gold (#D4AF37), luxury serif display typography (Playfair Display), elegant light cream backgrounds (#FDFBF7), premium high-end spa aesthetic.

### 3. Transform Skin & Cosmetic Clinic
* **Slug:** `transform-skin-clinic-banjara-hills`
* **Lead Doctor:** Dr. Madhuri T J (MBBS, DVL)
* **Phone:** +91 9032799498
* **Address:** Flora Apartment, No. 3, Near Almond House, Opposite SBH Mufakkam Jah College, Road No. 3, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Pigmentation treatment, Laser scar revision, Anti-aging therapy
* **Design System:** **Clean Medical Mint** — primary soft mint (#10B981), high contrast clinical clean layout, sans-serif (Inter/Plus Jakarta Sans), pure white backgrounds.

### 4. Riyaanz Aesthetic
* **Slug:** `riyaanz-aesthetic-banjara-hills`
* **Lead Doctor:** Dr. Namitha (Cosmetologist)
* **Phone:** +91 9989174576
* **Address:** Flat No. 102, 8-2-686/C/6/5, Road Number 12, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Laser hair removal, Weight loss treatment, Skin tightening
* **Design System:** **Lavender Glassmorphism** — soft lavender/violet (#A78BFA) frosted white cards, subtle blur backdrop, chic Outfit font.

### 5. Dr. Ramesh's Dermatique
* **Slug:** `dr-rameshs-dermatique-banjara-hills`
* **Lead Doctor:** Dr. Ramesh Vishwanath (Dermatologist)
* **Phone:** +91 8500302333
* **Address:** #283, MLA Colony, Road No. 12, Above Subway Cafe, Beside Omega Hospital, Banjara Hills, Hyderabad - 500028
* **Treatments:** Advanced laser therapy, Hair restoration, Skin rejuvenation
* **Design System:** **Terracotta Organic Warmth** — warm sandy backgrounds (#FDF6F0), terracotta primary (#C05621), warm editorial typography (Merriweather display + Open Sans body).

### 6. Dr. Phanisri Skin Clinic
* **Slug:** `dr-phanisri-skin-clinic-banjara-hills`
* **Lead Doctor:** Dr. Phanisri J. (Dermatologist)
* **Phone:** +91 9133481234
* **Address:** #8-2-601/J, Plot No. 157, Road No. 10, Banjara Hills, Hyderabad - 500034
* **Treatments:** Acne scar revision, Laser resurfacing, Anti-aging procedures
* **Design System:** **Fresh Orchid Violet** — primary soft violet (#8B5CF6), modern card layouts with glassmorphic borders, sans-serif (Plus Jakarta Sans).

### 7. Shayas Cosmetic Clinic
* **Slug:** `shayas-cosmetic-clinic-banjara-hills`
* **Lead Doctor:** Dr. Meghana (Dermatologist)
* **Phone:** +91 4066833447
* **Address:** Flat no-303, 'A' block, Maheshwari Tower, Road no-1, Banjara Hills, Hyderabad - 500034
* **Treatments:** Laser hair reduction, Skin whitening, Chemical peels
* **Design System:** **Champagne Premium** — soft warm beige backgrounds (#F5F5F0), thin elegant borders, serif typography, platinum premium luxury.

### 8. JDs Clinic
* **Slug:** `jds-clinic-banjara-hills`
* **Lead Doctor:** Dr. Aparna Krishnappa (MBBS, MD - DVL)
* **Phone:** +91 9855155123
* **Address:** Ground Floor G3, Ashoka Capitol, Road No. 2, Banjara Hills, Hyderabad, Telangana 500034
* **Treatments:** Aesthetic dermatology, Lasers & peels, Hair transplant
* **Design System:** **Sky Blue Wellness** — soft sky blue (#0EA5E9), pure clean white layout, friendly rounded buttons, sans-serif (Inter).

### 9. Reva Health & Skin
* **Slug:** `reva-health-skin-clinic-banjara-hills`
* **Lead Doctor:** Dr. Rashmi Shetty (Dermatologist)
* **Phone:** +91 4044544335
* **Address:** 3rd Floor, Merchant Tower, Road No. 4, Banjara Hills, Hyderabad (Above Origins)
* **Treatments:** Celebrity skincare, Ultherapy skin lifting, Laser rejuvenation
* **Design System:** **Rose Gold Neumorphism** — soft rose/peach tint (#FFF5F5), neumorphic inset and outset shadows, modern elegant typography (Outfit).

### 10. Dermatrendz Skin Care Centre
* **Slug:** `dermatrendz-skin-care-centre-jubilee-hills`
* **Lead Doctor:** Dr. V K Somani (MBBS, MD (Dermatology))
* **Phone:** +91 9966344442
* **Address:** 1st Floor, Plot 17-A, Journalist Colony, Jubilee Hills, Hyderabad, Telangana - 500033
* **Treatments:** Medical dermatology, Trichology & hair care, Acne & allergy treatments
* **Design System:** **Sage Green Minimalist** — earthy sage green (#6BAA75) accents, warm cream backgrounds (#FEFAE0), warm serif + sans pairing (Merriweather + Open Sans).

---

## Technical Requirements
- Use `"use client"` directive at the top of every `page.jsx`.
- Function names in `page.jsx` and `layout.jsx` must be single CamelCase identifiers (no spaces). E.g., `SaanvisLaserSkinClinicPage`, `BeautyWorldSkinClinicPage`, `TransformSkinClinicPage`.
- Use **Lucide React** icons only. No emoji used as structural icons.
- All images: use real Unsplash URLs with `?auto=format&fit=crop&q=80&w=800` parameters.
- Interactive Fee/Treatment Estimator: use `useState` to track selected category and render specific treatments dynamically.
- Form validation must be handled on the client side with custom error messages and visual feedback.

## Acceptance Criteria

### Compilation & Routing
- [ ] All 10 page routes compile under `npm run build` with zero errors.
- [ ] Direct URLs `https://yourgwd.vercel.app/client/[slug]` correctly resolve and load.

### Visual Quality & UX
- [ ] All 10 pages feature mobile responsive layouts with no horizontal overflow.
- [ ] No dark mode is used on any page.
- [ ] Each page uses a visually distinct color palette and styling based on its assigned design system.
- [ ] All 9 required sections are present on every page.
- [ ] Interactive treatment widgets and skin questionnaires work dynamically on the client side.
- [ ] The contact footer displays the correct authentic phone and address details.
