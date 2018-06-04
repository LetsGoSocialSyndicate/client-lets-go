/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { combineReducers } from 'redux'
import auth from './reducerAuth'
import eventFeeds from './reducerFeeds'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  auth,
  eventFeeds,
  form: formReducer
})

export default rootReducer
