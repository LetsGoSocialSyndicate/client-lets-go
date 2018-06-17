/*
 * Copyright 2018, Socializing Syndicate Corp.
 */

import React, { Component } from 'react'
import { Field } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import { DATE_FORMAT, TIME_FORMAT } from '../constants'
import '../assets/styles/datePicker.css'

const createInputFieldComponent = (type) => {
  return class extends Component {
    render() {
      console.log('this.props', this.props)
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

const renderDatePicker = ({ input, placeholder, defaultValue, meta: {touched, error} }) => {
  return (
    <div>
      <DatePicker {...input} dateForm={DATE_FORMAT}
        className="form-control"
        showTimeSelect={false}
        peekNextMonth={true}
        showMonthDropdown={true}
        showYearDropdown={true}
        minDate={ moment() }
        maxDate={ moment().add(3, "days") }
        dropdownMode="select"
        required
        selected={input.value ? moment(input.value, DATE_FORMAT) : null}
        onChange={date => input.onChange(moment(date).format(DATE_FORMAT))}/>
      {touched && error && <span>{error}</span>}
    </div>
)}

const renderTimePicker = ({ input, placeholder, defaultValue, meta: {touched, error} }) => {
  return (
    <div>
      <DatePicker {...input} dateForm={TIME_FORMAT}
        className="form-control"
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        dropdownMode="select"
        required
        shouldCloseOnSelect={true}
        selected={input.value ? moment(input.value, TIME_FORMAT) : null}
        onChange={time => input.onChange(moment(time).format(TIME_FORMAT))}/>
      {touched && error && <span>{error}</span>}
    </div>
)}

export {
  createInputFieldComponent,
  createDropDownFieldComponent,
  renderDatePicker,
  renderTimePicker
}
