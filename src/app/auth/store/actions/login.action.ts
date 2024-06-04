import {createAction, props} from '@ngrx/store'
import {TokenRequestInterface} from "../../types/tokenRequest.interface";
import {ActionTypes} from "../actionTypes";
import {TokenResponseInterface} from "../../types/tokenResponseInterface";


export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: TokenRequestInterface}>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{token: TokenResponseInterface}>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{error: any}>()
)
