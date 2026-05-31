---
description: Wire up Playwright (config + npm script) and generate smoke tests that load every route
allowed-tools: Read, Edit, Bash(npm:*), Bash(npx:*), Bash(ls:*), Bash(cat:*)
model: claude-sonnet-4-6
---

Set up the test safety net (backlog items #4 and #5). Playwright is already in
devDependencies; it just isn't configured.

1. Read the route table in `src/App.jsx` and extract every path.
2. Create `playwright.config.js` configured to run against the Vite preview/dev
   server (use `webServer` to boot `npm run dev` or `npm run preview`).
3. Add a `"test": "playwright test"` script to `package.json`.
4. Create `tests/smoke.spec.js` that, for each route:
   - navigates to it,
   - asserts the page mounts and a heading/`<main>` is visible,
   - asserts no uncaught console errors.
   Add one test that toggles PL↔EN via the Nav button and asserts visible text
   changes.
5. Run `npm test` and report results. If Playwright browsers aren't installed,
   tell the user to run `npx playwright install`.

Keep tests minimal and fast — this is a smoke net, not exhaustive coverage.
