/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
 import {
   FETCH_USER,
   EDIT_USER_START,
   EDIT_USER_SUCCESS,
   EDIT_USER_FAILED,
   EDIT_USER_CANCEL
 } from '../constants'
 import { getRequestOptions } from './actionUtils'

const fetchUser = (email) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/users/${email}`
    const response = await fetch(url)
    const responseJSON = await response.json()
    console.log('fetchUser response:', response.status, responseJSON)
    if(response.status === 200){
      dispatch({
        type: FETCH_USER,
        user: responseJSON
      })
    }
    else {
      //TODO: handle error
    }
  }
}

const updateProfile = (newUserInfo, user, token) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/users/${user.id}`
    const opts = getRequestOptions('PATCH', token, newUserInfo)
    const response = await fetch(url, opts)
    const responseJSON = await response.json()
    console.log('response:', response.status, responseJSON)
    if (response.status === 200) {
      dispatch({type: EDIT_USER_SUCCESS, user: responseJSON})
    } else {
      dispatch({type: EDIT_USER_FAILED, error: responseJSON.message})
    }
  }
}

const startEditing = () => {
  return async (dispatch) => {
    dispatch({type: EDIT_USER_START})
  }
}

const cancelEditing = () => {
  return async (dispatch) => {
    dispatch({type: EDIT_USER_CANCEL})
  }
}

export {fetchUser, updateProfile, startEditing, cancelEditing}
