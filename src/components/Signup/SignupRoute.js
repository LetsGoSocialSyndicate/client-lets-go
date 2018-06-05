/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SignupPage from './SignupPage'
import CheckEmail from './CheckEmail'
import SignupError from './SignupError'

const SignupRoute = ({ isUserLoggedIn, error, email }) => {
  const landingPage = () => isUserLoggedIn
    // TODO: create page and route "You are logged in, continue or sign out"
    ? (<Redirect to="/"/>)
    : (<SignupPage/>)

  return (
    <Switch>
      <Route exact path="/signup" render={landingPage}/>
      <Route exact path="/signup/success" render={() => <CheckEmail email={email}/>}/>
      <Route exact path="/signup/failure" render={() => <SignupError error={error}/>}/>
    </Switch>
  )
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(SignupRoute)
