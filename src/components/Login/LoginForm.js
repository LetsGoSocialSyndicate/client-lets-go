/*
 * Copyright 2018, Socializing Syndicate Corp.
 */

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

export const EMAIL_FIELD = "email"
export const PASSWORD_FIELD = "password"

const createInputFieldComponent = (type) => {
  return class extends Component {
    render() {
      return (<Field component="input" type={type} {...this.props}/>)
    }
  }
}

const EmailInputField = createInputFieldComponent("email")
const PasswordInputField = createInputFieldComponent("password")

const LoginForm = ({ handleSubmit }) => {
  return (
      <form className="login-form container"
            onSubmit={ handleSubmit }>
        <div className="row form-group">
          <label className="col-form-label">Email:</label>
          <EmailInputField name={ EMAIL_FIELD }
            className="form-control"
            placeholder="Email"
            required />
        </div>
        <div className="row form-group">
          <label className="col-form-label">Password:</label>
          <PasswordInputField name={ PASSWORD_FIELD }
            className="form-control"
            placeholder="Password"
            required />
        </div>
        <div className="row form-group">
          <button type="submit" className="row btn btn-md submit">Submit</button>
        </div>
      </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm)
