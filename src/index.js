/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './assets/styles/index.css'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

import App from './App'

const logger = createLogger()

const store = createStore(
  reducers,
  // Disable logging - it is too verbose.
  composeWithDevTools(applyMiddleware(thunk, /*logger*/))
)


ReactDOM.render(
  (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </div>
    </Provider>
  ), document.getElementById('root'))

registerServiceWorker()
