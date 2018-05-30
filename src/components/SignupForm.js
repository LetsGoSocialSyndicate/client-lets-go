/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../assets/styles/Login.css'

import { signupSubmit } from '../actions/actionAuth'

const SignupForm = (props) => {
  return (
    <div className="page">
      Signup Form
      <form className="form-group">
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signupSubmit }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignupForm)
