import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT,
  SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILED  } from '../constants'

const loginStart = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START })
  }
}

const loginSubmit = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_SUCCESS })
  }
}

const signupStart = () => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_START })
  }
}

const signupSubmit = () => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_SUCCESS })
  }
}

export { loginStart, loginSubmit, signupStart, signupSubmit }
