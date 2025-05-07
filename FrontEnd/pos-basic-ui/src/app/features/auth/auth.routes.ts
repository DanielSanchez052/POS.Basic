import { LogInComponent } from '~features/auth/pages/log-in/log-in.component';
import {
  AUTHENTICATION_PATHS,
  ROOT_PATHS,
} from '~core/constants/paths.constants';

export const AUTHENTICATION_ROUTES = [
  {
    path: AUTHENTICATION_PATHS.logIn,
    component: LogInComponent,
    // canActivate: [noAuthenticationGuard],
  },
  { path: '**', redirectTo: ROOT_PATHS.error404 },
];
