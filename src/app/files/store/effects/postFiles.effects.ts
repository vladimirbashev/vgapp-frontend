import {inject} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {FilesPostActions} from "../filesActions";
import {FilesService} from "../../services/files.service";


export const postFiles = createEffect(
  (actions$ = inject(Actions), filesService = inject(FilesService)) => {
    return actions$.pipe(
      ofType(FilesPostActions.post),
      switchMap(({postFile}) => {
        return filesService.post(postFile).pipe(
          map((file) => {
            return FilesPostActions.success({file})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(FilesPostActions.failure({error: errorResponse.error}))
          })
        )
      })
    );
  },
  { functional: true }
);
