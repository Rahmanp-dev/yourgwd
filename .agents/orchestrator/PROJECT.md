# Project: Banjara Hills Skin Clinic Preview Pages (New Batch)

## Architecture
- **Next.js Frontends**: Code 10 premium skin & cosmetic clinic pages under `app/client/[slug]/page.jsx` and `layout.jsx`.
- **Static Folders**: We use static folders under `app/client/` for each clinic to avoid parallel subagents overwriting each other's work and allow parallel builds.
- **Rules**:
  - Strictly Light Mode (NO dark mode on any page whatsoever. All pages must use Light Mode, bright pastels, or clean whitespace aesthetics).
  - No emojis as structural icons (use Lucide React icons).
  - Fully mobile responsive with zero horizontal overflow.
  - Function names in `page.jsx` and `layout.jsx` must be single CamelCase identifiers (e.g., `SaanvisLaserSkinClinicPage`, `SaanvisLaserSkinClinicLayout`).
  - Next.js page components must start with `"use client"` directive.
  - Realistic local data for contact info (doctor name, phone, address).
  - High quality Unsplash URLs with `?auto=format&fit=crop&q=80&w=800` parameters.

## Milestones
| # | Name | Scope | Dependencies | Status | Subagent ID | Folder Paths |
|---|------|-------|-------------|--------|-------------|--------------|
| 1 | UI Generation (Clinic 1 & 2) | saanvis-laser-skin-clinic-banjara-hills, beauty-world-skin-clinic-banjara-hills | None | DONE | 272cf5aa-423d-4adc-b60b-b5ab2743aa6a | `app/client/saanvis-laser-skin-clinic-banjara-hills/`, `app/client/beauty-world-skin-clinic-banjara-hills/` |
| 2 | UI Generation (Clinic 3 & 4) | transform-skin-clinic-banjara-hills, riyaanz-aesthetic-banjara-hills | None | DONE | 93079bc5-8d29-414c-ada8-1ce5c31ca0b9 | `app/client/transform-skin-clinic-banjara-hills/`, `app/client/riyaanz-aesthetic-banjara-hills/` |
| 3 | UI Generation (Clinic 5 & 6) | dr-rameshs-dermatique-banjara-hills, dr-phanisri-skin-clinic-banjara-hills | None | DONE | 4b6ed5bb-242d-48e1-87c7-777c6ccef0c5 | `app/client/dr-rameshs-dermatique-banjara-hills/`, `app/client/dr-phanisri-skin-clinic-banjara-hills/` |
| 4 | UI Generation (Clinic 7 & 8) | shayas-cosmetic-clinic-banjara-hills, jds-clinic-banjara-hills | None | DONE | 3c3bb7d6-f9a7-4ee2-aa19-c61606d3bee7 | `app/client/shayas-cosmetic-clinic-banjara-hills/`, `app/client/jds-clinic-banjara-hills/` |
| 5 | UI Generation (Clinic 9 & 10) | reva-health-skin-clinic-banjara-hills, dermatrendz-skin-care-centre-jubilee-hills | None | DONE | 97b0b4e9-b859-4e69-9903-284e83eb5837 | `app/client/reva-health-skin-clinic-banjara-hills/`, `app/client/dermatrendz-skin-care-centre-jubilee-hills/` |
| 6 | Build Verification | Run `npm run build` and ensure compilation passes with zero errors. | M1, M2, M3, M4, M5 | DONE | 6351d8e4-7451-4c92-ac93-fd8c5df312d7 | Project Root |

