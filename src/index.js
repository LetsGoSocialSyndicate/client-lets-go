import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './assets/styles/index.css'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

import HomeComponent from './components/HomeComponent'
import NavigationBar from './components/NavigationBar'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

ReactDOM.render(
  (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className="app">
          <NavigationBar />
          <Route exact={ true } path="/" component={ HomeComponent } />
        </div>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'))

registerServiceWorker()
