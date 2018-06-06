/*
 * Copyright 2018, Socializing Syndicate Corp.
 */

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import { DATE_TIME_FORMAT } from '../constants'
import '../assets/styles/datePicker.css'

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

const renderDateTimePicker = ({ input, placeholder, defaultValue, meta: {touched, error} }) => {
  return (
    <div>
      <DatePicker {...input} dateForm={DATE_TIME_FORMAT}
        className="form-control"
        showTimeSelect={true}
        peekNextMonth={true}
        showMonthDropdown={true}
        showYearDropdown={true}
        timeIntervals={15}
        minDate={ moment() }
        maxDate={ moment().add(3, "days") }
        dropdownMode="select"
        required
        onChange={date => input.onChange(moment(date).format(DATE_TIME_FORMAT))}/>
      {touched && error && <span>{error}</span>}
    </div>
)}

export { createInputFieldComponent, createDropDownFieldComponent, renderDateTimePicker }
