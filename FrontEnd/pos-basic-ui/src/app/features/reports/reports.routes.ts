import { DashboardComponent } from '~features/reports/pages/dashboard/dashboard.component';
import { REPORTS_PATHS, ROOT_PATHS } from '~core/constants/paths.constants';

export const REPROTS_ROUTES = [
  {
    path: REPORTS_PATHS.dashboard,
    component: DashboardComponent,
    // canActivate: [noAuthenticationGuard],
  },
  { path: '**', redirectTo: ROOT_PATHS.error404 },
];
