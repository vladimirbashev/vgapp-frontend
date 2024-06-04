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
