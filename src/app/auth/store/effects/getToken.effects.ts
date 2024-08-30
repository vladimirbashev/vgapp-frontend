import {inject} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {of} from 'rxjs'
import {AuthService} from "../../services/auth.service";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {TokenResponseInterface} from "../../types/tokenResponseInterface";
import {CurrentUserActions, GetTokenActions} from "../auth.actions";


export const getToken = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService), persistanceService = inject(PersistanceService)) => {
    return actions$.pipe(
      ofType(GetTokenActions.get),
      switchMap(({request}) => {
        return authService.getToken(request).pipe(
          map((token: TokenResponseInterface) => {
            persistanceService.set('accessToken', token.access_token)
            return GetTokenActions.success({token})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(GetTokenActions.failure({error: errorResponse.error}))
          })
        )
      })
    );
  },
  { functional: true }
);

export const getCurrentUser$ = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(GetTokenActions.success),
      map(() => CurrentUserActions.get())
    );
  },
  { functional: true }
);
