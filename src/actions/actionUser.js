/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { FETCH_USER } from '../constants'

const fetchUser = (id) => {
  const url = `${process.env.REACT_APP_API_URL}/users/${id}`
  console.log('inside the action fetchUser')
  return async (dispatch) => {
    console.log('we are inside async the fetchUser')
    const response = await fetch(url)
    if(response.status === 200){
      const responseJSON = await response.json()
      console.log('responseJSON', responseJSON)
      dispatch({
        type: FETCH_USER,
        payload: responseJSON
      })
    }
    else {
      // error
    }
  }
}

export {fetchUser}
