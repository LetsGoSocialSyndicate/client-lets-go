import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import App from './App'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore({
  people: {
    allIds: [],
    byId: {},
    fetchingPeople: true,
  }
})

describe('App', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('renders without error', () => {
    fetchMock.get('end:/api/people', {
      "_links": {
        "self": {
          "href": "http://localhost:8082/api/people"
        }
      },
      "_embedded": {
        "people": [
          {
            "_links": {
              "self": {
                "href": "http://localhost:8082/api/people/1"
              }
            },
            "id": 1,
            "subject": "Hi",
            "starred": true,
            "read": true,
            "labels": [
              "dev",
              "personal"
            ]
          },
        ]
      }
    })

    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter>
        <Provider store={ store }>
          <App />
        </Provider>
      </MemoryRouter>
      , div)
  })
})
