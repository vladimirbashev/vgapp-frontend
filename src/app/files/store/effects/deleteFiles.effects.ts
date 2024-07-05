import {inject} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {FilesService} from "../../services/files.service";
import {FilesDeleteActions} from "../filesActions";


export const deleteFiles = createEffect(
  (actions$ = inject(Actions), filesService = inject(FilesService)) => {
    return actions$.pipe(
      ofType(FilesDeleteActions.delete),
      switchMap(({file_id}) => {
        return filesService.delete(file_id).pipe(
          map((file) => {
            return FilesDeleteActions.success({file})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(FilesDeleteActions.failure({error: errorResponse.error}))
          })
        )
      })
    );
  },
  { functional: true }
);
