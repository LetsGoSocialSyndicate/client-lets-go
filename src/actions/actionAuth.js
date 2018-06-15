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
import { getRequestOptions } from './actionUtils'

const loginSubmit = (fields, history) => {
  return async (dispatch) => {
    let url = `${process.env.REACT_APP_API_URL}/login`
    const opts = getRequestOptions('POST', null, fields)
    let response = await fetch(url, opts)
    let responseJSON = await response.json()
    console.log('loginSubmit:response:', response.status, responseJSON)
    if (response.status === 200) {
      dispatch({
        type: FETCH_USER,
        user: responseJSON.user,
        isOtherUser: false
      })
      dispatch({type: LOGIN_SUCCESS, token: responseJSON.token })
      history.push("/")
    }
    else {
      dispatch({type: LOGIN_FAILED, error: responseJSON.message})
    }
  }
}

const signupSubmit = (fields, history) => {
  return async (dispatch) => {
    // console.log("I am in action signupSubmit and fields are: ",  fields)
    const url = `${process.env.REACT_APP_API_URL}/signup`
    const opts = getRequestOptions('POST', null, fields)
    const response = await fetch(url, opts)
    const responseJSON = await response.json()
    console.log('signupSubmit:response:', response.status, responseJSON)
    if (response.status === 200) {
      dispatch({type: SIGNUP_SUCCESS, email: fields.email})
      history.push("/signup/verify_code")
    } else {
      dispatch({type: SIGNUP_FAILED, error: responseJSON.message})
      // history.push("/signup/failure")
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
      console.log("responseJSON:", responseJSON.user)
      dispatch({
        type: FETCH_USER,
        user: responseJSON.user,
        isOtherUser: false
      })
      dispatch({type: LOGIN_SUCCESS, token: responseJSON.token})
    } else {
      dispatch({type: LOGIN_FAILED, error: responseJSON.message})
    }
  }
}

const verifyCode = (code, email) => {
  return async (dispatch) => {
    console.log("verifyCode:", code, email)
    dispatch({type: VERIFICATION_STARTED})
    const url = `${process.env.REACT_APP_API_URL}/signup/${code}`
    const opts = getRequestOptions('PATCH', null, {email})
    const response = await fetch(url, opts)
    const responseJSON = await response.json()
    console.log('verifyCode response:', response.status, responseJSON)
    if (response.status === 200) {
      dispatch({
        type: FETCH_USER,
        user: responseJSON.user,
        isOtherUser: false
      })
      dispatch({type: LOGIN_SUCCESS, token: responseJSON.token})
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
  verifyCode,
  logout
}
