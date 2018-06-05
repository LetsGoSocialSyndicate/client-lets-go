/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { FETCH_EVENT_FEEDS, ADD_NEW_EVENT } from '../constants'

const fetchEventFeeds = () => {
  const url = `${process.env.REACT_APP_API_URL}/events`
  console.log('fetchEventFeeds')
  return async (dispatch) => {
    let newMessages = []

    console.log('we are inside the fetch events feed')

    const response = await fetch(url)
    if(response.status === 200){
      const responseJSON = await response.json()
      // console.log('responseJSON', responseJSON)
      dispatch({
        type: FETCH_EVENT_FEEDS,
        payload: responseJSON
      })
    }
    else {
      // error
    }
  }
}

const addNewEvent = ( newEvent ) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/events`
    // console.log('url', url)
    const opts = {
      method: 'POST',
      body: JSON.stringify(newEvent),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    const response = await fetch(url, opts)
    if(response.status === 200){
      const responseJSON = await response.json()
      dispatch({
        type: ADD_NEW_EVENT,
        payload: responseJSON
      })
    }
    else {
      // error
    }
  }
}

export { fetchEventFeeds, addNewEvent }

// export const initialize = () => {
//   return async (dispatch) => {
//     console.log('1. we are in initialize action')
//     let newMessages = []
//     const messagesResponse = await fetch(`/api/messages`)
//     if (messagesResponse.status === 200) {
//       const messagesJSON = await messagesResponse.json()
//       newMessages = messagesJSON._embedded.messages
//     }
//     dispatch({
//       type: INITIALIZE,
//       messages: newMessages
//     })
//   }
// }
