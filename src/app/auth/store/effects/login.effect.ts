import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {of} from 'rxjs'
import {currentUserAction} from "../actions/currentUser.action";
import {loginAction, loginFailureAction, loginSuccessAction} from "../actions/login.action";
import {AuthService} from "../../services/auth.service";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {TokenResponseInterface} from "../../types/tokenResponseInterface";


@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((token: TokenResponseInterface) => {
            this.persistanceService.set('accessToken', token.access_token)
            return loginSuccessAction({token})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({error: errorResponse.error}))
          })
        )
      })
    ),
    {functional: true }
  )

  getCurrentUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        map(() => currentUserAction())
      ),
    {functional: true }
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
  ) {}
}
