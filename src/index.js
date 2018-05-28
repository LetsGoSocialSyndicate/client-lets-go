/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

ReactDOM.render(
  (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={ LoginForm } />
          <Route path="/signup" component={ SignupForm } />
          <Route path="/" component={ HomeComponent } />
        </Switch>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'))

registerServiceWorker()
