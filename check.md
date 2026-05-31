---
description: Pre-commit/PR sanity pass — lint, build, locale parity, asset check, and a change summary
allowed-tools: Bash(npm:*), Bash(git:*), Bash(grep:*), Bash(find:*), Read
model: claude-sonnet-4-6
---

Run a sanity pass before committing or opening a PR. Report each as
pass/fail/skipped; don't fix things unless asked.

1. **Lint:** `npm run lint`.
2. **Build:** `npm run build` (must succeed).
3. **Tests:** `npm test` if a test script exists; otherwise note it's not set
   up yet.
4. **Locale parity:** confirm `pl.json` and `en.json` have matching key sets
   (same check as `/i18n-check`).
5. **No stray heavy assets:** flag any newly added image over ~500 KB in the
   diff (`git diff --stat` / `git status`).
6. **No banned commits:** ensure `dist/` and `node_modules/` aren't staged.

Finish with a short summary of `git status` and a one-paragraph description of
what changed, suitable as a commit/PR message.
