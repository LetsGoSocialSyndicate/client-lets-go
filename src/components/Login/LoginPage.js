/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from "react-router-dom"
import {bindActionCreators} from 'redux'
import '../../assets/styles/Login.css'

import LoginForm from './LoginForm'

import {loginSubmit} from '../../actions/actionAuth'

const onSubmit = (action, history, fields) => {
  console.log("LoginPage ON SUBMIT:", fields)
  action(fields, history)
}

const LoginPage = ({auth, loginSubmit, history}) => {
  console.log("LoginPage render")
  const action = (fields) => onSubmit(loginSubmit, history, fields)
  return (<div className="page">
    <LoginForm onSubmit={ action }/>
    <p className="error">{auth.error}</p>
    <Link to='/signup'>Create account</Link>
    <Link to='/forgot-password'>Forgot password?</Link>
  </div>)
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginSubmit
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage))
