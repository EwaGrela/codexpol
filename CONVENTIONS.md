# Conventions

Detailed conventions for the Codexpol repo. `CLAUDE.md` is the short version;
this is the reference.

## Code style

- **Indentation:** 2 spaces.
- **Quotes:** single quotes for JS/JSX strings.
- **Semicolons:** omitted — the codebase is semicolon-free. Match it.
- **Components:** function components, one per file, `export default function`.
- **Imports:** asset imports at top, grouped; relative paths (`../assets/...`).
- **Linting:** `npm run lint` must pass. Flat config in `eslint.config.js`
  (extends `js.recommended`, `react-hooks`, `react-refresh`).

## Routing

- All routes are declared in `src/App.jsx` inside a single `<Routes>` under a
  shared `Layout` (`<Nav/>` + `<Outlet/>`).
- Paths are **Polish** (`/o-nas`, `/zespol`, `/produkty`, `/gry`, `/wkrotce`).
  Keep new public paths in the same language/style.
- A page component lives in `src/pages/`, one file per route.

## i18n (the most important rule)

- **PL is the source of truth.** Author copy in `src/locales/pl.json`, then
  mirror the exact same key structure into `en.json`.
- Components must not contain hardcoded user-facing text. Use:
  - `t('a.b.c')` for a string,
  - `t('a.b', { returnObjects: true })` for an array/object (used heavily for
    product items, team members, game card data).
- **Key parity is mandatory.** `pl.json` and `en.json` must have identical key
  sets. When adding/removing/renaming a key, do it in both files in the same
  change. (Backlog item #6 adds an automated check for this.)
- Language toggle lives in `components/Nav.jsx` via `i18n.changeLanguage`.

## Products (data-driven pattern)

To add or change a product:

1. Add/edit its entry under `products.items.<key>` in **both** locale files
   (`name`, `tagline`, `desc`).
2. Import its logo in `pages/Products.jsx` and register it in the `LOGOS`,
   `PRODUCT_ROUTES`, and `PRODUCT_KEYS` maps.
3. For a dedicated subpage, add a thin wrapper in `pages/` that renders
   `<ProductPage productKey="<key>" logo={logo} testimonialsKey="<key>" />`
   and a `<Route>` in `App.jsx`.

Do **not** duplicate `ProductPage.jsx` per product — that's the anti-pattern
this design avoids.

## Games (engine + data)

- `games/GameEngine.jsx` is generic; **don't put story content in it.**
- Each game is a scene map in its own file (`podroz-scenes.js`,
  `wczasy-scenes.js`) exporting `scenes`, `start`, and `initialFlags`.
- Scene shape:
  - `title?`, `art?` (ASCII string with color codes), `narration?`
  - either `choices: [{ label, next, setsFlag? }]`
  - or `ending: true` with optional `endingLabel`
  - `route: { flag, true, false }` nodes branch on a flag and are skipped
    through automatically by the engine.
- ASCII color codes inside `art`: `{w}` white, `{c}` cyan, `{r}` red, `{g}`
  green, `{y}` yellow, `{d}` dim, `{a}` amber. Default is amber.
- Raw ASCII source lives in `ascii-art/` for reference.

## Styling

- One stylesheet: `src/App.css` (~1900 lines) plus `src/index.css` for resets.
- No CSS modules, no Tailwind, no styled-components. Don't add a styling system
  without agreement.
- Reuse existing class families: `subpage` / `subpage-header` / `subpage-sub`,
  `product-slide-*`, `team-overview-*`, `game-*`, `slider-*`.

## Assets

- See the warning in `CLAUDE.md`. Verify-before-delete, cross-check `IDEAS.md`,
  move planned art out of `src` rather than deleting, and never add unoptimized
  multi-MB images.

## Git hygiene

- `dist/` and `node_modules/` are gitignored — keep them out of commits.
- Keep commits scoped to one backlog item where practical.
