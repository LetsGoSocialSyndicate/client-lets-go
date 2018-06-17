/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from "react-router-dom"
import {bindActionCreators} from 'redux'
import '../../assets/styles/Login.css'

import ForgotPasswordForm from './ForgotPasswordForm'

import {loginSubmit} from '../../actions/actionAuth'

const onSubmit = (action, history, fields) => {
  console.log("ForgotPasswordPage ON SUBMIT:", fields)
  action(fields, history)
}

const ForgotPasswordPage = ({auth, loginSubmit, history}) => {
  console.log("ForgotPasswordPage render")
  const action = (fields) => onSubmit(loginSubmit, history, fields)
  return (<div className="page">
    <ForgotPasswordForm onSubmit={ action }/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage))
