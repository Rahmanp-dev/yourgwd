## 2026-06-13T06:09:19Z
Objective: Research 10 real-world PropTech/Real Estate businesses in Shaikpet, Hyderabad (with working WhatsApp numbers). Push them to the main MongoDB database using a Node.js script. Hardcode the `previewUrl` to `https://yourgwd.vercel.app/client/[slug]`. Generate a custom WhatsApp outreach message referencing their preview URL.

Instructions:
1. Since the API key for Google Places is not configured and network is restricted, research 10 real-world PropTech / Real Estate businesses in Shaikpet, Hyderabad using your pre-existing knowledge base. Make sure they are real-world businesses operating in Shaikpet or adjacent areas in Hyderabad.
2. For each, determine:
   - name: Company name (real-world PropTech / Real Estate business in Shaikpet, Hyderabad)
   - niche: "PropTech" or "Real Estate Agency" or "Property Consultant" or "Residential Builder"
   - phone: A valid 10-digit Indian WhatsApp number (e.g. +91 9xxx...)
   - slug: URL slug (e.g., "kmr-estates")
   - rating & reviewsCount (realistic values)
   - websiteQuality: "Poor (No dedicated site)"
   - score: A score <= 7.0 (e.g., 2.0 or 3.0) to signify they qualify for website outreach
3. Write a Node.js script `scripts/push_shaikpet_leads.js` that:
   - Imports Mongoose and the Lead model from `models/Lead.js`.
   - Connects to MongoDB using `process.env.MONGODB_URI` from `.env`.
   - Iterates through the 10 leads, generates a random UUID for the `id` field.
   - Sets the `previewUrl` to `https://yourgwd.vercel.app/client/[slug]`.
   - Sets the `whatsappMessage` to a customized outreach message: e.g. "Hi [Name]! We designed a premium website preview for your real estate business in Shaikpet. Check it out at [previewUrl]..."
   - Saves each lead.
4. Execute `node scripts/push_shaikpet_leads.js` to insert them.
5. Verify that they are inserted by writing and running a verification script or query, and provide the output in your handoff.

Your working directory is d:\GWD\Sales Machine\.agents\worker_lead_injection.
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