## Required Content Sections (9 Sections per Page)
Each clinic page MUST contain exactly these 9 sections, designed dynamically using the clinic's assigned theme:
1. **Hero Section** — Large headline, tagline, engaging hero visual with light gradient backgrounds (NO dark colors), primary CTA button linking to appointment form section.
2. **Stats Bar** — 3-4 achievement metrics (e.g., Years of Experience, Happy Patients, Successful Treatments, Certified Dermatologists).
3. **Founder / Head Doctor Bio** — Introduces the lead dermatologist (real name and credentials), their philosophy, and qualifications.
4. **Treatments & Services Selector** — Client-side interactive widget: users can select different treatment categories (Acne, Anti-Aging, Laser, Hair Transplant) and view specific treatment options, expected sessions, and custom price ranges.
5. **Interactive Skin Assessment Questionnaire** — A mini client-side questionnaire (3-4 questions) that dynamically recommends a treatment category based on user answers.
6. **Results / Before & After Showcase** — A visual gallery showing mock results/case studies.
7. **Patient Testimonials** — 3-4 review cards with star ratings, patient names, and authentic-sounding feedback specific to Banjara Hills families.
8. **Appointment Booking / Enquiry Form** — Full form with: Child/Adult Name, Phone, Email, Preferred Date, Treatment Interest (dropdown), Preferred Doctor. Include real-time validation. On successful submission show a confirmation card with a reference number.
9. **Clinic Location & Hours Footer** — Detailed contact info (real phone number, address, and email from crawled data), operating hours, and an embedded maps placeholder.

---

## Slugs and Design Systems:

