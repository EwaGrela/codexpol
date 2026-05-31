# Codexpol — Refactor Backlog

A prioritized review of the repo, written as a working backlog. Each item is
something to tackle directly; the table is roughly the order to do them in.
Effort is a rough t-shirt size; Risk is the chance of breaking something live.

**Overall health: ~7.5/10.** P0 hygiene done: README, smoke tests, and ~80 MB of
asset cleanup. Remaining work is tests → i18n tooling → content.

---

## Priority table

| #  | Priority | Item | Area | Effort | Risk | Why it matters |
|----|----------|------|------|--------|------|----------------|
| 1  | ✅ done | Delete orphaned assets (~48 MB, 19 files) | Assets | S | Low | 12 deleted, 7 moved to `design-assets/`. |
| 2  | ✅ done | Optimize remaining images (WebP/AVIF + compress) | Assets | M | Low | All 21 in-use PNGs → WebP; portraits −94%, logos −29%. |
| 3  | ✅ done | Replace stock README with a real one | Docs | S | None | Route map, i18n model, ProductPage pattern, GameEngine format. |
| 4  | ✅ done | Add a smoke test suite (Playwright is already installed) | Tests | M | None | 19 smoke tests: all routes + PL↔EN toggle. All green. |
| 5  | ✅ done | Add `npm run test` + wire Playwright config | Tooling | S | None | `playwright.config.js` + `"test"` script added. |
| 6  | 🟡 P2 | Lock the two locale files in sync (key-parity check) | i18n | S | Low | `pl.json`/`en.json` (443 lines each) drift by hand today. |
| 7  | 🟡 P2 | i18n + copy polish pass (per `IDEAS.md`) | Content | M | Low | Tone cleanup PL-first, then mirror EN. Tracked in IDEAS.md. |
| 8  | 🟡 P2 | Flesh out `vite.config.js` (base, build, env) | Tooling | S | Med | `VITE_API_URL`/prod config flagged unresolved in IDEAS.md. |
| 9  | 🟢 P3 | Fix `Products.jsx` mount effect deps | Code | S | Low | Empty-dep effect scrolls slider; works but is a lint smell. |
| 10 | 🟢 P3 | Decide on EN persona assets (wire up or delete) | Assets/Content | S | Low | Carol/Lauren/Chloe exist but unused; IDEAS.md is undecided. |
| 11 | 🟢 P3 | Add CLAUDE.md + .claude/ commands | Tooling | S | None | Agent guidance (separate task — see below). |

---

## Detail by item

### 1. Delete orphaned assets — ✅ done
12 truly dead PNGs deleted, 7 future-content files moved to `design-assets/`
(EN personas Carol/Chloe/Lauren, polish_team.png, Hania portraits). ~48 MB out
of `src`. Commit: `chore: usuń osierozone assety z src`.

### 2. Optimize remaining images — ✅ done
All 21 in-use PNGs converted to WebP using Pillow. Team portraits: ~2 MB →
~130 KB each (−94%). Product logos: lossless WebP, −29%. ~33 MB saved.
Imports updated in 17 JSX files. Commit: `perf: konwertuj wszystkie obrazy PNG → WebP`.

### 3. Real README — ✅ done
README replaced with full project docs: stack, route map, i18n model,
ProductPage/productKey pattern, GameEngine scene-graph format.
Commit: `docs: zastąp szablon Vite prawdziwym README projektu`.

### 4 & 5. Tests — ✅ done
`playwright.config.js` added with `webServer` boot. `tests/smoke.spec.js` has
19 tests: every route renders without JS errors + PL↔EN toggle. `"test"` script
added to `package.json`. All 19 green. Commit: `test: dodaj smoke testy Playwright`.

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
Tied to #1. Carol/Lauren/Chloe portraits moved to `design-assets/personas/`.
Either wire up the EN team route or delete them when the decision is made.

### 11. Claude setup — 🟢 P3
`CLAUDE.md` + `.claude/` slash commands. Separate deliverable; building next.

---

## Suggested order for next session

1. **#6 locale parity** — cheap script, instant safety net for i18n work.
2. **#7 copy polish** — walk `pl.json` section by section, update `en.json` after.
3. **#8 Vite config** — `base`, build options, env before deploy.
4. **#9/#10** as time allows.
