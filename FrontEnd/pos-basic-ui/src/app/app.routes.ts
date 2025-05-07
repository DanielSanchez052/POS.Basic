import {
  AUTHENTICATION_PATHS,
  SALES_PATHS,
  PRODUCTS_PATHS,
  REPORTS_PATHS,
  ROOT_PATHS,
} from '~core/constants/paths.constants';
import { Routes } from '@angular/router';
import { LogInComponent } from '~features/auth/pages/log-in/log-in.component';
import { Error404Component } from '~core/components/error-404/error-404.component';

export const routes: Routes = [
  {
    path: ROOT_PATHS.home,
    component: LogInComponent,
  },
  {
    path: AUTHENTICATION_PATHS.base,
    loadChildren: async () =>
      import('./features/auth/auth.routes').then(
        (module_) => module_.AUTHENTICATION_ROUTES
      ),
  },
  {
    path: SALES_PATHS.base,
    loadChildren: async () =>
      import('./features/sales/sales.routes').then(
        (module_) => module_.SALES_ROUTES
      ),
  },
  {
    path: PRODUCTS_PATHS.base,
    loadChildren: async () =>
      import('./features/products/products.routes').then(
        (module_) => module_.PRODUCTS_ROUTES
      ),
  },
  {
    path: REPORTS_PATHS.base,
    loadChildren: async () =>
      import('./features/reports/reports.routes').then(
        (module_) => module_.REPROTS_ROUTES
      ),
  },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' },
];
