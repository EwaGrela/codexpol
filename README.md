# Codexpol

Marketing/brand site for a fictional Polish legacy-software company. The brand
is a dry-humor bit: "37 years on the market, 5 products, 1 printer incident."
Single-page-style React app with routed subpages, two text-adventure browser
games, and full PL/EN localization.

## Stack

- React 19 + React Router 7 (`BrowserRouter`, route table in `src/App.jsx`)
- Vite 8 (`npm run dev` / `npm run build` / `npm run preview`)
- i18next + react-i18next — PL is the source language, EN is the translation
- ESLint flat config (`eslint.config.js`, `npm run lint`)
- Playwright installed (not yet configured — see REFACTOR.md #4/#5)

## Commands

```bash
npm install        # first run
npm run dev        # local dev server with HMR  (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # serve the built dist/
npm run lint       # ESLint over the whole repo
```

## Route map

| Path | Component | Notes |
|------|-----------|-------|
| `/` | `Home` (inline in App.jsx) | Hero + ProductStrip + TrustStrip + Testimonials |
| `/o-nas` | `About` | Company history / about page |
| `/zespol` | `Team` | Full team overview |
| `/kadry` | `HrTeam` | HR team subpage |
| `/tech` | `TechTeam` | Tech team subpage |
| `/zarzad` | `Zarzad` | Management board |
| `/produkty` | `Products` | Product catalogue with slider |
| `/sigma-fk` | `SigmaFk` | Product page — Sigma FK |
| `/hermes` | `Hermes` | Product page — Hermes |
| `/teczka95` | `Teczka95` | Product page — Teczka 95 |
| `/kom-bit` | `KomBit` | Product page — Kom-Bit |
| `/vatowiec` | `Vatowiec` | Product page — Vatowiec |
| `/zapora` | `Zapora` | Product page — Zapora |
| `/legacy` | `Legacy` | Legacy products page |
| `/gry` | `Games` | Games hub |
| `/gry/podroz` | `Podroz` | Text adventure — Podróż Służbowa |
| `/gry/wczasy` | `Wczasy` | Text adventure — Wczasy |
| `/wkrotce` | `Soon` | "Coming soon" placeholder |

All paths are Polish-language — keep them that way.

## i18n model

All user-visible text lives in `src/locales/pl.json` (source of truth) and
`src/locales/en.json` (translation). Components call `t('some.key')` or
`t('some.key', { returnObjects: true })` for arrays/objects. **Never hardcode
user-facing strings in JSX.**

Rules:
- Edit `pl.json` first, then mirror the exact same key in `en.json`.
- Key parity is a hard requirement — the two files must stay in sync.
- `src/i18n.js` initializes i18next; default language is `pl`, fallback is `pl`.
- The language toggle is in `src/components/Nav.jsx`.

## Product pages

All seven product routes render a single `pages/ProductPage.jsx`, driven by a
`productKey` that indexes into `products.items.<key>` in the locale files. The
thin wrappers (`SigmaFk.jsx`, `Hermes.jsx`, …) just supply a key and a logo:

```jsx
// pages/SigmaFk.jsx
export default function SigmaFk() {
  return <ProductPage productKey="sigmaFk" logo={logo} testimonialsKey="sigmaFk" />
}
```

To add a product: add a locale entry under `products.items`, add a logo import,
create a wrapper component, and register a route in `App.jsx`. Do not fork
`ProductPage.jsx`.

## Text-adventure games

`games/GameEngine.jsx` walks a scene graph. Each scene object can have:

```js
{
  art: someArt,          // imported .txt?raw — ASCII art displayed above narration
  narration: 'text',     // optional prose paragraph
  choices: [             // shown as buttons; omit for an end screen
    {
      label: 'Button text',
      next: 'scene_id',
      setsFlag: { flagName: true },  // optional — sets a boolean flag in state
    }
  ],
  route: {               // routing node — not displayed, just branches
    flag: 'flagName',
    true: 'scene_if_true',
    false: 'scene_if_false',
  }
}
```

ASCII art files live in `ascii-art/` and are imported with `?raw`. Inline color
codes: `{w}` white, `{c}` cyan, `{r}` red, `{g}` green, `{y}` yellow,
`{d}` dim, `{a}` amber (default). Scene data lives in
`games/podroz-scenes.js` and `games/wczasy-scenes.js` — to edit a game, edit
its scenes file, not the engine.

## Project docs

- `CLAUDE.md` — guidance for AI agents working in this repo
- `CONVENTIONS.md` — full coding/style conventions
- `REFACTOR.md` — prioritized refactor/cleanup backlog
- `IDEAS.md` — content and lore roadmap (Polish)
- `PRODUCTS.md` — product copy reference (Polish)
