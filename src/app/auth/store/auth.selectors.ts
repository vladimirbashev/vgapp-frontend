import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AuthStateInterface} from "./auth.state";


export const authFeatureSelector = createFeatureSelector<
  AuthStateInterface
>('auth')

export const isLoadingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.loading
)

export const errorSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.error
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
)


// import { AppState } from '../index';
// import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
// import { MessagesState } from './messages.state';
// import { Message } from '../../messenger';
//
// export const selectMessagesFeature: MemoizedSelector<AppState, MessagesState> =
//   createFeatureSelector<MessagesState>('messages');
//
// export const selectMessages: MemoizedSelector<AppState, Message[]> =
//   createSelector(
//     selectMessagesFeature,
//     ({ entities }: MessagesState): Message[] =>
//       Object.values(entities) as Message[]
//   );
