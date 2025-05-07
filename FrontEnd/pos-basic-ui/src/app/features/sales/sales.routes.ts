import { HomeComponent } from '~features/sales/pages/home/home.component';
import { SALES_PATHS, ROOT_PATHS } from '~core/constants/paths.constants';

export const SALES_ROUTES = [
  {
    path: SALES_PATHS.home,
    component: HomeComponent,
    // canActivate: [noAuthenticationGuard],
  },
  { path: '**', redirectTo: ROOT_PATHS.error404 },
];
