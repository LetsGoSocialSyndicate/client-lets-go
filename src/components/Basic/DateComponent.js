/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Field } from 'redux-form'
import 'react-datepicker/dist/react-datepicker.css'
import { renderDatePicker } from '../../utilities/guiUtils'

const DateComponent = ({ labelTitle, fieldName }) => {
  return (
    <div className="row form-group">
      <label className="col-form-label">{labelTitle}</label>
      <Field name={fieldName} component={ renderDatePicker } />
    </div>
  )
}

export default DateComponent
