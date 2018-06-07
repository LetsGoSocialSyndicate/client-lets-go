/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { bindActionCreators } from 'redux'
import NewEventForm from './NewEventForm'
import '../../assets/styles/Events.css'
import { addNewEvent } from '../../actions/actionFeeds'

class NewEventPage extends Component {
  constructor(props) {
    super(props)
    console.log('constructor', props)
  }

  onSubmit = (action, fields) => {
    console.log("NewEventPage ON SUBMIT:", fields, this.props.token)
    action(fields, this.props.token, this.props.history)
  }

  render() {
    const action = (fields) => this.onSubmit(this.props.addNewEvent, fields)
    return (
      <div className="page">
        <NewEventForm onSubmit={ action }/>
        <p className="error" id="new-event-error"></p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addNewEvent }, dispatch)

const mapStateToProps = (state) => {
  console.log('mapStateToProps---', { ...state.auth })
  return { ...state.auth }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewEventPage))
