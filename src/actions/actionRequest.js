/* Copyright 2018, Socializing Syndicate Corp. */
import {
  REQUEST_SUBMIT
} from '../constants'

const handleRequest = (id) => {
  console.log('this is event', id)
  const url = `${process.env.REACT_APP_API_URL}/events/request/${id}`

  // const response = await fetch(url)
  // const responseJSON = await response.json()
  //
  // if(response.status === 200) {
  //   dispatch({type: REQUEST_SUBMIT, userId })
  // }
}

export {
  handleRequest
}
