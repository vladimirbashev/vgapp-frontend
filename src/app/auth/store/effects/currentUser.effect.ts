import {inject} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {CurrentUserActions} from "../actions/currentUser.action";
import {AuthService} from "../../services/auth.service";
import {LogoutActions} from "../actions/logout.action";


export const currentUser = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(CurrentUserActions.get),
      switchMap(() =>
        authService.getCurrentUser().pipe(
          map((user) => CurrentUserActions.success({ user })),
          catchError((error: { message: string }) =>
            of(CurrentUserActions.failure({ errorMsg: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);


export const currentUserFailure = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(CurrentUserActions.failure),
      map(() => LogoutActions.logout())
    );
  },
  { functional: true }
);

export const redirectAfterLoggedIn = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(CurrentUserActions.success),
      tap(() => {
        router.navigateByUrl('/')
      })
    );
  },
  { dispatch: false, functional: true }
);
