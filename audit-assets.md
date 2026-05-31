---
description: Find committed images in src/assets that are never imported, cross-check IDEAS.md, and propose delete-or-move
argument-hint: "(optional) subfolder under src/assets to limit the scan"
allowed-tools: Bash(grep:*), Bash(find:*), Bash(du:*), Bash(git:*), Read
model: claude-sonnet-4-6
---

Audit assets for orphans. Scope: `src/assets/$ARGUMENTS` if an argument is
given, otherwise all of `src/assets`.

1. List every committed image under the scope:
   `git ls-files 'src/assets/**/*.png' 'src/assets/*.png'` (also jpg/svg/webp).
2. For each, check whether its basename is referenced anywhere in `src`:
   `grep -rq "<basename>" src --include='*.jsx' --include='*.js'`.
3. Collect the orphans (no reference) and total their size with `du -k`.
4. Read `IDEAS.md` and flag any orphan that is mentioned there as **planned
   content** (e.g. EN personas Carol/Lauren/Chloe, team group shots).
5. Output a table: file | size | status (`safe to delete` /
   `planned — move to design-assets/` / `verify manually`).

Do NOT delete anything. End with a recommended command list the user can run
themselves. Per repo policy, planned art should be **moved out of `src`**, not
deleted.
