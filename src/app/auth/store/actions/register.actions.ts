import {createAction, props} from '@ngrx/store'
import {UserInterface} from "../../../shared/types/user.interface";
import {ActionTypes} from "../actionTypes";
import {RegisterRequestInterface} from "../../types/registerRequest.interface";


export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{user: UserInterface}>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{error: any}>()
)
