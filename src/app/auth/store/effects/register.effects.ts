import {inject} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {of} from 'rxjs'
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserInterface} from "../../../shared/types/user.interface";
import {AuthService} from "../../services/auth.service";
import {RegisterActions} from "../auth.actions";


export const register = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(RegisterActions.register),
      switchMap(({request}) => {
        return authService.register(request).pipe(
          map((user: UserInterface) => {
            return RegisterActions.success({user})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              RegisterActions.failure({error: errorResponse.error})
            )
          })
        )
      })
    );
  },
  { functional: true }
);

export const redirectAfterRegister = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(RegisterActions.success),
      tap(() => {
        router.navigateByUrl('=/login')
      })
    );
  },
  { dispatch: false, functional: true }
);
