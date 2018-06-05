/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from './Login/LoginForm'

const EventsRoute = ({ component: Component, token }) => {
  // if (token) {
    return <Route render={(props) => <Component {...props}/> } />
  // }
  // else {
  //   return <LoginForm />
  // }
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(EventsRoute)
