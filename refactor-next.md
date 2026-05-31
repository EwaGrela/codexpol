---
description: Pick up the next item from REFACTOR.md (or a specified item #) and work it end-to-end
argument-hint: "(optional) backlog item number, e.g. 2"
allowed-tools: Read, Edit, Bash(npm:*), Bash(git:*), Bash(grep:*), Bash(find:*), Bash(du:*)
model: claude-sonnet-4-6
---

Work a backlog item from `REFACTOR.md`.

1. Read `REFACTOR.md`. If `$ARGUMENTS` names an item number, take that one;
   otherwise take the highest-priority unfinished item (P0 before P1, etc.).
2. State which item you're doing and your plan in 2–3 lines before editing.
3. Implement it, following `CLAUDE.md` and `docs/CONVENTIONS.md`. Respect the
   asset policy (verify-before-delete, cross-check `IDEAS.md`, move planned art
   out of `src` rather than deleting).
4. Verify: run `npm run lint` and `npm run build`; run `npm test` if present.
5. Update `REFACTOR.md` to mark the item done.
6. Summarize what changed and propose the next item — but stop and let the user
   decide before starting it.

For destructive steps (deleting/moving files), show the exact list and ask for
confirmation first.
