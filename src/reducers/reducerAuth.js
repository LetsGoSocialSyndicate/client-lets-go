import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILED, SIGNUP_SUCCESS  } from '../constants'

const initialState = {
  token: null,
  isUserLoggedIn: false
}

function authenticate(state = initialState, action) {
  switch (action.type) {
  case LOGIN_SUCCESS:
  case SIGNUP_SUCCESS:
    return {
      ...state,
      isUserLoggedIn: true,
      token: action.payload
    }
  case LOGIN_FAILED:
  case SIGNUP_FAILED:
    return {
      ...state,
      isUserLoggedIn: false,
      token: null
    }
  default:
    return state
  }
}

export default authenticate
