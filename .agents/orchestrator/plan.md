# Plan: Fix Styling & Compile Issues in Aanya Ethnic Boutique Page

## Task Assessment
- **Target File**: `app/client/aanya-ethnic-cyberabad/page.jsx`
- **Bugs/Styling Violations**:
  1. **Dark background violation**: The footer uses `bg-gray-900` and dark borders (`border-t border-gray-800`). We need to change the footer to a light mode/whitespace or soft pastel design.
  2. **Invalid Tailwind classes**: Replace invalid classes (`bg-text-rose-600`, `border-text-rose-600/20`, `from-text-rose-600/20`, `hover:bg-text-rose-600`) with correct Tailwind classes (e.g. `rose-600`, `bg-rose-600`, etc.).
  3. **Function casing**: Change the export default function name in `page.jsx` to a single PascalCase identifier, specifically `AanyaEthnicCyberabadPage`.
  4. **Compilation check**: Run `npm run build` to verify the page compiles with zero errors.

## Step-by-Step Execution Plan

### Step 1: Update metadata files
- Update `progress.md`, `plan.md`, and `BRIEFING.md` (done).
- Start heartbeat cron (done).

### Step 2: Spawn Worker to fix page.jsx
- Delegate code modifications to a `teamwork_preview_worker` agent.
- Instruct worker to:
  - Read `app/client/aanya-ethnic-cyberabad/page.jsx`.
  - Fix the function name casing of the default export to `AanyaEthnicCyberabadPage`.
  - Replace `bg-text-rose-600` with `bg-rose-600`.
  - Replace other `*-text-rose-600*` classes with valid equivalents:
    - `border-text-rose-600/20` -> `border-rose-600/20`
    - `from-text-rose-600/20` -> `from-rose-600/20`
    - `bg-text-rose-600/10` -> `bg-rose-600/10`
    - `hover:bg-text-rose-600` -> `hover:bg-rose-600`
  - Re-design the footer section to eliminate all dark backgrounds (`bg-gray-900`, `bg-gray-800`) and dark borders (`border-gray-800`), changing them to a light mode/whitespace or soft pastel design matching the theme (e.g. `bg-rose-100/50` or white background with light borders `border-rose-100`).
  - Run build command `npm run build` to verify compilation passes with zero errors.
  - Return the handoff report summarizing the modifications and verification command outputs.

### Step 3: Monitor Worker & Review Handoff
- Check worker progress.
- Once completed, review the handoff and verify the build passed.
- Present final report to user.
