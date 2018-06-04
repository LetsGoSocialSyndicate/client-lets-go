/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { combineReducers } from 'redux'
import auth from './reducerAuth'
import eventFeeds from './reducerFeeds'
import { reducer as formReducer } from 'redux-form'

//https://redux-form.com/7.3.0/docs/gettingstarted.md/
//how to include form-reducer, why there is a "form" key

const rootReducer = combineReducers({
  auth,
  eventFeeds,
  form: formReducer
})

export default rootReducer
