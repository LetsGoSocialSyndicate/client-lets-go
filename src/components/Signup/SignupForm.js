/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import '../../assets/styles/Login.css'

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

export const FIRST_NAME_FIELD = "firstName"
export const MIDDLE_NAME_FIELD = "middleName"
export const LAST_NAME_FIELD = "lastName"
export const GENDER_FIELD = "gender"
export const EMAIL_FIELD = "email"
export const USERNAME_FIELD = "username"
export const PASSWORD_FIELD = "password"
export const PASSWORD2_FIELD = "confirmPassword"

const createInputFieldComponent = (type) => {
  return class extends Component {
    render() {
      return (<Field component="input" type={type} {...this.props}/>)
    }
  }
}

const createDropDownFieldComponent = (dropDownName, options) => {
  return class extends Component {
    render() {
      return (
        <Field component="select" {...this.props}>
          <option value="">Select a {dropDownName}...</option>
          {options.map(opt => (
            <option value={opt} key={opt}>{opt}</option>
          ))}
        </Field>
      )
    }
  }
}

const TextInputField = createInputFieldComponent("text")
const EmailInputField = createInputFieldComponent("email")
const PasswordInputField = createInputFieldComponent("password")
const GenderOptionsField =
  createDropDownFieldComponent("Gender",
   ["Male", "Female", "Depends on my mood"])


/**
 * Generates signup form based on redux-form.
 *
 * @param {function} handleSubmit - action to take on form submision.
 * @returns generated form.
 */
const SignupForm = ({handleSubmit}) => {
  return (
      <form className="login-form container"
            onSubmit={handleSubmit}>
        <div className="row form-group">
          <label htmlFor="firstName">First Name:</label>
          <TextInputField name={FIRST_NAME_FIELD}
            className="form-control"
            placeholder="First Name"
            required />
        </div>
        <div className="row form-group">
          <label className="col-form-label">Middle Name:</label>
          <TextInputField name={MIDDLE_NAME_FIELD}
            className="form-control"
            placeholder="Middle Name"
            required />
        </div>
        <div className="row form-group">
          <label className="col-form-label">Last Name:</label>
          <TextInputField name={LAST_NAME_FIELD}
            className="form-control"
            placeholder="Last Name"
            required />
        </div>
        <div className="row form-group">
          <label className="col-form-label">Gender:</label>
          <GenderOptionsField name={GENDER_FIELD}
            className="form-control"
            required />
        </div>
        <div className="row form-group">
          <label className="col-form-label">Email:</label>
          <EmailInputField name={EMAIL_FIELD}
            className="form-control"
            placeholder="Email"
            required />
        </div>
        <div className="row form-group">
          <label className="col-form-label">Username:</label>
          <TextInputField name={USERNAME_FIELD}
            className="form-control"
            placeholder="Username"
            required />
        </div>
        <div className="row form-group">
          <label className="col-form-label">Password:</label>
          {/* TODO: is it ok to keep RAW password as part of redux-form state??? */}
          <PasswordInputField name={PASSWORD_FIELD}
            className="form-control"
            placeholder="Password"
            required />
        </div>
        <div className="row form-group">
          <label className="col-form-label">Confirm Password:</label>
          <PasswordInputField name={PASSWORD2_FIELD}
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

export default reduxForm({form: 'signup'})(SignupForm)
