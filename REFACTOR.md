# Codexpol — Refactor Backlog

A prioritized review of the repo, written as a working backlog. Each item is
something to tackle directly; the table is roughly the order to do them in.
Effort is a rough t-shirt size; Risk is the chance of breaking something live.

**Overall health: ~9/10.** All items done. This file is kept as an archive.

---

## Priority table

| #  | Priority | Item | Area | Effort | Risk | Why it matters |
|----|----------|------|------|--------|------|----------------|
| 1  | ✅ done | Delete orphaned assets (~48 MB, 19 files) | Assets | S | Low | 12 deleted, 7 moved to `design-assets/`. |
| 2  | ✅ done | Optimize remaining images (WebP/AVIF + compress) | Assets | M | Low | All 21 in-use PNGs → WebP; portraits −94%, logos −29%. |
| 3  | ✅ done | Replace stock README with a real one | Docs | S | None | Route map, i18n model, ProductPage pattern, GameEngine format. |
| 4  | ✅ done | Add a smoke test suite (Playwright is already installed) | Tests | M | None | 19 smoke tests: all routes + PL↔EN toggle. All green. |
| 5  | ✅ done | Add `npm run test` + wire Playwright config | Tooling | S | None | `playwright.config.js` + `"test"` script added. |
| 6  | ✅ done | Lock the two locale files in sync (key-parity check) | i18n | S | Low | `scripts/check-locale-parity.js` + `npm run check-i18n`. |
| 7  | ✅ done | i18n + copy polish pass (per `IDEAS.md`) | Content | M | Low | PL przejrzany — bez zmian (poprzednie rundy wystarczyły). EN: 2 zmiany. |
| 8  | ✅ done | Flesh out `vite.config.js` (base, build, env) | Tooling | S | Med | `base`, `sourcemap`, vendor/i18n chunks, `.env.example`, `public/.htaccess` for Apache SPA routing. |
| 9  | ✅ done | Fix `Products.jsx` mount effect deps | Code | S | Low | Added `initialIndex` to effect deps. |
| 10 | ✅ done | Decide on EN persona assets (wire up or delete) | Assets/Content | S | Low | Carol/Lauren/Chloe usunięte z design-assets — EN subpage nie planowany. |
| 11 | ✅ done | Add CLAUDE.md + .claude/ commands | Tooling | S | None | CLAUDE.md, CONVENTIONS.md, slash commands added. |

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

### 6. Locale parity — ✅ done
`scripts/check-locale-parity.js` recursively diffs all dict keys and array
lengths in pl.json vs en.json, exits 1 on any mismatch. Run via
`npm run check-i18n`. Currently 182 keys, fully in sync.

### 7. Copy polish — ✅ done
PL przejrzany sekcja po sekcji — bez zmian, poprzednie rundy wystarczyły.
EN: dwie zmiany tonu:
- `history[2025]`: "takes note" → "notices" (mniej korporacyjnie)
- `soon.tagline`: poprawka gramatyczna ("the way a recruiter…")
Kalki z polskich przysłów (np. Hania quote) zostawione celowo — pasują do charakteru serwisu.

### 8. Vite config — ✅ done
Added `base: '/'`, `build.sourcemap: false`, `manualChunks` (vendor + i18n split).
Added `.env.example` documenting `VITE_API_URL` for future Skill Issue backend.
Added `public/.htaccess` with Apache SPA fallback so direct URLs on home.pl don't 404.

### 9. Products.jsx effect — ✅ done
`initialIndex` added to effect dep array.

### 10. EN persona assets — ✅ done
Carol/Lauren/Chloe deleted. EN subpage not planned.

### 11. Claude setup — ✅ done
`CLAUDE.md`, `CONVENTIONS.md`, slash commands added.

