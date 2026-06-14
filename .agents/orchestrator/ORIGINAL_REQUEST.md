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

## 2026-06-14T11:44:54+05:30

# Project Completion Request
1. R1 is already complete (leads are already injected in MongoDB).
2. Spawn parallel worker subagents (up to 5) to generate 10 distinct, premium LONG-FORMAT Next.js UI preview pages inside `app/client/[slug]`. The slugs are:
   - mohammad-ibrahim-co-ca
   - suneel-phani-associates
   - maximum-tax-consultant
   - shiv-kumar-mididoddi-tax
   - spr-associates
   - k-praveen-kumar-associates
   - sai-reddy-yanala-ca
   - y-tax-consultancy
   - kasula-associates
   - ns-co
   Ensure each page is LONG FORMAT, with multiple sections like Hero, Services, About Us, Testimonials, CTA, Footer. Use distinct premium design systems (e.g. Glassmorphism, Neumorphism, Dark Mode, etc.) styled with Tailwind CSS, strictly reading and applying the `ui-ux-pro-max` skill. No generic templates allowed.
3. Verify the Next.js builds. Running `npm run build` must succeed with zero errors.
4. Commit all new files to git and push them to the `main` branch on GitHub.
