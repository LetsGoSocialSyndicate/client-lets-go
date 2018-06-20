/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { createInputFieldComponent } from '../../utilities/guiUtils'

const TextInputField = createInputFieldComponent('password')

const PasswordComponent = ({ labelTitle, fieldName, placeholder, required, usePattern}) => {
  return (
    <div className="row form-group">
      <label className="col-form-label">{labelTitle}</label>
      <TextInputField name={fieldName}
        className="form-control"
        placeholder={placeholder}
        required={required}
        title="Password must contain at least one upper case letter and at least one number, and must be at least 8 characters or more."
        pattern={usePattern ? process.env.REACT_APP_PASSWORD_RULE : null}/>
    </div>
  )
}

export default PasswordComponent
