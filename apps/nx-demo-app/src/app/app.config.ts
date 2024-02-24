import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { categoryEffects, categoryFeature, categoryReducer } from '@nx-demo/category';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {ProductEffects, productFeatureState } from '@nx-demo/products'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes,
    withEnabledBlockingInitialNavigation(),
    withComponentInputBinding(),
    ), 
    provideAnimationsAsync(),
   provideStore(),
   provideState(categoryFeature),
   provideState(productFeatureState),
   provideEffects([categoryEffects,ProductEffects]),
  provideHttpClient(),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  
  ],
};
