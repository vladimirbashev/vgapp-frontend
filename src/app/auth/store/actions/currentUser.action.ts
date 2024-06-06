import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {UserInterface} from "../../../shared/types/user.interface";


export const CurrentUserActions = createActionGroup({
  source: 'Current User',
  events: {
    // defining an event without payload using the `emptyProps` function
    'get': emptyProps(),

    // defining an event with payload using the `props` function
    'success': props<{user: UserInterface}>(),

    // defining an event with payload using the props factory
    'failure': (error: any) => ({ error }),
  },
});
