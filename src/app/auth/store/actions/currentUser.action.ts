import {createAction, props} from '@ngrx/store'
import {UserInterface} from "../../../shared/types/user.interface";
import {ActionTypes} from "../actionTypes";


export const currentUserAction = createAction(
  ActionTypes.CURRENT_USER
)

export const currentUserSuccessAction = createAction(
  ActionTypes.CURRENT_USER_SUCCESS,
  props<{user: UserInterface}>()
)

export const currentUserFailureAction = createAction(
  ActionTypes.CURRENT_USER_FAILURE,
  props<{error: any}>()
)
