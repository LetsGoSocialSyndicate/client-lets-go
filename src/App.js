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
<<<<<<< HEAD
import EventFeeds from './components/EventFeeds'
import NewEventPage from './components/Event/NewEventPage'
=======
import SignupVerified from './components/Signup/SignupVerified'
import EventFeeds from './components/EventFeeds'
import NewEvent from './components/Event/NewEvent'
import CheckEmail from './components/Signup/CheckEmail'
import SignupError from './components/Signup/SignupError'
>>>>>>> redirect works

class App extends Component {
  render() {
    const isUserLoggedIn = this.props.isUserLoggedIn
    const email = this.props.email
    const error = this.props.error

    console.log("App isUserLoggedIn",isUserLoggedIn)

    let homeLandingPage = () => (<Redirect to="/login"/>)
    let loginLandingPage = () => (<LoginPage/>)
    let signupLandingPage = () => (<SignupPage/>)
    let signupSuccessLandingPage = () => (<CheckEmail email={email}/>)
    let signupFailureLandingPage = () => (<SignupError error={error}/>)
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
<<<<<<< HEAD
          <Route exact path="/newevent" component={ NewEventPage } />
=======
          <Route exact path="/signup/success" render={ signupSuccessLandingPage } />
          <Route exact path="/signup/failure" render={ signupFailureLandingPage } />
          <Route exact path="/newevent" component={ NewEvent } />
          <Route path="/confirmation/:token" component={ SignupVerified } />
          {/* <LoginRoute /> */}
          {/* <SignupRoute /> */}
>>>>>>> redirect works
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.auth

export default withRouter(connect(mapStateToProps)(App))
