import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {UserInterface} from "../../shared/types/user.interface";
import {TokenRequestInterface} from "../types/tokenRequest.interface";
import {TokenResponseInterface} from "../types/tokenResponseInterface";
import {RegisterRequestInterface} from "../types/registerRequest.interface";
import {ErrorType} from "../../shared/types/error.interface";

export const CurrentUserActions = createActionGroup({
  source: 'Current User',
  events: {
    'get': emptyProps(),
    'success': props<{user: UserInterface}>(),
    'failure': (error: any) => ({ error }),
  },
});

export const LoginActions = createActionGroup({
  source: 'Login',
  events: {
    'login': props<{request: TokenRequestInterface}>(),
    'success': props<{token: TokenResponseInterface}>(),
    'failure':  props<{error: ErrorType}>()
  },
});

export const LogoutActions = createActionGroup({
  source: 'Logout',
  events: {
    'logout': emptyProps(),
    'success': emptyProps(),
    'failure':  props<{error: ErrorType}>()
  },
});

export const RegisterActions = createActionGroup({
  source: 'Register',
  events: {
    'register': props<{request: RegisterRequestInterface}>(),
    'success':  props<{user: UserInterface}>(),
    'failure':  props<{error: ErrorType}>()
  },
});
