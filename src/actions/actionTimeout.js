import { COUNT_DOWN_START, COUNTING_DOWN, COUNT_DOWN_FINISH } from '../constants'

const countDownStart = (counter) => {
  return (dispatch) => {
    dispatch({ type: COUNT_DOWN_START , counter})
  }
}

const countingDown = () => {
  return  (dispatch) => {
    dispatch({ type: COUNTING_DOWN })
  }
}

const countDownFinish = (history) => {
  return (dispatch) => {
    dispatch({ type: COUNT_DOWN_FINISH })
    if (history) {
      history.push('/profile')
    }
  }
}


export { countDownStart, countingDown, countDownFinish }
