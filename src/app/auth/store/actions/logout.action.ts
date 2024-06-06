import {createActionGroup, emptyProps, props} from '@ngrx/store'

export const LogoutActions = createActionGroup({
  source: 'Logout',
  events: {
    'logout': emptyProps(),
    'success': emptyProps(),
    'failure':  props<{error: any}>()
  },
});
