import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {TokenResponseInterface} from "../../types/tokenResponseInterface";
import {TokenRequestInterface} from "../../types/tokenRequest.interface";



export const LoginActions = createActionGroup({
  source: 'Login',
  events: {
    // defining an event without payload using the `emptyProps` function
    'login': props<{request: TokenRequestInterface}>(),

    // defining an event with payload using the `props` function
    'success': props<{token: TokenResponseInterface}>(),

    // defining an event with payload using the props factory
    'failure':  props<{error: any}>()
  },
});
