# Codexpol — Refactor Backlog

A prioritized review of the repo, written as a working backlog. Each item is
something to tackle directly; the table is roughly the order to do them in.
Effort is a rough t-shirt size; Risk is the chance of breaking something live.

**Overall health: ~6.5/10.** Solid small React/Vite marketing site with strong
content and good DRY instincts. The problems are mostly hygiene — committed
assets, missing docs, no tests — rather than architecture.

---

## Priority table

| #  | Priority | Item | Area | Effort | Risk | Why it matters |
|----|----------|------|------|--------|------|----------------|
| 1  | 🔴 P0 | Delete orphaned assets (~48 MB, 19 files) | Assets | S | Low | Half of `src/assets` is never imported. Biggest, easiest win. |
| 2  | 🔴 P0 | Optimize remaining images (WebP/AVIF + compress) | Assets | M | Low | 2–6 MB PNGs ship raw. Hurts load time and repo size. |
| 3  | 🔴 P0 | Replace stock README with a real one | Docs | S | None | Still the Vite template. No project info for humans or agents. |
| 4  | 🟠 P1 | Add a smoke test suite (Playwright is already installed) | Tests | M | None | Zero tests; refactors have no safety net. |
| 5  | 🟠 P1 | Add `npm run test` + wire Playwright config | Tooling | S | None | The dep exists but there's no script or config to run it. |
| 6  | 🟡 P2 | Lock the two locale files in sync (key-parity check) | i18n | S | Low | `pl.json`/`en.json` (443 lines each) drift by hand today. |
| 7  | 🟡 P2 | i18n + copy polish pass (per `IDEAS.md`) | Content | M | Low | Tone cleanup PL-first, then mirror EN. Tracked in IDEAS.md. |
| 8  | 🟡 P2 | Flesh out `vite.config.js` (base, build, env) | Tooling | S | Med | `VITE_API_URL`/prod config flagged unresolved in IDEAS.md. |
| 9  | 🟢 P3 | Fix `Products.jsx` mount effect deps | Code | S | Low | Empty-dep effect scrolls slider; works but is a lint smell. |
| 10 | 🟢 P3 | Decide on EN persona assets (wire up or delete) | Assets/Content | S | Low | Carol/Lauren/Chloe exist but unused; IDEAS.md is undecided. |
| 11 | 🟢 P3 | Add CLAUDE.md + .claude/ commands | Tooling | S | None | Agent guidance (separate task — see below). |

---

## Detail by item

### 1. Delete orphaned assets — 🔴 P0, ~48 MB
19 committed PNGs are never imported anywhere in `src`. Confirmed orphans:

```
src/assets/hero.png
src/assets/new_team_characters/hania_no_glasses.png
src/assets/new_team_characters/hania_whiteboard.png
src/assets/new_team_characters/mariusz_blisko.png
src/assets/new_team_characters/mariusz_face.png
src/assets/new_team_characters/tomek_ewa.png
src/assets/new_team_characters/tomek_shirt.png
src/assets/personas/brit_trio.png
src/assets/personas/british.png
src/assets/personas/british_team.png
src/assets/personas/british_team2.png
src/assets/personas/carol.png
src/assets/personas/carol2.png
src/assets/personas/chloe.png
src/assets/personas/julka.png   (julka2.png is the one in use)
src/assets/personas/lauren.png
src/assets/personas/polish.png
src/assets/personas/polish_team.png
src/assets/personas/polish_team2.png
```

> ⚠️ A few of these are *intentional future content* per `IDEAS.md`
> (EN personas Carol/Lauren/Chloe; `polish_team.png` for a possible hero/origin
> section). Decide per-file: delete now, or move to a `design-assets/` folder
> **outside** `src` so they don't ship in the bundle. Don't just blanket-delete.

How to verify before deleting any file:
```bash
grep -rq "$(basename FILE)" src --include='*.jsx' --include='*.js'
```

### 2. Optimize remaining images — 🔴 P0
Largest in-use assets are still multi-MB PNGs. Convert to WebP/AVIF and/or
compress; consider `vite-imagetools` or a build-time step so source stays clean.
Target: no shipped image over a few hundred KB unless there's a reason.

### 3. Real README — 🔴 P0
Current README is the unmodified Vite template. A useful one covers: what
Codexpol is, the route map (from `App.jsx`), the i18n model (everything lives in
`locales/*.json`, PL is source of truth), the `ProductPage`/`productKey`
pattern, and the `GameEngine` scene-graph format.

### 4 & 5. Tests — 🟠 P1
`playwright` is in devDependencies but there's no config, no test script, and no
specs. Add a minimal `playwright.config.js`, a `"test"` script, and smoke tests
that load each route and assert the page renders + language toggle works. This
is the safety net for every refactor below it.

### 6. Locale parity — 🟡 P2
`pl.json` and `en.json` are both 443 lines and kept in sync manually. Add a tiny
script (or a Playwright/unit assertion) that fails when the two key sets differ.
Cheap insurance against half-translated keys.

### 7. Copy polish — 🟡 P2
Already scoped in `IDEAS.md`: walk `pl.json` section by section for lighter
tone, then update `en.json` afterward. Content work, low technical risk.

### 8. Vite config — 🟡 P2
`vite.config.js` is bare (`react()` only). `IDEAS.md` flags `VITE_API_URL` and
prod build config as open. Add `base`, build options, and env handling before
deploy. Med risk because it touches how the app is served.

### 9. Products.jsx effect — 🟢 P3
The mount effect that sets initial slider scroll uses an empty dep array while
reading `initialIndex`. Functionally fine; tidy it (include the dep or document
the intent) when you're in the file.

### 10. EN persona assets — 🟢 P3
Tied to #1. Carol/Lauren/Chloe portraits exist for an English subpage that
isn't built. Either wire up the EN team route or move the files out of `src`.

### 11. Claude setup — 🟢 P3
`CLAUDE.md` + `.claude/` slash commands. Separate deliverable; building next.

---

## Suggested order for tomorrow

1. **#3 README** first (10 min, gives everyone — including agents — context).
2. **#4/#5 tests** next, so the rest has a safety net.
3. **#1 then #2 assets** — the big measurable win, now backed by tests.
4. Everything else as time allows, P2 → P3.

Rationale: docs and tests are zero-risk and make every later step safer and
easier to verify.
