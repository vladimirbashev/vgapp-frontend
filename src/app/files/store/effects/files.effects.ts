import {inject} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {FilesActions} from "../files.actions";
import {FilesService} from "../../services/files.service";


export const getFiles = createEffect(
  (actions$ = inject(Actions), filesService = inject(FilesService)) => {
    return actions$.pipe(
      ofType(FilesActions.get),
      switchMap(({user_id, skip, limit}) => {
        return filesService.get(user_id, skip, limit).pipe(
          map((files) => {
            return FilesActions.success({files})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(FilesActions.failure({error: errorResponse.error}))
          })
        )
      })
    );
  },
  { functional: true }
);
