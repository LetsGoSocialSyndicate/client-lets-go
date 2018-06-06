/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../assets/styles/Requests.css'
import { fetchMyEventFeeds } from '../../actions/actionFeeds'

class RequestPage extends Component {
  componentDidMount() {
    this.props.fetchMyEventFeeds(this.props.user, false)
  }

  render() {
    if (!this.props.eventFeeds.isLoaded) {
      return ( <div>Loading...</div>)
    }
    return (
      <div className="container-requests-top">
      my events
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state.eventFeeds, ...state.user }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMyEventFeeds }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestPage)
