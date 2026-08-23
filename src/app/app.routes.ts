import { Routes } from '@angular/router';
import { StorefrontLayoutComponent } from './layout/storefront/storefront-layout/storefront-layout.component';

/**
 * Route tree. Feature areas are lazy-loaded so the initial bundle stays
 * lean; the admin area is a fully separate lazy chunk with its own
 * (AdminLTE) layout so storefront customers never download admin code.
 * Phase 1 wires the storefront shell + home route; catalog/cart/etc.
 * route files are added in their respective phases.
 */
export const routes: Routes = [
  {
    path: '',
    component: StorefrontLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component').then((m) => m.HomeComponent),
        title: 'Verre — Modern Fashion Store',
      },
      // Phase 3: shop / category / brand / search
      // Phase 4: product/:slug
      // Phase 5: cart, wishlist, checkout
      // Phase 6: account, login, register
    ],
  },
  // Phase 7: { path: 'admin', loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES) }
  { path: '**', redirectTo: '' },
];
