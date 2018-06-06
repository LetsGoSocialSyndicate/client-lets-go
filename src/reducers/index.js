/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { combineReducers } from 'redux'
import auth from './reducerAuth'
import timeout from './reducerTimeout'
import eventFeeds from './reducerFeeds'
import user from './reducerUser'
import { reducer as formReducer } from 'redux-form'
import requestToJoin from './reducerRequest'

const rootReducer = combineReducers({
  auth,
  eventFeeds,
  timeout,
  user,
  requestToJoin,
  form: formReducer
})

export default rootReducer
