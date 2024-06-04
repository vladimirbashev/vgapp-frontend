// import { inject } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { deleteMessage, deleteMessageError, deleteMessageSuccess } from './messages.actions';
// import { MessagesApiService } from '../../shared/services/messages-api.service';
// import { catchError, map, mergeMap } from 'rxjs';
//
// export const deleteMessage$ = createEffect(
//   (actions$: Actions = inject(Actions), messagesApiService: MessagesApiService = inject(MessagesApiService)) => {
//     return actions$.pipe(
//       ofType(deleteMessage),
//       mergeMap(({ id }) =>
//         messagesApiService.deleteMessage(id).pipe(
//           map(() => deleteMessageSuccess()),
//           catchError(() => [deleteMessageError()])
//         )
//       )
//     );
//   },
//   { functional: true }
// );
