import {inject} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {catchError, map, tap} from 'rxjs/operators'
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {LogoutActions} from "../auth.actions";


export const logout = createEffect(
  (actions$ = inject(Actions), persistanceService = inject(PersistanceService)) => {
    return actions$.pipe(
      ofType(LogoutActions.logout),
      map(() => {
        persistanceService.remove('accessToken')
        return LogoutActions.success()
      }),

      catchError((errorResponse: HttpErrorResponse) => {
        return of(LogoutActions.failure({error: errorResponse.error}))
      })
    );
  },
  { functional: true }
);

// export const redirectAfterLogout = createEffect(
//   (actions$ = inject(Actions), router = inject(Router)) => {
//     return actions$.pipe(
//       ofType(LogoutActions.success),
//       tap(() => {
//         router.navigateByUrl('/login')
//       })
//     );
//   },
//   { dispatch: false, functional: true }
// );
