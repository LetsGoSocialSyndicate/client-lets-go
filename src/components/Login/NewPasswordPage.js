/* Copyright 2018, Socializing Syndicate Corp. */
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import {verifyCode} from '../../actions/actionAuth'
import '../../assets/styles/Login.css'

import NewPasswordForm, {
  VERIFICATION_CODE,
  PASSWORD_FIELD,
  PASSWORD2_FIELD
} from './NewPasswordForm'

const validateAndSetErrors = (fields) => {
  let hasErrors = false
  let element = "new-password-error"
  if (fields[PASSWORD_FIELD] !== fields[PASSWORD2_FIELD]) {
    document.getElementById(element).innerHTML = "Password does not match"
    hasErrors = true
  } else {
    document.getElementById(element).innerHTML = ""
  }
  return !hasErrors
}

const onSubmit = (action, fields, email) => {
  console.log("NewPasswordPage ON SUBMIT:", fields)
  if (validateAndSetErrors(fields)) {
    action(fields[VERIFICATION_CODE], email, fields[PASSWORD_FIELD])
  }
}

const checkForError = (error) => {
  if (error) {
    return (<p>
      Verification code is wrong...
    </p>)
  }
}
// from auth (state) we take email and error
// but error we overwrite validateAndSetErrors
const NewPasswordPage = ({auth, verifyCode}) => {
  console.log("NewPasswordPage error", auth.error)
  const action = (fields) => onSubmit(verifyCode, fields, auth.email)
  return (<div className="new-password page">
    <p>
      Please check<br/>{auth.email}<br/>
      for a verification code:
    </p>
    <NewPasswordForm errorMsg={auth.error} onSubmit={action}/>
  </div>)
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  verifyCode
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewPasswordPage)
