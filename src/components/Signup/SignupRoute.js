/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SignupPage from './SignupPage'

const SignupRoute = ({ isUserLoggedIn }) => {
  const landingPage = () => isUserLoggedIn
    // TODO: create page and route "You are logged in, continue or sign out"
    ? (<Redirect to="/login"/>)
    : (<SignupPage/>)

  return (<Route exact path="/signup" render={landingPage}/>)
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(SignupRoute)
