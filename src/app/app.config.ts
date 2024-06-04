import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {metaReducers, reducers} from "./reducers";
import {provideEffects} from "@ngrx/effects";
import { provideRouterStore } from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers, { runtimeChecks: {}, metaReducers }),
    provideState(messagesFeature),
    provideEffects([ShopListEffects, BasketEffects]),
    provideAnimationsAsync(),
    provideRouterStore()
]
};
