import { LOGIN, SIGNUP } from '../constants'

const login = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN })
  }
}

const signup = () => {
  return (dispatch) => {
    dispatch({ type: SIGNUP })
  }
}

export { login, signup }
