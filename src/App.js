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
import SignupVerified from './components/Signup/SignupVerified'
import EventFeeds from './components/EventFeeds'
import NewEventPage from './components/Event/NewEventPage'
import CheckEmail from './components/Signup/CheckEmail'
import SignupError from './components/Signup/SignupError'
import UserProfile from './components/UserProfile/UserProfile'
import RequestPage from './components/Requests/RequestPage'

class App extends Component {
  render() {
    const isUserLoggedIn = this.props.isUserLoggedIn
    const email = this.props.email
    const error = this.props.error

    console.log("App isUserLoggedIn",isUserLoggedIn)

    let homeLandingPage = () => (<Redirect to="/login"/>)
    let userProfileLandingPage = () => (<Redirect to="/login"/>)
    let loginLandingPage = () => (<LoginPage/>)
    let signupLandingPage = () => (<SignupPage/>)
    let signupSuccessLandingPage = () => (<CheckEmail email={email}/>)
    let signupFailureLandingPage = () => (<SignupError error={error}/>)
    let newEventLandingPage = () => (<Redirect to="/login"/>)
    let requestsLandingPage = () => (<Redirect to="/login"/>)

    if (isUserLoggedIn) {
      homeLandingPage = () => (<EventFeeds/>)
      userProfileLandingPage = () => (<UserProfile/>)
      loginLandingPage = () => (<Redirect to="/"/>)
      signupLandingPage = () => (<Redirect to="/"/>)
      newEventLandingPage = () => (<NewEventPage error={error}/>)
      requestsLandingPage = () => (<RequestPage error={error}/>)
    }

    return (
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/" render={ homeLandingPage } />
          <Route exact path="/profile" render={ userProfileLandingPage } />
          <Route exact path="/login" render={ loginLandingPage } />
          <Route exact path="/signup" render={ signupLandingPage } />
          <Route exact path="/signup/success" render={ signupSuccessLandingPage } />
          <Route exact path="/signup/failure" render={ signupFailureLandingPage } />
          <Route exact path="/newevent" render={ newEventLandingPage } />
          <Route exact path="/requests" component={ RequestPage } />
          <Route path="/confirmation/:token" component={ SignupVerified } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.auth

export default withRouter(connect(mapStateToProps)(App))
