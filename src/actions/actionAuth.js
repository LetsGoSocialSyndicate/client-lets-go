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
      console.log('loginSubmit:response', response)
      let responseJSON = await response.json()
      // console.log('response:', response.status, responseJSON)
      dispatch({type: LOGIN_SUCCESS, token: responseJSON.token })
      dispatch({
        type: FETCH_USER,
        user: responseJSON.user,
        isOtherUser: false
      })
      history.push("/")
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

const verifyAccount = (token, route) => {
  return async (dispatch) => {
    dispatch({type: VERIFICATION_STARTED})
    const url = `${process.env.REACT_APP_API_URL}${route}/${token}`
    const response = await fetch(url)
    const responseJSON = await response.json()
    // console.log('response:', response.status, responseJSON)
    if (response.status === 200) {
      dispatch({type: LOGIN_SUCCESS, token: responseJSON.token})
      console.log("responseJSON:", responseJSON.user)
      dispatch({
        type: FETCH_USER,
        user: responseJSON.user,
        isOtherUser: false
      })
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
