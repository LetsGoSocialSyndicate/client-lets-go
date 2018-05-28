/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { FETCH_EVENT_FEEDS, FETCH_EVENT_FEEDS_START } from '../constants'

const initialFeedsState = {
  isLoading: false,
  isLoaded: false,
  eventFeeds: {}
}

function eventFeeds(state = initialFeedsState, action) {
  switch (action.type) {
  case FETCH_EVENT_FEEDS_START:
    return {
      ...state,
      isLoading: true,
      isLoaded: false
    }

  case FETCH_EVENT_FEEDS:
    const mappedKey = action.payload.reduce((acc, feed) => {
      acc[feed.id] = { ...feed }
      return acc
    }, {})
    console.log(mappedKey);
    return {
      ...state,
      isLoading: false,
      isLoaded: true,
      eventFeeds: mappedKey
    }
  default:
    return state
  }
}

export default eventFeeds
