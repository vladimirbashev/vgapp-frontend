import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {UserInterface} from "../../../shared/types/user.interface";
import {logoutAction} from "../actions/logout.action";
import {currentUserAction, currentUserFailureAction, currentUserSuccessAction} from "../actions/currentUser.action";
import {AuthService} from "../../services/auth.service";
import {PersistanceService} from "../../../shared/services/persistance.service";


@Injectable()
export class CurrentUserEffect {
  currentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(currentUserAction),
      switchMap(() => {
        return this.authService.getCurrentUser().pipe(
          map((user: UserInterface) => {
            return currentUserSuccessAction({user})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(currentUserFailureAction({error: errorResponse.error}))
          })
        )
      })
    ),
    {functional: true }
  )

  currentUserFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(currentUserFailureAction),
      map(() => logoutAction())
    )
  )

  redirectAfterLoggedIn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(currentUserSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false, functional: true }
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private persistanceService: PersistanceService,
  ) {}
}
