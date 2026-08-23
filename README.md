# Verre — Category-Agnostic E-Commerce Frontend

Angular 18 (standalone components) + AdminLTE-for-admin storefront, built to launch as a
clothing/fashion store and be reused for perfume, watches, shoes, bags, electronics, etc.
without redesigning the app.

## Why this architecture works across verticals

The one rule that makes reuse possible: **the UI never encodes category-specific fields
in TypeScript types.** There is no `ClothingProduct { size, color }` — there's one
`Product`, one `ProductVariant`, one `ProductAttribute`/`ProductAttributeValue` pair
(`src/app/core/models/product.model.ts`), and category-specific concepts (Size, Color,
Volume, Concentration, Strap Material...) are *data* referencing those generic types.

Same idea for navigation: the header/mega-menu components render whatever
`src/app/core/constants/navigation.config.ts` contains. Re-skinning the whole site for
a perfume launch means duplicating that one config file with new labels/routes — the
`HeaderComponent` and `MegaMenuComponent` are never touched.

```
Product ──has──▶ ProductAttribute (Color, Size, Volume, Concentration...)
                       │
                       ▼
              ProductAttributeValue (Black, L, 100ml, EDP...)

ProductVariant.attributeValueMap: { attr-color: val-black, attr-size: val-l }
  → one purchasable SKU per unique combination of variant-defining attributes
```

`ProductAttribute.definesVariant` distinguishes purchasable specs (Size, Color →
generate `ProductVariant`s) from informational specs (Water Resistance, Fabric →
shown as read-only in `Product.attributes`, also drive the listing-page filter
sidebar via `ProductAttribute.filterable`). Filters, PDP variant selectors, and admin
attribute forms all read this same config-driven shape.

## Folder structure

```
src/app/
  core/               # singleton services, guards, interceptors, models — imported everywhere
    models/            product.model.ts, navigation.model.ts
    constants/          navigation.config.ts  (swap per vertical)
    services/           navigation, cart, wishlist (product/category/auth/etc. land with their features)
    guards/ interceptors/
  shared/             # dumb, reusable UI: ProductCard, Rating, Pagination... (built out per phase)
  layout/
    storefront/         header, mega-menu, footer, storefront-layout  ← Phase 1
    admin/               AdminLTE shell                                ← Phase 7
  features/           # one folder per routed area, each lazy-loaded
    home/ catalog/ cart/ checkout/ wishlist/ account/ authentication/ pages/ admin/
  app.routes.ts
  app.config.ts
environments/          apiUrl, currency, flags — never hard-code URLs in services
styles/                _tokens.scss — the single file to edit to reskin colors/type/spacing
styles.scss            global reset + typography + reusable primitives (.btn-brand, .container...)
```

## Theming

Every color, font, spacing and radius value lives in `src/styles/_tokens.scss` as CSS
custom properties. Component styles reference `var(--color-accent)`, never a literal
hex. A dark-theme variable set (`[data-theme='dark']`) is scaffolded and ready to wire
to a theme toggle.

## Routing conventions

Slugs, not IDs, in URLs (`/product/premium-oversized-t-shirt`, `/category/mens-jeans`)
per the SEO requirement. Every feature area is `loadComponent`/`loadChildren` lazy so
the storefront bundle never pays for admin code, and vice versa.

## Phase status

- [x] **Phase 1** — architecture, folder structure, global theme, storefront shell
      (header, mega menu, footer, routing wired to a placeholder home route)
- [x] **Phase 2** — home page: hero banner, category showcase, New Arrivals /
      Best Sellers / Trending product rails (shared `ProductRailComponent`),
      featured collection banner, special offers, brand strip, testimonials,
      newsletter banner. Backed by a 24-product mock catalog and
      `ProductService`/`CategoryService`/`BrandService`/`TestimonialService`,
      all resolving through `forkJoin`/`switchMap`. Verified with a clean
      `ng build`.
- [ ] Phase 3 — shop/search/filter/sort/pagination/category/brand pages
- [ ] Phase 4 — product details, image gallery, variants, reviews
- [ ] Phase 5 — cart, mini cart, wishlist, checkout
- [ ] Phase 6 — auth, account, orders, order tracking
- [ ] Phase 7 — AdminLTE admin panel
- [ ] Phase 8 — responsive/accessibility/performance/API-integration pass

## Adding a new vertical later (e.g. perfume)

1. Duplicate `navigation.config.ts` → `navigation.perfume.config.ts`, swap labels/routes.
2. Add `ProductAttribute` rows for Volume, Concentration, Fragrance Family (`definesVariant: true`
   for Volume/Concentration if they generate SKUs; `false` for descriptive notes).
3. Add `Category` rows referencing those attribute IDs — the listing page filter sidebar
   and PDP variant selectors pick them up automatically.
4. Point `NavigationService` at the new config (or load it from the API per store/tenant).

No component in `layout/`, `shared/`, or `features/catalog` needs to change.

## Getting started (once dependencies are installed)

```bash
npm install
npm start        # ng serve, http://localhost:4200
npm run build:prod
```
