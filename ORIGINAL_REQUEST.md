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
