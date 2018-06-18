/* Copyright 2018, Socializing Syndicate Corp. */
import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import {bindActionCreators} from 'redux'
import '../../assets/styles/Login.css'

import LoginForm from './LoginForm'

import {loginSubmit} from '../../actions/actionAuth'

const onSubmit = (action, fields) => {
  console.log("LoginPage ON SUBMIT:", fields)
  action(fields)
}

const LoginPage = ({auth, loginSubmit}) => {
  console.log("LoginPage render")
  const action = (fields) => onSubmit(loginSubmit, fields)
  return (<div className="page">
    <LoginForm onSubmit={action}/>
    <p className="error">{auth.error}</p>
    <Link to='/signup'>Create account</Link>
    <Link to='/login/forgot_password'>Forgot password?</Link>
  </div>)
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginSubmit
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
