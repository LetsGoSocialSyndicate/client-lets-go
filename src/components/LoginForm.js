/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../assets/styles/Login.css'
import NavigationBar from './NavigationBar'

import { loginSubmit } from '../actions/actionAuth'

const LoginForm = (props) => {
  return (
    <div className="page">
      <NavigationBar />
      Login Form
      <form className="form-group">
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginSubmit }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginForm)
