import { combineReducers } from 'redux'
import auth from './reducerAuth'
import { eventFeeds, currentEventFeed } from './reducerFeeds'

const rootReducer = combineReducers({
  auth,
  eventFeeds,
  currentEventFeed
})

export default rootReducer
