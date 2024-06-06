import { createFeature, createReducer, on } from '@ngrx/store';
import { authInitialState, AuthStateInterface } from './auth.state';
import {CurrentUserActions} from "./actions/currentUser.action";
import {LoginActions} from "./actions/login.action";
import {LogoutActions} from "./actions/logout.action";
import {RegisterActions} from "./actions/register.actions";


export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    authInitialState,
    on(
      RegisterActions.register,
      (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        error: null,
      })
    ),
    on(
      RegisterActions.success,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false
      })
    ),
    on(
      RegisterActions.failure,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        error: action.error
      })
    ),
    on(
      LoginActions.login,
      (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        error: null,
      })
    ),
    on(
      LoginActions.success,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
      })
    ),
    on(
      LoginActions.failure,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        error: action.error
      })
    ),
    on(
      LogoutActions.logout,
      (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        error: null,
      })
    ),
    on(
      LogoutActions.success,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        error: null,
        currentUser: null
      })
    ),
    on(
      LogoutActions.failure,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        error: action.error
      })
    ),
    on(
      CurrentUserActions.get,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
      })
    ),
    on(
      CurrentUserActions.success,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        currentUser: action.user
      })
    ),
    on(
      CurrentUserActions.failure,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        error: action.error,
      })
    )
  ),
});


// import { createFeature, createReducer, on } from '@ngrx/store';
// import { messagesAdapter, messagesInitialState, MessagesState } from './messages.state';
// import { addMessage, deleteMessage } from './messages.actions';
//
// export const messagesFeature = createFeature({
//   name: 'messages',
//   reducer: createReducer(
//     messagesInitialState,
//     on(addMessage, (state: MessagesState, { message }) => messagesAdapter.addOne(message, state)),
//     on(deleteMessage, (state: MessagesState, { id }) => messagesAdapter.removeOne(id, state))
//   ),
// });
//
// export const {
//   selectMessagesState,
//   selectIds,
//   selectEntities,
//   selectLoading,
// } = messagesFeature;

