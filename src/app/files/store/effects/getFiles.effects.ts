import {inject} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {FilesGetActions} from "../filesActions";
import {FilesService} from "../../services/files.service";


export const getFiles = createEffect(
  (actions$ = inject(Actions), filesService = inject(FilesService)) => {
    return actions$.pipe(
      ofType(FilesGetActions.get),
      switchMap(({user_id, skip, limit}) => {
        return filesService.get(user_id, skip, limit).pipe(
          map((files) => {
            return FilesGetActions.success({files})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(FilesGetActions.failure({error: errorResponse.error}))
          })
        )
      })
    );
  },
  { functional: true }
);
