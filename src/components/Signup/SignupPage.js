/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"
import {bindActionCreators} from 'redux'

import SignupForm, {
  FIRST_NAME_FIELD,
  MIDDLE_NAME_FIELD,
  LAST_NAME_FIELD,
  GENDER_FIELD,
  EMAIL_FIELD,
  USERNAME_FIELD,
  PASSWORD_FIELD,
  PASSWORD2_FIELD
} from './SignupForm'

import {signupSubmit} from '../../actions/actionAuth'

/**
 * Validates signup form. For each invalid field, corresponding
 * DOM element will be initialized with error description. For
 * each valid field, corresponding DOM element will be set
 * to null.
 *
 * @param {object} fields - object where:
 *    keys are form field names (see imported constants above)
 *    values are form field values
 * @returns {boolean} true if all fields are valid,
 *    false otherwise.
 */
const validateAndSetErrors = (fields) => {
  let hasErrors = false
  let element = "signup-error"
  if (fields[PASSWORD_FIELD] !== fields[PASSWORD2_FIELD]) {
    document.getElementById(element).innerHTML = "Password does not match"
    hasErrors = true
  } else {
    // TODO: Check: empty string still takes space on HTML page...
    document.getElementById(element).innerHTML = ""
  }
  // TODO: Check: email does not contain @ characters
  // TODO: Check: email is not in database
  return !hasErrors
}

/**
 * Handles submit action of  signup form. In case of invalid
 * form fields, does not proceed with submit action and instead
 * shows error at the bottom of the page.
 *
 * @param {function} action - action to take on valid form submission
 * @param {object} fields - signup form fields
 */
const onSubmit = (action, history, fields) => {
  console.log("SignupPage ON SUBMIT:", fields)
  if (validateAndSetErrors(fields)) {
    action(fields, history)
  }
}

const SignupPage = ({signupSubmit, history}) => {
  // Need to pass to onSubmit():
  //   signupSubmit and history coming from current context
  //   fields coming from actual "form submit" invocation context
  const action = (fields) => onSubmit(signupSubmit, history, fields)
  return (<div className="page">
    <SignupForm onSubmit={ action }/>
    <p className="error" id="signup-error"></p>
  </div>)
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  signupSubmit
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(SignupPage))
