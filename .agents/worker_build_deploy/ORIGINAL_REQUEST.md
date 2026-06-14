## 2026-06-14T06:21:50Z
Your role: Build & Deploy Worker
Your working directory is: d:\GWD\Sales Machine\.agents\worker_build_deploy
Your task is to:
1. Clean Next.js compilation cache: remove `.next` folder if necessary.
2. Run build verification: execute `npm run build` on the workspace and verify that it compiles successfully with zero errors. Ensure that all the new routes under `app/client/[slug]` compile fine.
3. Check git status to see all modified/untracked files.
4. Commit all newly generated files and modified files to git.
5. Push the committed changes to the `main` branch on GitHub.
6. Verify the push was successful and report the complete output logs and build results back to the orchestrator.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
