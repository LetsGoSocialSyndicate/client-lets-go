import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../assets/styles/Login.css'

import { loginStart, signupStart } from '../actions/actionAuth'

const HomeComponent = (props) => {
  const onLoginClicked = (event) => {
    event.preventDefault()
    props.loginStart()
  }

  const onSignupClicked = (event) => {
    event.preventDefault()
    props.signupStart()
  }

  return (
    <div className="home">
      <button className="row btn btn-lg login-opt shadow-lg" onClick={ onLoginClicked }>Login</button>
      <button className="row btn btn-lg login-opt shadow-lg" onClick={ onSignupClicked }>Create an Account</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginStart, signupStart }, dispatch)
}
export default connect(null, mapDispatchToProps)(HomeComponent)
