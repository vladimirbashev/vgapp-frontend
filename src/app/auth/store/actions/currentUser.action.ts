import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {UserInterface} from "../../../shared/types/user.interface";


export const CurrentUserActions = createActionGroup({
  source: 'Current User',
  events: {
    'get': emptyProps(),
    'success': props<{user: UserInterface}>(),
    'failure': (error: any) => ({ error }),
  },
});
