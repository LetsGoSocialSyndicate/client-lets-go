/* Copyright 2018, Socializing Syndicate Corp. */
import React from 'react'
import {Link} from 'react-router-dom'
import '../../assets/styles/Login.css'
import TextComponent from '../Basic/TextComponent'
import PasswordComponent from '../Basic/PasswordComponent'

import {Field, reduxForm} from 'redux-form'

export const VERIFICATION_CODE = "VERIFICATION_CODE"
export const PASSWORD_FIELD = "password"
export const PASSWORD2_FIELD = "confirmPassword"

const NewPasswordForm = ({errorMsg, handleSubmit}) => {
  return (<form className="new-password-form container" onSubmit={handleSubmit}>
    <TextComponent placeholder=""
                   labelTitle="Verification code: "
                   fieldName={VERIFICATION_CODE}
                   required={true}/>
    <PasswordComponent labelTitle="Password:"
                       fieldName={PASSWORD_FIELD}
                       placeholder="Password"
                       required={true}
                       usePattern={true}/>
    <PasswordComponent labelTitle="Confirm Password:"
                       fieldName={PASSWORD2_FIELD}
                       placeholder="Password"
                       required={true}
                       usePattern={true}/>
    <p className="error" id="new-password-error">{errorMsg}</p>
    <div className="row form-group">
      <button type="submit" className="row btn btn-md submit">Submit</button>
    </div>
  </form>)
}

export default reduxForm({form: 'verifyCode'})(NewPasswordForm)
