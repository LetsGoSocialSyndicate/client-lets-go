/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT,
  SIGNUP_SUCCESS, SIGNUP_FAILED  } from '../constants'

const loginSubmit = ({ username, password }) => {
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
    fetch(url, opts)
      .then((result) => {
        if (result.status === 200) {
          return result.json()
        }
        return { error: result.statusText }
      })
      .then((result) => {
        const { token, error } = result
        if (error) {
          dispatch({ type: LOGIN_FAILED, payload: {error} })
        }
        else {
          const payload = { username, token }
          dispatch({ type: LOGIN_SUCCESS, payload })
        }
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
}

const signupSubmit = () => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_SUCCESS })
  }
}

export { loginSubmit, signupSubmit }
