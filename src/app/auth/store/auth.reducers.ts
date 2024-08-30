import { createFeature, createReducer, on } from '@ngrx/store';
import { authInitialState, AuthStateInterface } from './auth.state';
import {
  CurrentUserActions,
  GetTokenActions,
  GetTokenGoogleActions,
  LogoutActions,
  RegisterActions
} from "./auth.actions";


export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    authInitialState,
    on(
      RegisterActions.register,
      (state): AuthStateInterface => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      RegisterActions.success,
      (state, action): AuthStateInterface => ({
        ...state,
        loading: false
      })
    ),
    on(
      RegisterActions.failure,
      (state, action): AuthStateInterface => ({
        ...state,
        loading: false,
        error: action.error
      })
    ),
    on(
      GetTokenActions.get,
      (state): AuthStateInterface => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      GetTokenActions.success,
      (state, action): AuthStateInterface => ({
        ...state,
        loading: false,
      })
    ),
    on(
      GetTokenActions.failure,
      (state, action): AuthStateInterface => ({
        ...state,
        loading: false,
        error: action.error
      })
    ),
    on(
      GetTokenGoogleActions.get,
      (state): AuthStateInterface => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      GetTokenGoogleActions.success,
      (state, action): AuthStateInterface => ({
        ...state,
        loading: false,
      })
    ),
    on(
      GetTokenGoogleActions.failure,
      (state, action): AuthStateInterface => ({
        ...state,
        loading: false,
        error: action.error
      })
    ),
    on(
      LogoutActions.logout,
      (state): AuthStateInterface => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      LogoutActions.success,
      (state, action): AuthStateInterface => ({
        ...state,
        loading: false,
        error: null,
        currentUser: null
      })
    ),
    on(
      LogoutActions.failure,
      (state, action): AuthStateInterface => ({
        ...state,
        loading: false,
        error: action.error
      })
    ),
    on(
      CurrentUserActions.get,
      (state, action): AuthStateInterface => ({
        ...state,
        loading: true,
      })
    ),
    on(
      CurrentUserActions.success,
      (state, action): AuthStateInterface => ({
        ...state,
        loading: false,
        currentUser: action.user
      })
    ),
    on(
      CurrentUserActions.failure,
      (state, action): AuthStateInterface => ({
        ...state,
        loading: false,
        // error: action.error,
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

