# Project: Tolichowki Healthtech/Clinic Sales Machine

## Architecture
- **Target Discovery**: Search/gather 10 real Healthtech or local outpatient clinics in Tolichowki, Hyderabad that have no website (only Justdial/Google Maps presence).
- **Database Injection**: Insert/sync the 10 leads directly to MongoDB database using Mongoose (`models/Lead.js` schema).
- **Next.js Frontends**: Code 10 unique Next.js client pages under `app/client/[lead-slug]/page.jsx`.
- **E2E Testing**: Verify Next.js compilation, routing, and database records.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Target Discovery & Niche Verification | Search, verify, and identify 10 real clinic targets in Tolichowki, Hyderabad. | None | PLANNED |
| 2 | MongoDB Schema & Database Integration | Populate Mongoose Lead model and push to MongoDB. | M1 | PLANNED |
| 3 | Bespoke Next.js Frontend Development | Code 10 completely unique client pages under `app/client/`. | M1, M2 | PLANNED |
| 4 | E2E Integration and Compilation | Verify Next.js compilation, page routes, and database contents. | M3 | PLANNED |
| 5 | Forensic Audit and Final Synthesis | Run challenger and forensic audits, verify integrity. | M4 | PLANNED |

## Interface Contracts
### MongoDB Schema Fields (Mongoose)
- `id`: Unique string ID (e.g. `LEAD-TOLICHOWKI-xxx`)
- `name`: Clinic name (e.g. `Tolichowki Clinic`)
- `city`: `"Tolichowki, Hyderabad"`
- `niche`: Specialty clinic niche
- `websiteQuality`: Audit description
- `whatsappMessage`: Contact copy with custom preview URL
- `previewUrl`: `/client/[lead-slug]`
- `status`: `'New'` or `'Ready to Contact'`
- `workDate`: Date string

### Next.js Frontend Pages
- Component: `app/client/[lead-slug]/page.jsx`
- Layout: Standalone Next.js client-side component (using `"use client"` and Lucide icons).
- Styling: Inline style attribute object, unique visual layout and color palette (minimum 4 hex tokens).
