import { createFeature, createReducer, on } from '@ngrx/store';
import { authInitialState, AuthStateInterface } from './auth.state';
import {registerAction, registerFailureAction, registerSuccessAction} from "./actions/register.actions";
import {loginAction, loginFailureAction, loginSuccessAction} from "./actions/login.action";
import {logoutAction, logoutFailureAction, logoutSuccessAction} from "./actions/logout.action";
import {currentUserAction, currentUserFailureAction, currentUserSuccessAction} from "./actions/currentUser.action";

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    authInitialState,
    on(
      registerAction,
      (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        error: null,
      })
    ),
    on(
      registerSuccessAction,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false
      })
    ),
    on(
      registerFailureAction,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        error: action.error
      })
    ),
    on(
      loginAction,
      (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        error: null,
      })
    ),
    on(
      loginSuccessAction,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
      })
    ),
    on(
      loginFailureAction,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        error: action.error
      })
    ),
    on(
      logoutAction,
      (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        error: null,
      })
    ),
    on(
      logoutSuccessAction,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        error: null,
        currentUser: null
      })
    ),
    on(
      logoutFailureAction,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        error: action.error
      })
    ),
    on(
      currentUserAction,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
      })
    ),
    on(
      currentUserSuccessAction,
      (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        currentUser: action.user
      })
    ),
    on(
      currentUserFailureAction,
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

