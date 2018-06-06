/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, { Component } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'font-awesome/css/font-awesome.css'
import './assets/styles/App.css'
import NavigationBar from './components/NavigationBar'
import LoginPage from './components/Login/LoginPage'
import SignupPage from './components/Signup/SignupPage'
import EventFeeds from './components/EventFeeds'
import NewEventPage from './components/Event/NewEventPage'

class App extends Component {
  render() {
    const isUserLoggedIn = this.props.isUserLoggedIn

    console.log("App isUserLoggedIn",isUserLoggedIn)

    let homeLandingPage = () => (<Redirect to="/login"/>)
    let loginLandingPage = () => (<LoginPage/>)
    let signupLandingPage = () => (<SignupPage/>)
    if (isUserLoggedIn) {
      homeLandingPage = () => (<EventFeeds/>)
      loginLandingPage = () => (<Redirect to="/"/>)
      signupLandingPage = () => (<Redirect to="/"/>)
    }

    return (
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/" render={ homeLandingPage } />
          <Route exact path="/login" render={ loginLandingPage } />
          <Route exact path="/signup" render={ signupLandingPage } />
          <Route exact path="/newevent" component={ NewEventPage } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.auth

export default withRouter(connect(mapStateToProps)(App))
