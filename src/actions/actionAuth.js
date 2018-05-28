/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT,
  SIGNUP_SUCCESS, SIGNUP_FAILED  } from '../constants'

const loginSubmit = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_SUCCESS })
  }
}

const signupSubmit = () => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_SUCCESS })
  }
}

export { loginSubmit, signupSubmit }
