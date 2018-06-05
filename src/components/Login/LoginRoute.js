/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'

const LoginRoute = ({ component: Component, token }) => {
  if (token) {
    return <Route render={(props) => <Component {...props}/> } />
  }
  else {
    return <LoginPage />
  }
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(LoginRoute)
