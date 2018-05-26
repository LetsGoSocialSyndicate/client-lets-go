import { LOGIN_START, LOGIN_SUCCESS, LOGOUT, SIGNUP_START, SIGNUP_SUCCESS  } from '../constants'

const initialState = {
  token: null,
  isUserLoggedIn: false
}

function authenticate(state = initialState, action) {
  switch (action.type) {
  case LOGIN_START:
  case SIGNUP_START:
    return {
      ...state,
      isUserLoggedIn: false,
      token: null
    }

  case LOGIN_SUCCESS:
  case SIGNUP_SUCCESS:
    return {
      ...state,
      isUserLoggedIn: true,
      token: action.payload
    }
  default:
    return state
  }
}

export default authenticate
