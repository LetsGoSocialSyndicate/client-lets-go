import { FETCH_EVENT_FEEDS } from '../constants'

const mockFeeds = [
  { id: 1, title: 'Bike around Boulder', location: 'Table Mesa Trail'},
  { id: 2, title: 'Friday Movie Night', location: 'Century Boulder'}
]
const fetchEventFeeds = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_EVENT_FEEDS,
      payload: mockFeeds
    })
  }
}
