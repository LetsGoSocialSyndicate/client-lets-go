/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILED, SIGNUP_SUCCESS  } from '../constants'

const initialState = {
  token: null,
  isUserLoggedIn: false,
  error: null,
  email: null
}

function authenticate(state = initialState, action) {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
      isUserLoggedIn: true,
      token: action.token,
      error: null
    }
  case SIGNUP_SUCCESS:
    return {
      ...state,
      error: null,
      email: action.email
    }
  case LOGIN_FAILED:
  case SIGNUP_FAILED:
    return {
      ...state,
      isUserLoggedIn: false,
      token: null,
      error: action.error
    }
  default:
    return state
  }
}

export default authenticate
