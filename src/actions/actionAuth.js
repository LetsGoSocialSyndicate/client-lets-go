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
          dispatch({ type: LOGIN_FAILED, error })
        }
        else {
          const payload = { username, token }
          dispatch({ type: LOGIN_SUCCESS, token: payload })
        }
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
}

const signupSubmit = (fields, history) => {
  return async (dispatch) => {
    console.log("I am in action signupSubmit and fields are: ",  fields)
    const url = `${process.env.REACT_APP_API_URL}/signup`
    console.log('url', url)
    const opts = {
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    const response = await fetch(url, opts)
    const responseJSON = await response.json()
    console.log('response:', response.status, responseJSON)
    if (response.status === 200) {
      dispatch({ type: SIGNUP_SUCCESS, email: fields.email })
      history.push("/signup/success")
    } else {
      dispatch({ type: SIGNUP_FAILED, error: responseJSON.message })
      history.push("/signup/failure")
    }
  }
}

export { loginSubmit, signupSubmit }
