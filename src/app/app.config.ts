import {ApplicationConfig, isDevMode} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideEffects} from "@ngrx/effects";
import {provideRouterStore, routerReducer} from '@ngrx/router-store';
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {authFeature} from "./auth/store/auth.reducers";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./shared/interceptors/auth.interceptor";
import * as currentUserEffects from './auth/store/effects/currentUser.effects';
import * as getTokenEffects from './auth/store/effects/getToken.effects';
import * as getTokenGoogleEffects from './auth/store/effects/getTokenGoogle.effects';
import * as logoutEffects from './auth/store/effects/logout.effects';
import * as registerEffects from './auth/store/effects/register.effects';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({router: routerReducer}),
    provideState(authFeature),
    provideEffects([currentUserEffects, getTokenEffects, getTokenGoogleEffects, logoutEffects, registerEffects]),
    provideRouterStore(),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    provideHttpClient(withInterceptors([authInterceptor])),
]
};
