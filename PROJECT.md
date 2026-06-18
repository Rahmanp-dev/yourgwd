# Project: Hyderabad Jewellery Stores Preview Pages

## Architecture
- 20 independent premium Next.js client pages under `app/client/[slug]`.
- We use static folders under `app/client/` for each store (e.g. `app/client/tibarumal-sons-shaikpet/`) rather than the dynamic `[slug]/` catch-all directory to avoid parallel subagents overwriting each other.
- Each page features unique styling, elegant typography matching its brand style, and fully responsive layout.
- Utilizes Next.js App Router metadata for OpenGraph WhatsApp unfurling.

## Milestones
| # | Name | Scope | Dependencies | Status | Conversation ID | Folder Paths |
|---|------|-------|-------------|--------|-----------------|--------------|
| 1 | Glassmorphism | tibarumal-sons-shaikpet, tibarumal-ramnivas-jubilee-hills | None | DONE | 22750463-78da-4313-96b1-7355330d298a | `app/client/tibarumal-sons-shaikpet/`, `app/client/tibarumal-ramnivas-jubilee-hills/` |
| 2 | Royal Heritage | darpan-mangatrai-pearls, krishna-pearls-jewellers | None | IN_PROGRESS | f24ea13f-b8f4-4c0f-be8a-2c25e2efe943 | `app/client/darpan-mangatrai-pearls/`, `app/client/krishna-pearls-jewellers/` |
| 3 | Minimalist | sri-jagdamba-pearls, suhani-pittie-banjara-hills | None | IN_PROGRESS | 45969096-b344-4dea-afb5-163650cb59c6 | `app/client/sri-jagdamba-pearls/`, `app/client/suhani-pittie-banjara-hills/` |
| 4 | Dark Diamond | pmj-jewels-banjara-hills, vasundhara-diamond-roof | None | DONE | 1dc06e35-8057-482f-8b4c-5874acbad79c | `app/client/pmj-jewels-banjara-hills/`, `app/client/vasundhara-diamond-roof/` |
| 5 | Classic Elegance | manepally-jewellers-general-bazar, sri-krishna-jewellers-banjara-hills | None | IN_PROGRESS | e583e93d-c95c-4bf1-9938-49c413a39091 | `app/client/manepally-jewellers-general-bazar/`, `app/client/sri-krishna-jewellers-banjara-hills/` |
| 6 | Neumorphic | totaram-sons-jewellers-abids, totaram-murarilal-sons | None | IN_PROGRESS | bd8d7677-6690-4859-aff1-239d4ed362c5 | `app/client/totaram-sons-jewellers-abids/`, `app/client/totaram-murarilal-sons/` |
| 7 | Soft Pastel | meena-jewellers-banjara-hills, musaddilal-jewellers-basheer-bagh | None | DONE | e1309a27-acf6-4a71-9eab-95eaa3f7127b | `app/client/meena-jewellers-banjara-hills/`, `app/client/musaddilal-jewellers-basheer-bagh/` |
| 8 | Cyber-Platinum | ghanshyamdas-jewellers-abids, modi-pearls-original | None | IN_PROGRESS | d172eb0c-94e1-4a30-99cc-ae8258034feb | `app/client/ghanshyamdas-jewellers-abids/`, `app/client/modi-pearls-original/` |
| 9 | Biophilic Sage | akoya-pearls-ghanshyamdas, suraj-bhan-jewellers | None | DONE | 77f9f667-c08d-44c9-8643-f44db3392090 | `app/client/akoya-pearls-ghanshyamdas/`, `app/client/suraj-bhan-jewellers/` |
| 10| Bold Art Deco | gopal-jewellers-moula-ali, neelkanth-jewellers-somajiguda | None | IN_PROGRESS | 496f5caa-a556-431e-b773-04cdb5187a52 | `app/client/gopal-jewellers-moula-ali/`, `app/client/neelkanth-jewellers-somajiguda/` |

## Interface Contracts
### app/client/[slug] Structure
- Each folder contains:
  - `page.jsx`: Exports main client-side component (using `"use client"`). Includes Hero, Brand Heritage, Customizer, Signature Grid, Virtual Consultation Form, Testimonials, Footer.
  - `layout.jsx`: Exports OpenGraph metadata for rich WhatsApp unfurling.
