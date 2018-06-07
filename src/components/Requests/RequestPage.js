/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import bottom_line from '../../assets/images/bottom_line.png'
import circle from '../../assets/images/bgCircleGradient.png'
import acceptedButton from '../../assets/images/accepted.png'
import messageButton from '../../assets/images/message.png'
import '../../assets/styles/Events.css'
import '../../assets/styles/Requests.css'
import { fetchMyEventFeeds } from '../../actions/actionFeeds'
import { verifyLoggedIn } from '../../actions/actionRequestPage'

class RequestPage extends Component {
  componentDidMount() {
    this.props.fetchMyEventFeeds(this.props.user, false, this.props.token)
    this.props.verifyLoggedIn(this.props.match.params.token)
  }

  renderEvents() {
    return (
      Object.values(this.props.eventFeeds)
      .map(event => {
        let eventDate = {
          date: new Date(event.event_start_time).toDateString().substr(4,7),
          time: (event.event_start_time).substr(11,5)
        }
        return (
          <li className="list-group-item event-li" key={event.event_id}>
            <div className="row row-event-owner">
              <div>
                <img className="owner-image-bg"
                  src={circle} />
                <img className="owner-image"
                  src={event.user_image_url} alt="waaa bee boo dada!"/>
              </div>
              <div className="event-snapshot">
                <h4>{event.first_name} {event.last_name}<br />
                  <small>
                    {eventDate.date} at {eventDate.time}<br />
                    {event.event_location}
                  </small>
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="event-image-holder event-image-overlap">
                <img className="event-image-bg"
                  src={circle} />
                <img className="event-image"
                  src={event.event_icon_url}
                  alt={event.event_title} /><br />
              </div>
              <div className="buttons-overlap">
                <Link className="request-to-join" to={`events/${event.event_id}`}>
                  <div className="oval screenButton">
                    <img className="screenButton" src={acceptedButton} />
                  </div>
                </Link>
                <Link className="request-to-join" to={`events/${event.event_id}`}>
                  <div className="oval screenButton">
                    <img className="screenButton" src={messageButton} />
                  </div>
                </Link>
              </div>
            </div>
            <img className="eventDivider" src={bottom_line} />
            <br />
          </li>
        )
      })
    )
  }

  render() {
    if (!this.props.auth.verified || !this.props.isLoaded) {
      return (<div>Loading...</div>)
    }

      return (
        <div className="container-requests-top">
          <div className="container container-events">
            <ul className="list-group">
              {this.renderEvents()}
            </ul>
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return { ...state.eventFeeds, ...state.user, ...state.auth }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMyEventFeeds, verifyLoggedIn }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RequestPage))
