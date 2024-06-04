export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout success',
  LOGOUT_FAILURE = '[Auth] Logout failure',

  CURRENT_USER = '[Auth] Current user',
  CURRENT_USER_SUCCESS = '[Auth] Current user success',
  CURRENT_USER_FAILURE = '[Auth] Current user failure'
}
