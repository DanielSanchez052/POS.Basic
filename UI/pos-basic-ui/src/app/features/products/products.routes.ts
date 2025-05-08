import { ProductListComponent } from '~features/products/pages/product-list/product-list.component';
import { PRODUCTS_PATHS, ROOT_PATHS } from '~core/constants/paths.constants';

export const PRODUCTS_ROUTES = [
  {
    path: PRODUCTS_PATHS.product_list,
    component: ProductListComponent,
    // canActivate: [noAuthenticationGuard],
  },
  { path: '**', redirectTo: ROOT_PATHS.error404 },
];
