import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {of} from 'rxjs'
import {registerAction, registerFailureAction, registerSuccessAction} from "../actions/register.actions";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserInterface} from "../../../shared/types/user.interface";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((user: UserInterface) => {
            return registerSuccessAction({user})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({error: errorResponse.error})
            )
          })
        )
      })
    ),
    {functional: true }
  )

  redirectAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/login')
        })
      ),
    {dispatch: false, functional: true}
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
