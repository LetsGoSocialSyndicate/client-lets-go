/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Field } from 'redux-form'
import 'react-datepicker/dist/react-datepicker.css'
import { renderDatePicker, renderTimePicker } from '../../utilities/guiUtils'

const DateTimeComponent = ({ labelTitle, fieldName }) => {
  return (
    <div className="row form-group">
      <label className="col-form-label">{labelTitle}</label>
      <Field name={fieldName} component={ renderDatePicker } />
      <Field name={`${fieldName}_TIME`} component={ renderTimePicker } />
    </div>
  )
}

export default DateTimeComponent
