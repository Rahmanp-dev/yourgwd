# Plan: Tolichowki Skin & Cosmetic Clinics Preview Pages

## Task Assessment
- **Scope**: Multi-file, 20 distinct premium pages under `app/client/[slug]`. High-volume, highly stylized, long-format content.
- **Restrictions**: Strictly Light Mode (NO dark mode). No emojis (use Lucide icons instead).
- **Risk**: Next.js build compilation failure if files have syntax/import errors. Duplicate code or clashing designs.
- **Complexity**: High, requiring unique premium designs, interactive treatment estimators, responsive contact forms, testimonials, and layout metadata.

## Step-by-Step Execution Plan

### Step 1: Initial Setup
- Overwrite `plan.md`, `progress.md`, and `BRIEFING.md` in `.agents/orchestrator/` to reflect the new mission.
- Establish global tracking in `PROJECT.md` with the 20 slugs and their design styles.
- Start a recurring heartbeat cron (every 10 minutes) for monitoring.

### Step 2: Parallel Delegate Execution
- Spawn 10 parallel worker subagents using `teamwork_preview_worker` with `ui-ux-pro-max` and `frontend-design` skills.
- Each subagent handles 2 clinics sharing the same visual style, ensuring no overlap or duplicate templates.
- Each subagent will:
  - Read instructions, `PROJECT.md`, and skills.
  - Create directories for the 2 slugs inside `app/client/`.
  - Implement a fully mobile-responsive, strictly light-mode `page.jsx` with Hero, About/Clinic Expertise, Interactive Treatment Estimator (price calculator), Services Grid, Booking Form (with active state validation), Testimonials, and Footer.
  - Implement a `layout.jsx` for OpenGraph metadata (rich WhatsApp unfurling).
  - Use vector-based Lucide icons (no emojis).
  - Use real phone numbers from the lead discovery data and realistic Tolichowki addresses.
  - Verify syntax and run a build check.
  - Deliver a completion report with paths to files.

### Step 3: Monitor & Track
- Periodically check subagent progress via `progress.md` updates.
- Handle failures or timeouts using the retry/replace workflow.

### Step 4: Aggregate & Verification
- Verify that `npm run build` succeeds with zero errors across all 20 pages.
- Review responsive designs and ensure no dark mode is present on any page.

### Step 5: Report Results
- Synthesize all outcomes into `.agents/orchestrator/handoff.md` and notify the main agent.

---

## Subagent Allocation Matrix

| Subagent ID | Workspace Dir | Style | Target Slugs |
|-------------|---------------|-------|--------------|
| worker_style_1 | `.agents/worker_style_1` | Glassmorphism Light / Frosted Translucent | `dermed-clinic-tolichowki`, `afaq-laser-cosmetic-clinic` |
| worker_style_2 | `.agents/worker_style_2` | Neumorphic Clean / Soft Dermatology | `celestee-skin-clinic-tolichowki`, `ambrosia-clinic-tolichowki` |
| worker_style_3 | `.agents/worker_style_3` | Luxury Classic Gold & Cream | `cura-skin-hair-clinic`, `eternelle-aesthetics-tolichowki` |
| worker_style_4 | `.agents/worker_style_4` | Soft Pastel Blush & Rose | `oliva-skin-clinic-tolichowki`, `kaya-skin-clinic-tolichowki` |
| worker_style_5 | `.agents/worker_style_5` | Modern Bento Grid / Clean Slate | `clear-skin-centre-tolichowki`, `sree-skin-care-clinic-tolichowki` |
| worker_style_6 | `.agents/worker_style_6` | Organic Wellness Green / Sage & Forest | `radiance-skin-clinic-tolichowki`, `dr-nivedita-dadu-dermatology` |
| worker_style_7 | `.agents/worker_style_7` | Minimalist High-Contrast Chic | `dermaclinix-hyderabad-tolichowki`, `elite-skin-hair-clinic-tolichowki` |
| worker_style_8 | `.agents/worker_style_8` | Futuristic Pearl / Cyber-Metallic | `vcare-skin-hair-clinic-tolichowki`, `labelle-skin-hair-clinic-tolichowki` |
| worker_style_9 | `.agents/worker_style_9` | Bold Retro / Warm Clay & Terracotta | `kosmoderma-skin-clinic-tolichowki`, `skinns-clinic-tolichowki` |
| worker_style_10| `.agents/worker_style_10`| Luxury Orchid & Plum | `rejuve-skin-hair-clinic-tolichowki`, `flawless-skin-laser-clinic-tolichowki` |
