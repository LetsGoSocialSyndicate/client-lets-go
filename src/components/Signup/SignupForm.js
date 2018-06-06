/*
 * Copyright 2018, Socializing Syndicate Corp.
 */

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import { DATE_FORMAT } from '../../constants'
import { createInputFieldComponent, createDropDownFieldComponent } from '../../utilities/guiUtils'

export const FIRST_NAME_FIELD = "firstName"
export const MIDDLE_NAME_FIELD = "middleName"
export const LAST_NAME_FIELD = "lastName"
export const GENDER_FIELD = "gender"
export const EMAIL_FIELD = "email"
export const PASSWORD_FIELD = "password"
export const PASSWORD2_FIELD = "confirmPassword"
export const BIRTHDAY_FIELD = "birthday"

const TextInputField = createInputFieldComponent("text")
const EmailInputField = createInputFieldComponent("email")
const PasswordInputField = createInputFieldComponent("password")
const GenderOptionsField =
  createDropDownFieldComponent("Gender",
   ["Male", "Female"])

 const renderDatePicker = (
   {input, placeholder, defaultValue, meta: {touched, error} }) => {
   return (<div>
         <DatePicker {...input} dateForm={DATE_FORMAT}
         className="form-control"
         peekNextMonth={true}
         showMonthDropdown={true}
         showYearDropdown={true}
         dropdownMode="select"
         maxDate={moment().subtract(18, "years")}
         onChange={date => input.onChange(moment(date).format(DATE_FORMAT))}
         selected={input.value ? moment(input.value, DATE_FORMAT) : null} />
         {touched && error && <span>{error}</span>}
       </div>
 )}

/**
 * Generates signup form based on redux-form.
 *
 * @param {function} handleSubmit - action to take on form submision.
 * @returns generated form.
 */
const SignupForm = ({ handleSubmit }) => {
  return (
      <form className="signup-form container"
            onSubmit={ handleSubmit }>
        <div className="row form-group">
          <label htmlFor="firstName">First Name:</label>
          <TextInputField name={ FIRST_NAME_FIELD }
            className="form-control"
            placeholder="First Name"
            required />
        </div>
        <div className="row form-group">
          <label className="col-form-label">Last Name:</label>
          <TextInputField name={ LAST_NAME_FIELD }
            className="form-control"
            placeholder="Last Name"
            required />
        </div>
         <div className="row form-group">
          <label className="col-form-label">Birthday:</label>
          <Field name={ BIRTHDAY_FIELD }
                 component={renderDatePicker} />
        </div>
        <div className="row form-group">
          <label className="col-form-label">Gender:</label>
          <GenderOptionsField name={ GENDER_FIELD }
            className="form-control"
            required />
        </div>
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
          <label className="col-form-label">Confirm Password:</label>
          <PasswordInputField name={ PASSWORD2_FIELD }
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
