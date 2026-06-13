## 2026-06-13T05:16:40Z
You are teamwork_preview_worker. Your working directory for coordination files is d:\GWD\Sales Machine\.agents\teamwork_worker_e2e.

Your task is to write a robust E2E test script scripts/verify_implementation.js that checks all acceptance criteria from ORIGINAL_REQUEST.md.
Specifically, the script should:
1. Connect to MongoDB using mongoose (reading MONGODB_URI from .env).
2. Query leads from the Leads collection (using the schema in models/Lead.js) where city matches "Tolichowki, Hyderabad".
3. Verify that:
   - There are exactly 10 leads matching "Tolichowki, Hyderabad".
   - All 10 leads have populated fields: id, name, city, niche, websiteQuality, whatsappMessage, and previewUrl.
   - The whatsappMessage contains a link to their custom preview URL (which must end with the slug, e.g. /client/deccan-clinic-diagnostics).
4. Read the directory structure of app/client/ and verify that:
   - There are 10 new, unique directories under app/client/ corresponding to the 10 lead slugs.
   - Each directory contains a page.jsx file.
5. Parse the page.jsx files or inspect them to verify that:
   - No two pages share the exact same color palette (each must contain at least 4 distinct hex tokens, and they shouldn't be identical).
   - They have different layout structures (e.g. comparing structural components, classes, or patterns to verify they feel custom-designed).
6. Try running the Next.js build compiler (npm run build) and verify it compiles with zero routing/compilation errors.

The worker must write the test script and then create the TEST_READY.md and TEST_INFRA.md at the project root documenting:
- How to run the test script (e.g., node scripts/verify_implementation.js).
- The feature checklist and coverage summary following the E2E Testing Track rules in PROJECT.md.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Once the E2E test script and the markdown documentation files are created, send a message to the caller (d30ff740-e2e7-4089-8f0f-2c86fb6831f3) with the paths to the files. Do not write any website frontend client pages yet.
