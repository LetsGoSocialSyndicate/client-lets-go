/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { FETCH_USER } from '../constants'

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
      // error
    }
  }
}

export {fetchUser}
