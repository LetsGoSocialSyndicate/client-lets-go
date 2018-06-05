import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNewEvent } from '../../actions/actionFeeds'

const NewEvent = (props) => {
  return (
    <div>Create a new event</div>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addNewEvent }, dispatch)

export default connect(null, mapDispatchToProps)(NewEvent)
