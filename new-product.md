---
description: Scaffold a new Codexpol product end-to-end (locale entries, logo wiring, page wrapper, route)
argument-hint: "<productKey> \"<Display Name>\""
allowed-tools: Read, Edit, Bash(ls:*), Bash(grep:*)
model: claude-sonnet-4-6
---

Add a new product called "$ARGUMENTS" following the data-driven pattern in
`docs/CONVENTIONS.md`. Derive a camelCase `productKey` from the name if one
isn't given.

Do all of the following and keep them consistent:

1. **Locale (both files):** add `products.items.<key>` with `name`, `tagline`,
   `desc` to `src/locales/pl.json` AND `src/locales/en.json`. Author PL with
   the dry Codexpol tone (see existing entries / `PRODUCTS.md`), then mirror to
   EN. Keep key parity.
2. **Products.jsx:** import the logo (ask the user for the asset path if it
   doesn't exist yet — don't invent a file) and register the key in `LOGOS`,
   `PRODUCT_ROUTES`, and `PRODUCT_KEYS`.
3. **Page wrapper:** create `src/pages/<Name>.jsx` that renders
   `<ProductPage productKey="<key>" logo={logo} testimonialsKey="<key>" />`,
   matching the style of `Hermes.jsx`.
4. **Route:** add a `<Route>` in `src/App.jsx` with a Polish-language path.

Reuse `ProductPage.jsx` — never duplicate it. After scaffolding, list exactly
what you changed and remind the user to add testimonials copy if desired.
