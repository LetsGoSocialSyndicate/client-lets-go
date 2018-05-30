import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import SignupForm from './SignupForm'

const SignupRoute = ({ component: Component, token }) => {
  if (token) {
    return <Route render={(props) => <Component {...props}/> } />
  }
  else {
    return <SignupForm />
  }
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(SignupRoute)
