import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {TokenResponseInterface} from "../../types/tokenResponseInterface";
import {TokenRequestInterface} from "../../types/tokenRequest.interface";



export const LoginActions = createActionGroup({
  source: 'Login',
  events: {
    'login': props<{request: TokenRequestInterface}>(),
    'success': props<{token: TokenResponseInterface}>(),
    'failure':  props<{error: any}>()
  },
});
