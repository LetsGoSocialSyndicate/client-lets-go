import { LOGIN_SUCCESS, LOGIN_FAILED, VERIFICATION_STARTED } from '../constants'

// this is where we want to go '/:email/hosted'



const verifyLoggedIn = (token, history) => {
  return async (dispatch) => {
    console.log("verifyLoggedIn", token)
    dispatch({type: VERIFICATION_STARTED})
    const url = `${process.env.REACT_APP_API_URL}/confirmation/${token}`
    const response = await fetch(url)
    const responseJSON = await response.json()
    // console.log('response:', response.status, responseJSON)
    if (response.status === 200) {
      dispatch({type: LOGIN_SUCCESS, token: responseJSON.token, email: responseJSON.email})
      history.push('/requestPage')
    } else {
      dispatch({type: LOGIN_FAILED, error: responseJSON.message})
    }
  }
}

export { verifyLoggedIn }
