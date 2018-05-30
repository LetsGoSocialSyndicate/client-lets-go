import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'

const LoginRoute = ({ component: Component, token }) => {
  if (token) {
    return <Route render={(props) => <Component {...props}/> } />
  }
  else {
    return <LoginForm />
  }
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(LoginRoute)
