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
import {connect} from 'react-redux'
import EmailComponent from '../Basic/EmailComponent'
import PasswordComponent from '../Basic/PasswordComponent'
import TextComponent from '../Basic/TextComponent'

const FIRST_NAME_FIELD = "firstName"
const MIDDLE_NAME_FIELD = "middleName"
const LAST_NAME_FIELD = "lastName"
const GENDER_FIELD = "gender"
const EMAIL_FIELD = "email"
const BIRTHDAY_FIELD = "birthday"
export const PASSWORD_FIELD = "password"
export const PASSWORD2_FIELD = "confirmPassword"

//Why we don't use also createInputFieldComponent ???

const GenderOptionsField =
  createDropDownFieldComponent("Gender",
   ["Male", "Female"])

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => {
  return (
    <div>
      <DatePicker {...input} dateForm={DATE_FORMAT}
        className="form-control"
        peekNextMonth={true}
        showMonthDropdown={true}
        showYearDropdown={true}
        dropdownMode="select"
        maxDate={moment().subtract(18, "years")}
        onChange={date => input.onChange(moment(date).format(DATE_FORMAT))}
        selected={input.value ? moment(input.value, DATE_FORMAT) : null}
        required />
      {touched && error && <span>{error}</span>}
    </div>
  )
}

/**
 * Generates signup form based on redux-form.
 *
 * @param {function} handleSubmit - action to take on form submision.
 * @returns generated form.
 */
const SignupForm = ({ auth, handleSubmit }) => {
  return (
    <form className="signup-form container"
          onSubmit={ handleSubmit }>
      <TextComponent labelTitle="First Name:" fieldName={FIRST_NAME_FIELD}
        placeholder="First Name" required={true}/>
      <TextComponent labelTitle="Last Name:" fieldName={LAST_NAME_FIELD}
        placeholder="Last Name" required={true}/>
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

      <EmailComponent labelTitle="Email:" fieldName={EMAIL_FIELD}
        placeholder="Email" required={true}/>
      <PasswordComponent labelTitle="Password:" fieldName={PASSWORD_FIELD}
        placeholder="Password" required={true} usePattern={true}/>
      <PasswordComponent labelTitle="Confirm Password:" fieldName={PASSWORD2_FIELD}
        placeholder="Password" required={true} usePattern={true}/>

      <p className="error" id="signup-error">{auth.error}</p>
      <div className="row form-group">
        <button type="submit" className="row btn btn-md submit">Submit</button>
      </div>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}
export default connect(mapStateToProps)(reduxForm({form: 'signup'})(SignupForm))
