/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { combineReducers } from 'redux'
import auth from './reducerAuth'
import timeout from './reducerTimeout'
import eventFeeds from './reducerFeeds'
import user from './reducerUser'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  auth,
  eventFeeds,
  timeout,
  user,
  form: formReducer
})

export default rootReducer
