import {createActionGroup, props} from '@ngrx/store'
import {UserInterface} from "../../../shared/types/user.interface";
import {RegisterRequestInterface} from "../../types/registerRequest.interface";


export const RegisterActions = createActionGroup({
  source: 'Logout',
  events: {
    'register': props<{request: RegisterRequestInterface}>(),
    'success':  props<{user: UserInterface}>(),
    'failure':  props<{error: any}>()
  },
});
