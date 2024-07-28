import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Router, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { DynamicRoutesService } from './modules/services/dynamic-routes.service';
import { getDynamicRoutes } from './modules/modules.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })
    , provideHttpClient()
    , provideRouter(routes) //<-- Root Route
    , 
    {
      provide: APP_INITIALIZER,
      useFactory: (dynamicRoutesService: DynamicRoutesService, router: Router) => async () => {
        await dynamicRoutesService.resetRoute(router);
      },
      deps: [DynamicRoutesService, Router],
      multi: true
    },  // <--  <-- ATTENTION: Module Route configured from backend
    provideAnimationsAsync()]
};
