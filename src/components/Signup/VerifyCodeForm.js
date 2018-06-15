/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Signup.css'
import TextComponent from '../Basic/TextComponent'
import { Field, reduxForm } from 'redux-form'

export const VERIFICATION_CODE = "VERIFICATION_CODE"

const VerifyCodeForm = ({error, handleSubmit}) => {
  return (
      <form className="signup-form container"
            onSubmit={ handleSubmit }>
      <TextComponent
        placeholder=""
        labelTitle="Verification code: "
        fieldName={VERIFICATION_CODE}
        required={true}
      />
      <p className="error" id="verify-code-error">{error}</p>
      <div className="row form-group">
        <button type="submit" className="row btn btn-md submit">Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'verifyCode'})(VerifyCodeForm)