1. **Saanvi's Laser Skin & Hair Clinic** (`saanvis-laser-skin-clinic-banjara-hills`)
   - **Lead Doctor**: Dr. G.S.S. Sandeep (MBBS, MD (Dermatology, Venereology & Leprosy))
   - **Phone**: +91 9848230000
   - **Address**: 6-3-252/3, EAPL Ascent, Opp: Bank of Bahrain & Kuwait, Irram Manzil Colony, Banjara Hills, Hyderabad, Telangana 500082
   - **Treatments**: PRP hair therapy, Laser skin resurfacing, Chemical peels
   - **Design System**: Joyful Pastel Coral — primary peach/coral (#FFA07A) accents, soft rounded shapes, bubbly clean Nunito font.

2. **Beauty World Cosmetic & Skin Clinic** (`beauty-world-skin-clinic-banjara-hills`)
   - **Lead Doctor**: Dr. Amarnath Patil (MBBS, MD)
   - **Phone**: +91 9849015093
   - **Address**: Opposite Kotak Mahindra Bank, Road No. 1, Banjara Hills, Hyderabad, Telangana 500034
   - **Treatments**: Botox & fillers, Laser hair reduction, Chemical peels
   - **Design System**: Luxury Gold & Pearl — primary champagne/gold (#D4AF37), luxury serif display typography (Playfair Display), elegant light cream backgrounds (#FDFBF7), premium high-end spa aesthetic.

3. **Transform Skin & Cosmetic Clinic** (`transform-skin-clinic-banjara-hills`)
   - **Lead Doctor**: Dr. Madhuri T J (MBBS, DVL)
   - **Phone**: +91 9032799498
   - **Address**: Flora Apartment, No. 3, Near Almond House, Opposite SBH Mufakkam Jah College, Road No. 3, Banjara Hills, Hyderabad, Telangana 500034
   - **Treatments**: Pigmentation treatment, Laser scar revision, Anti-aging therapy
   - **Design System**: Clean Medical Mint — primary soft mint (#10B981), high contrast clinical clean layout, sans-serif (Inter/Plus Jakarta Sans), pure white backgrounds.

4. **Riyaanz Aesthetic** (`riyaanz-aesthetic-banjara-hills`)
   - **Lead Doctor**: Dr. Namitha (Cosmetologist)
   - **Phone**: +91 9989174576
   - **Address**: Flat No. 102, 8-2-686/C/6/5, Road Number 12, Banjara Hills, Hyderabad, Telangana 500034
   - **Treatments**: Laser hair removal, Weight loss treatment, Skin tightening
   - **Design System**: Lavender Glassmorphism — soft lavender/violet (#A78BFA) frosted white cards, subtle blur backdrop, chic Outfit font.

5. **Dr. Ramesh's Dermatique** (`dr-rameshs-dermatique-banjara-hills`)
   - **Lead Doctor**: Dr. Ramesh Vishwanath (Dermatologist)
   - **Phone**: +91 8500302333
   - **Address**: #283, MLA Colony, Road No. 12, Above Subway Cafe, Beside Omega Hospital, Banjara Hills, Hyderabad - 500028
   - **Treatments**: Advanced laser therapy, Hair restoration, Skin rejuvenation
   - **Design System**: Terracotta Organic Warmth — warm sandy backgrounds (#FDF6F0), terracotta primary (#C05621), warm editorial typography (Merriweather display + Open Sans body).

6. **Dr. Phanisri Skin Clinic** (`dr-phanisri-skin-clinic-banjara-hills`)
   - **Lead Doctor**: Dr. Phanisri J. (Dermatologist)
   - **Phone**: +91 9133481234
   - **Address**: #8-2-601/J, Plot No. 157, Road No. 10, Banjara Hills, Hyderabad - 500034
   - **Treatments**: Acne scar revision, Laser resurfacing, Anti-aging procedures
   - **Design System**: Fresh Orchid Violet — primary soft violet (#8B5CF6), modern card layouts with glassmorphic borders, sans-serif (Plus Jakarta Sans).

7. **Shayas Cosmetic Clinic** (`shayas-cosmetic-clinic-banjara-hills`)
   - **Lead Doctor**: Dr. Meghana (Dermatologist)
   - **Phone**: +91 4066833447
   - **Address**: Flat no-303, 'A' block, Maheshwari Tower, Road no-1, Banjara Hills, Hyderabad - 500034
   - **Treatments**: Laser hair reduction, Skin whitening, Chemical peels
   - **Design System**: Champagne Premium — soft warm beige backgrounds (#F5F5F0), thin elegant borders, serif typography, platinum premium luxury.

8. **JDs Clinic** (`jds-clinic-banjara-hills`)
   - **Lead Doctor**: Dr. Aparna Krishnappa (MBBS, MD - DVL)
   - **Phone**: +91 9855155123
   - **Address**: Ground Floor G3, Ashoka Capitol, Road No. 2, Banjara Hills, Hyderabad, Telangana 500034
   - **Treatments**: Aesthetic dermatology, Lasers & peels, Hair transplant
   - **Design System**: Sky Blue Wellness — soft sky blue (#0EA5E9), pure clean white layout, friendly rounded buttons, sans-serif (Inter).

9. **Reva Health & Skin** (`reva-health-skin-clinic-banjara-hills`)
   - **Lead Doctor**: Dr. Rashmi Shetty (Dermatologist)
   - **Phone**: +91 4044544335
   - **Address**: 3rd Floor, Merchant Tower, Road No. 4, Banjara Hills, Hyderabad (Above Origins)
   - **Treatments**: Celebrity skincare, Ultherapy skin lifting, Laser rejuvenation
   - **Design System**: Rose Gold Neumorphism — soft rose/peach tint (#FFF5F5), neumorphic inset and outset shadows, modern elegant typography (Outfit).

10. **Dermatrendz Skin Care Centre** (`dermatrendz-skin-care-centre-jubilee-hills`)
    - **Lead Doctor**: Dr. V K Somani (MBBS, MD (Dermatology))
    - **Phone**: +91 9966344442
    - **Address**: 1st Floor, Plot 17-A, Journalist Colony, Jubilee Hills, Hyderabad, Telangana - 500033
    - **Treatments**: Medical dermatology, Trichology & hair care, Acne & allergy treatments
    - **Design System**: Sage Green Minimalist — earthy sage green (#6BAA75) accents, warm cream backgrounds (#FEFAE0), warm serif + sans pairing (Merriweather + Open Sans).
