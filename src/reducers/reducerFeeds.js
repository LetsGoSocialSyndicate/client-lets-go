const initialFeedsState = {
  isLoading: false,
  isLoaded: false,
  eventFeeds: []
}

const initialCurrentFeed = {
  isLoading: false,
  isLoaded: false,
  eventFeed: {}
}

function eventFeeds(state = initialFeedsState, action) {
  switch (action.type) {
  default:
    return state
  }
}

function currentEventFeed(state = initialCurrentFeed, action) {
  switch (action.type) {
  default:
    return state
  }
}

export { eventFeeds, currentEventFeed }
