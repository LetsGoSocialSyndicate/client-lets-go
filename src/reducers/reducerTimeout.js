/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import { COUNT_DOWN_START, COUNTING_DOWN, COUNT_DOWN_FINISH } from '../constants'

const initialState = {
  counter: 0,
  countingDown: false,
}

function timeout(state = initialState, action) {
  switch (action.type) {
  case COUNT_DOWN_START: //type and timeout
  console.log('reducer timeout', state, action)
  return {
    ...state,
    counter: action.counter,
    countingDown: true
  }
  case COUNTING_DOWN:
  console.log('reducer timeout', state, action)
  return {
    ...state,
    counter: state.counter - 1
  }
  case COUNT_DOWN_FINISH:
  console.log('reducer timeout', state, action)
  return {
    ...state,
    counter: 0,
    countingDown: false
  }
  default:
  return state
}
}

export default timeout
