/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import {
  FETCH_USER,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  EDIT_USER_CANCEL
} from '../constants'

const initialUserState = {
  user: {},
  otherUser: {},
  isReadOnly: true
}

function reducerUser(state = initialUserState, action) {
  switch (action.type) {
    case FETCH_USER: //type, user, isOtherUser
      console.log('reducer User', state, action)
      return {
        ...state,
        user: action.isOtherUser ? state.user : action.user,
        otherUser: action.isOtherUser ? action.user : state.otherUser,
        isReadOnly: true,
        error: null
    }
    case EDIT_USER_START: //type
    console.log('reducer User', state, action)
      return {
        ...state,
        isReadOnly: false,
        error: null
    }
    case EDIT_USER_SUCCESS: //type, user
    console.log('reducer User', state, action)
      return {
        ...state,
        user: action.user,
        isReadOnly: true,
        error: null
    }
    case EDIT_USER_FAILED: //type, error
    console.log('reducer User', state, action)
      return {
        ...state,
        isReadOnly: true,
        error: action.error
    }
    case EDIT_USER_CANCEL: //type
    console.log('reducer User', state, action)
      return {
        ...state,
        isReadOnly: true,
        error: null
    }
    default:
      return state
  }
}

export default reducerUser
