---
description: Verify pl.json and en.json have identical key structures and report any drift
allowed-tools: Bash(node:*), Bash(python3:*), Read
model: claude-haiku-4-5
---

Check locale parity between `src/locales/pl.json` and `src/locales/en.json`.

1. Load both files and compute their full set of dotted key paths
   (recurse into nested objects; treat arrays by length).
2. Report:
   - keys present in PL but missing in EN,
   - keys present in EN but missing in PL,
   - any value that is an object/array in one file but a different shape in
     the other.
3. If everything matches, say so in one line.

PL is the source of truth: missing EN keys are the common case and should be
called out as "needs translation." Do not edit the files unless explicitly
asked — just report.
