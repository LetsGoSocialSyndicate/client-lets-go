/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { FETCH_USER } from '../constants'

const initialUserState = {
  user: {}
}

function getUserProfileInfo(state = initialFeedsState, action) {
  console.log('reducer getUserProfileInfo', state, action)
  switch (action.type) {
    case FETCH_USER:
      console.log(action)
      return {
        ...state,
        user: action.payload
    }
  default:
    return state
  }
}

export default getUserProfileInfo
