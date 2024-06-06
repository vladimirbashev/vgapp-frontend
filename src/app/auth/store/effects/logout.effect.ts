import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {catchError, map, tap} from 'rxjs/operators'
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {logoutAction, logoutFailureAction, logoutSuccessAction} from "../actions/logout.action";
import {PersistanceService} from "../../../shared/services/persistance.service";


@Injectable()
export class LogoutEffect {
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutAction),
      map(() => {
        this.persistanceService.remove('accessToken')
        return logoutSuccessAction()
      }),

      catchError((errorResponse: HttpErrorResponse) => {
        return of(logoutFailureAction({error: errorResponse.error}))
      })
    ),
    {functional: true }
  )

  redirectAfterLogout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/login')
        })
      ),
    {dispatch: false, functional: true}
  )

  constructor(
    private actions$: Actions,
    private router: Router,
    private persistanceService: PersistanceService,
  ) {}
}
