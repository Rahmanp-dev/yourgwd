## 2026-06-17T05:50:22Z
You are a frontend development subagent. Your task is to build 2 premium, highly distinct, long-format Next.js UI preview pages for Caterers & Cloud Kitchens in Uppal, Hyderabad inside the workspace `d:\GWD\Sales Machine`.

Working directory: d:\GWD\Sales Machine\.agents\worker_style_7_uppal
Identity: worker_style_7_uppal

Your targets are:
1. Lead Name: Annapurna Caterers, Slug: annapurna-caterers-uppal
2. Lead Name: Swagath Caterers, Slug: swagath-caterers-uppal

Assigned Design Style: Soft Pastel Gourmet / Rose Gold & Blush (Blush pink, rose gold, soft peach gradients, friendly rounded cards, warm inviting typography)
Palette details: Blush (#FFF0EE), Rose Gold (#B76E79), Warm White (#FFFDFD).

## Requirements
1. Strictly DO NOT use Dark Mode. Everything must be beautifully styled in light, warm, or pastel tones.
2. Build two static routes:
   - `app/client/annapurna-caterers-uppal/page.jsx` and `app/client/annapurna-caterers-uppal/layout.jsx`
   - `app/client/swagath-caterers-uppal/page.jsx` and `app/client/swagath-caterers-uppal/layout.jsx`
3. Each page.jsx must be a premium, highly distinct, long-format Next.js UI page featuring these sections:
   - Hero Header: Engaging title, taglines, immersive background gradients/colors, premium food pictures layout.
   - Brand Story/Heritage: A detailed section on their cooking legacy, hygiene standards, and chef expertise in Uppal.
   - Interactive Menu Customizer/Estimator: Client-side interactive widget. Users select event types (Wedding, Corporate, Birthday), guest count (slider or input), and menu tiers (Standard, Premium, Royal) to see custom price estimates and mock menu items.
   - Signature Dishes Grid: Grid showing cards of signature premium dishes.
   - Booking Consultation Form: A fully functional contact form with active state validations (validate phone, email, submit states, success notifications).
   - Customer Testimonials: Realistic-looking reviews from customers in Hyderabad (mentioning local places like Uppal, Gachibowli, Secunderabad).
   - Store Details Footer: Real phone, address (in Uppal, Hyderabad), and email details.
4. Each layout.jsx must configure the Next.js `metadata` object (title, description, and openGraph metadata referencing https://yourgwd.vercel.app/client/[slug]) for correct WhatsApp unfurling.
5. Pair elegant display fonts with readable body faces. Use Lucide icons instead of emojis. Active tap feedback on buttons.
6. Strictly read and apply the `ui-ux-pro-max` and `frontend-design` guidelines to implement high-quality, distinctive pages.

MANDATORY Integrity Warning:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Run local compilation/syntax checks, and verify your build.
Once complete, write your handoff report to `handoff.md` in your working directory and notify the Project Orchestrator via `send_message`.
