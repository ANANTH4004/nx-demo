import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { categoryEffects, categoryFeature, categoryReducer } from '@nx-demo/category';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideAnimationsAsync(),
   provideStore(),
   provideState(categoryFeature),
   provideEffects([categoryEffects]),
  provideHttpClient(),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  
  ],
};
