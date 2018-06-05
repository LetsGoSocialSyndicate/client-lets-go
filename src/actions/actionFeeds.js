/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { FETCH_EVENT_FEEDS } from '../constants'

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

export {fetchEventFeeds}

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
