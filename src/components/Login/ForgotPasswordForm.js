/* Copyright 2018, Socializing Syndicate Corp. */

import React from 'react'
import {reduxForm} from 'redux-form'
import EmailComponent from '../Basic/EmailComponent'
import '../../assets/styles/Login.css'

export const EMAIL_FIELD = "email"

const ForgotPasswordForm = ({handleSubmit, errorMsg}) => {
  return (<form className="forgot-password-form container" onSubmit={handleSubmit}>
    <EmailComponent labelTitle="Please enter your email:"
                    fieldName={EMAIL_FIELD} placeholder="" required={true}/>
    <p className="error" id="forgot-password-error">{errorMsg}</p>
    <div className="row form-group">
      <button type="submit" className="row btn btn-md submit">Submit</button>
    </div>
  </form>)
}

export default reduxForm({form: 'forgot-password'})(ForgotPasswordForm)
