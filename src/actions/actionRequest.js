/* Copyright 2018, Socializing Syndicate Corp. */
import {REQUEST_SUBMIT} from '../constants'

const handleRequest = (e_id, u_id) => {
  console.log('i am here in the handleRequest')
  return async (dispatch) => {
    console.log('this is event id', e_id)
    console.log('this is user id', u_id)

    const url = `${process.env.REACT_APP_API_URL}/events/request/${e_id}`

    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    const response = await fetch(url, opts)

    if (response.status === 200) {
      const responseJSON = await response.json()

      dispatch({type: REQUEST_SUBMIT, userId: u_id})
    }
  }
}

export {
  handleRequest
}
