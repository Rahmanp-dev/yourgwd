# Plan: Tolichowki Preschool Preview Pages

## Task Assessment
- **Scope**: Multi-file, 10 distinct premium preschool UI pages under `app/client/[slug]`.
- **Restrictions**: Strictly Light Mode (NO dark mode). No emojis (use Lucide icons instead).
- **Risk**: Next.js build compilation failure if syntax or component setup is incorrect.
- **Complexity**: High, requiring distinct light-mode designs, interactive fee estimators, responsive admission forms, and OpenGraph layout metadata.

## Step-by-Step Execution Plan

### Step 1: Initial Setup
- Overwrite `plan.md`, `progress.md`, and `BRIEFING.md` in `.agents/orchestrator/` to reflect the new mission.
- Establish global tracking in `PROJECT.md` with the 10 slugs and their design styles.
- Start a recurring heartbeat cron (every 10 minutes) for monitoring.

### Step 2: Parallel Delegate Execution
- Spawn 5 parallel worker subagents using `teamwork_preview_worker` with `ui-ux-pro-max` and `frontend-design` skills.
- Each subagent handles 2 pre-schools sharing unique visual styles.
- Each subagent will:
  - Read instructions, `PROJECT.md`, and skills.
  - Create directories for the 2 slugs inside `app/client/`.
  - Implement a fully mobile-responsive, strictly light-mode `page.jsx` with the 9 required sections.
  - Implement a `layout.jsx` for OpenGraph metadata (rich WhatsApp unfurling) with single CamelCase layout function name.
  - Use vector-based Lucide icons (no emojis).
  - Use realistic Tolichowki addresses and contact info.
  - Verify syntax and run a build check.
  - Deliver a completion report with paths to files.

### Step 3: Monitor & Track
- Periodically check subagent progress via `progress.md` updates.
- Handle failures or timeouts using the retry/replace workflow.

### Step 4: Aggregate & Verification
- Verify that `npm run build` succeeds with zero errors across all 10 pages.
- Review responsive designs and ensure no dark mode is present on any page.

### Step 5: Report Results
- Synthesize all outcomes into `.agents/orchestrator/handoff.md` and notify the main agent.

---

## Subagent Allocation Matrix

| Subagent ID | Workspace Dir | Style | Target Slugs |
|-------------|---------------|-------|--------------|
| worker_preschool_1 | `.agents/worker_preschool_1` | Cheerful Glassmorphism & Fresh Neumorphism | `bachpan-play-school-tolichowki`, `kidzee-tolichowki` |
| worker_preschool_2 | `.agents/worker_preschool_2` | Sunshine Flat & Sky Blue Minimal | `little-millennium-tolichowki`, `eurokids-tolichowki` |
| worker_preschool_3 | `.agents/worker_preschool_3` | Nature Green & Luxury Pearl | `kangaroo-kids-tolichowki`, `orchids-international-school-tolichowki` |
| worker_preschool_4 | `.agents/worker_preschool_4` | Tech Bright & Canadian Warmth | `stem-kids-preschool-tolichowki`, `maple-bear-preschool-tolichowki` |
| worker_preschool_5 | `.agents/worker_preschool_5` | Pastel Rainbow & Terracotta Warmth | `little-elly-preschool-tolichowki`, `footprints-play-school-tolichowki` |
