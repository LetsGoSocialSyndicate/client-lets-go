/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"
import {bindActionCreators} from 'redux'
import '../../assets/styles/Login.css'

import LoginForm, {
  EMAIL_FIELD,
  PASSWORD_FIELD
} from './LoginForm'

import {loginSubmit} from '../../actions/actionAuth'

const onSubmit = (action, history, fields) => {
  console.log("LoginPage ON SUBMIT:", fields)
  action(fields, history)
}

const LoginPage = ({loginSubmit, history}) => {
  console.log("LoginPage render")
  const action = (fields) => onSubmit(loginSubmit, history, fields)
  return (<div className="page">
    <LoginForm onSubmit={ action }/>
    <p className="error" id="login-error"></p>
  </div>)
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginSubmit
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(LoginPage))
