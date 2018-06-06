/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { FETCH_USER } from '../constants'

const initialUserState = {
  user: {}
}

function getUser(state = initialUserState, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log('reducer getUser', state, action)
      console.log(action)
      return {
        ...state,
        user: action.user
    }
  default:
    return state
  }
}

export default getUser
