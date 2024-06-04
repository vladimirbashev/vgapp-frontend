import {ApplicationConfig, isDevMode} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideEffects} from "@ngrx/effects";
import {provideRouterStore, routerReducer} from '@ngrx/router-store';
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {authFeature} from "./auth/store/auth.reducers";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({router: routerReducer}),
    provideState(authFeature),
    // provideEffects([AuthEffects]),
    provideRouterStore(),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
]
};
