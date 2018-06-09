/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { createInputFieldComponent } from '../../utilities/guiUtils'

const TextInputField = createInputFieldComponent('email')

const EmailComponent = ({ labelTitle, fieldName, placeholder, required}) => {
  return (
    <div className="row form-group">
      <label className="col-form-label">{labelTitle}</label>
      <TextInputField name={fieldName}
        className="form-control"
        placeholder={placeholder}
        required={required} />
    </div>
  )
}

export default EmailComponent
