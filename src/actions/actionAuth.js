/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT,
  SIGNUP_SUCCESS, SIGNUP_FAILED  } from '../constants'

const loginSubmit = (username, password) => {
  const url = `${process.env.REACT_APP_API_URL}/login`

  const opts = {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
  return async (dispatch) => {
    const response = await fetch('/login')
    dispatch({ type: LOGIN_SUCCESS })
  }
}

const signupSubmit = () => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_SUCCESS })
  }
}

export { loginSubmit, signupSubmit }
