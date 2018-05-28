/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { combineReducers } from 'redux'
import auth from './reducerAuth'
import eventFeeds from './reducerFeeds'

const rootReducer = combineReducers({
  auth,
  eventFeeds
})

export default rootReducer
