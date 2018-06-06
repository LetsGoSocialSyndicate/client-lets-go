/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { bindActionCreators } from 'redux'
import NewEventForm, { TITLE_FIELD,
  LOCATION_FIELD,
  CATEGORY_FIELD,
  DESCRIPTION_FIELD,
  START_TIME_FIELD,
  END_TIME_FIELD,
  ICON_URL_FIELD
} from './NewEventForm'
import '../../assets/styles/Events.css'
import { addNewEvent } from '../../actions/actionFeeds'

const onSubmit = (action, history, fields) => {
  console.log("NewEventPage ON SUBMIT:", fields)
  action(fields, history)
}

const NewEventPage = ({ addNewEvent, history }) => {
  // Need to pass to onSubmit():
  //   signupSubmit and history coming from current context
  //   fields coming from actual "form submit" invocation context
  const action = (fields) => onSubmit(addNewEvent, history, fields)
  return (<div className="page">
    <NewEventForm onSubmit={ action }/>
    <p className="error" id="new-event-error"></p>
  </div>)
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addNewEvent }, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(NewEventPage))
