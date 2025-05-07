import { inject } from '@angular/core';
import type { Environment } from '~core/tokens/environment.token';
import { ENVIRONMENT } from '~core/tokens/environment.token';

export const getEndpoints = () => {
  const environment = inject<Environment>(ENVIRONMENT);

  return {
    auth: {
      v1: {
        authentication: `${environment.apiBaseUrl}/v1/authentication`,
        login: `${environment.apiBaseUrl}/v1/authentication/login`,
        refreshToken: `${environment.apiBaseUrl}/v1/authentication/token/refresh`,
      },
    },
  } as const;
};
