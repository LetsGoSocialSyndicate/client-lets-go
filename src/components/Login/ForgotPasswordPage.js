/* Copyright 2018, Socializing Syndicate Corp. */
import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from "react-router-dom"
import {bindActionCreators} from 'redux'
import '../../assets/styles/Login.css'

import ForgotPasswordForm, {EMAIL_FIELD} from './ForgotPasswordForm'

import {sendCodeForPassword} from '../../actions/actionAuth'

const onSubmit = (action, history, email) => {
  console.log("ForgotPasswordPage ON SUBMIT:", email)
  action(email, history)
}
const checkForError = (error) => {
  if (error) {
    return (<p>
      This email is unregisted.
    </p>)
  }
}
const ForgotPasswordPage = ({auth, sendCodeForPassword, history}) => {
  console.log("ForgotPasswordPage render")
  const action = (fields) => onSubmit(sendCodeForPassword, history, fields[EMAIL_FIELD])
  return (<div className="page">
    <ForgotPasswordForm errorMsg={auth.error} onSubmit={action}/>
    <Link to='/signup'>Create account</Link>
    <Link to='/login'>Login</Link>

  </div>)
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  sendCodeForPassword
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage))
