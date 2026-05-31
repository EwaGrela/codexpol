# CLAUDE.md

Guidance for Claude Code (and any agent) working in this repo.

## What this is

**Codexpol** — a marketing/brand site for a fictional Polish legacy-software
company (the brand is a dry-humor bit: "37 years on the market, 5 products, 1
printer incident"). It's a single-page-style React app with several routed
subpages, two text-adventure browser games, and full PL/EN localization.

It is a **content-heavy static site**, not an app with a backend. Almost all
user-visible text lives in locale JSON, not in components.

## Stack

- React 19 + React Router 7 (`BrowserRouter`, route table in `src/App.jsx`)
- Vite 8 (`npm run dev`, `npm run build`, `npm run preview`)
- i18next + react-i18next (`src/i18n.js`, PL is the source language)
- ESLint flat config (`eslint.config.js`, `npm run lint`)
- Playwright is installed but **not yet wired up** (no config, no specs)

## Commands

```bash
npm install        # first run
npm run dev        # local dev server with HMR
npm run build      # production build to dist/
npm run preview    # serve the built dist/
npm run lint       # eslint over the repo
```

## Project map

```
src/
  main.jsx            # entry; waits on i18n.ready then mounts App
  App.jsx             # ALL routes live here; Layout = <Nav/> + <Outlet/>
  i18n.js             # i18next init; lng:'pl', fallback:'pl'
  index.css, App.css  # App.css is ~1900 lines, all component styling
  components/Nav.jsx  # top nav + PL/EN language toggle
  sections/           # homepage building blocks (Hero, ProductStrip, etc.)
  pages/              # one component per route
  games/              # GameEngine + scene-data files
  locales/            # pl.json + en.json (MUST stay key-for-key in sync)
  assets/             # images — see warning below
ascii-art/            # source ASCII scenes for the games (reference text)
REFACTOR.md           # prioritized backlog — read this before refactoring
IDEAS.md              # content/lore roadmap (Polish)
PRODUCTS.md           # product copy reference (Polish)
```

## How the code is organized (important patterns)

- **Content lives in locale files, not JSX.** Components call
  `t('some.key')` or `t('some.key', { returnObjects: true })` for arrays/objects.
  To change copy, edit `src/locales/pl.json` first, then mirror the same keys in
  `en.json`. Never hardcode user-facing strings in components.
- **Product pages are data-driven.** All 7 product routes render one
  `pages/ProductPage.jsx`, parameterized by a `productKey` that indexes into
  `products.items.<key>` in the locale files. The thin wrappers
  (`Hermes.jsx`, `SigmaFk.jsx`, …) just pass a key + logo. Add a product by
  adding a locale entry + a logo import + a wrapper + a route — don't fork
  ProductPage.
- **The games are a tiny engine + data.** `games/GameEngine.jsx` walks a scene
  graph: each scene has optional `art`, `narration`, and `choices`; choices can
  set boolean `flags` and branch through `route` nodes. Scene content lives in
  `games/podroz-scenes.js` and `games/wczasy-scenes.js`. The ASCII art uses
  inline color codes like `{c}` (cyan), `{r}` (red) — see the `COLORS` map in
  GameEngine. To edit a game, edit its scenes file, not the engine.

## Conventions

- Match existing style: 2-space indent, single quotes, no semicolons (the
  codebase omits them), functional components, named default exports per file.
- Keep styling in `App.css` using the existing class-name patterns
  (`subpage`, `subpage-header`, `product-slide-*`, `team-overview-*`, `game-*`).
  There is no CSS-module / Tailwind setup — don't introduce one without asking.
- Routes are Polish-language paths (`/o-nas`, `/zespol`, `/produkty`). Keep that.
- See `docs/CONVENTIONS.md` for the full detail.

## ⚠️ Assets — read before touching `src/assets`

`src/assets` is ~81 MB and roughly **half is orphaned** (committed images never
imported anywhere). Some orphans are *intentional future content* per
`IDEAS.md` (EN personas Carol/Lauren/Chloe; team group shots). So:

- Before deleting any image, confirm it's unused:
  `grep -rq "$(basename FILE)" src --include='*.jsx' --include='*.js'`
- Cross-check against `IDEAS.md` before deleting — it may be planned content.
- Prefer **moving** planned-but-unused art to a `design-assets/` folder outside
  `src` (so it doesn't ship) over deleting it.
- Don't add new multi-MB PNGs. Optimize/convert first.

## Working agreements

- **`REFACTOR.md` is the backlog.** When asked to "refactor" or "clean up,"
  consult it for priority order (P0 assets → README → tests → P2/P3).
- When you finish a backlog item, tick it / note it so the file stays current.
- After any change, run `npm run lint` and (once it exists) `npm test`.
- Don't commit `dist/` or `node_modules/` — both are gitignored, keep it so.
- Locale parity is a hard rule: a key added to `pl.json` must exist in `en.json`.
