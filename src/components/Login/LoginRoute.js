/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'

const LoginRoute = ({ isUserLoggedIn }) => {
  console.log("LoginRoute", isUserLoggedIn)
  const landingPage = () => isUserLoggedIn
    // TODO: create page and route "You are logged in, continue or sign out"
    ? (<Redirect to="/"/>)
    : (<LoginPage/>)

  return (<Route exact path="/login" render={landingPage}/>)
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(LoginRoute)
