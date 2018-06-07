/* Copyright 2018, Socializing Syndicate Corp. */
import {
  FETCH_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  VERIFICATION_STARTED
} from '../constants'

const loginSubmit = (fields, history) => {
  return async (dispatch) => {
    let url = `${process.env.REACT_APP_API_URL}/login`
    const opts = {
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    let response = await fetch(url, opts)
    if (response.status === 200) {
      let responseJSON = await response.json()
      // console.log('response:', response.status, responseJSON)
      dispatch({type: LOGIN_SUCCESS, token: responseJSON.token, email: responseJSON.email})
      history.push("/")
      url = `${process.env.REACT_APP_API_URL}/users/${fields.email}`
      response = await fetch(url)
      if (response.status === 200) {
        responseJSON = await response.json()
        dispatch({ type: FETCH_USER, user: responseJSON })
      }
      else {
        dispatch({type: LOGIN_FAILED, error: response.message})
      }
    }
    else {
      dispatch({type: LOGIN_FAILED, error: response.message})
    }
  }
}

const signupSubmit = (fields, history) => {
  return async (dispatch) => {
    // console.log("I am in action signupSubmit and fields are: ",  fields)
    const url = `${process.env.REACT_APP_API_URL}/signup`
    // console.log('url', url)
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
    // console.log('response:', response.status, responseJSON)
    if (response.status === 200) {
      dispatch({type: SIGNUP_SUCCESS, email: fields.email})
      history.push("/signup/success")
    } else {
      dispatch({type: SIGNUP_FAILED, error: responseJSON.message})
      history.push("/signup/failure")
    }
  }
}

const verifyAccount = (token) => {
  return async (dispatch) => {
    dispatch({type: VERIFICATION_STARTED})
    const url = `${process.env.REACT_APP_API_URL}/confirmation/${token}`
    const response = await fetch(url)
    const responseJSON = await response.json()
    // console.log('response:', response.status, responseJSON)
    if (response.status === 200) {
      dispatch({type: LOGIN_SUCCESS, token: responseJSON.token, email: responseJSON.email})
    } else {
      dispatch({type: LOGIN_FAILED, error: responseJSON.message})
    }
  }
}

const logout = () => {
  return async (dispatch) => {
    dispatch({type: LOGOUT})
  }
}

export {
  loginSubmit,
  signupSubmit,
  verifyAccount,
  logout
}
