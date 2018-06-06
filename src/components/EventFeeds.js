/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import bottom_line from '../assets/images/bottom_line.png'
import requestButton from '../assets/images/Test.png'
import circle from '../assets/images/bgCircleGradient.png'
import '../assets/styles/Events.css'
import {fetchEventFeeds} from '../actions/actionFeeds'


class EventFeeds extends Component {
  componentDidMount(){
    this.props.fetchEventFeeds()
  }

  renderEvents() {
    return (
      Object.values(this.props.eventFeeds)
      .map(event => {
        let eventDate = {
          date: "2018/05/03",
          time: "10:45:11"
          // date: new Date(event.event_start_time).toDateString().substr(4,7),
          // time: (event.event_start_time).substr(11,5)
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
              </small></h4>
              </div>
            </div>
            <div className="row row-event-info">
              <h3>{event.event_title}</h3>
              <div className="event-image-holder">
                <img className="event-image-bg"
                  src={circle} />
                <img className="event-image"
                  src={event.event_icon_url}
                  alt={event.event_title} /><br />
              </div>
              <Link className="request-to-join"
                to={`events/${event.event_id}`}>
                <div className="oval">
                  <img className="requestButton" src={requestButton} />
                </div>
              </Link>
            </div>
            <img className="eventDivider" src={bottom_line} />
            <br />
          </li>
        )
      })
    )
  }

  render() {
    if (!this.props.isLoaded) {
      return <div>Loading...</div>
    }
    return (
      <div className="container-events-top">
        <div className="container container-events">
          <ul className="list-group">
            {this.renderEvents()}
          </ul>
        </div>
      </div>
    )
  }

}

const mapStateToProps =  (state) => ({ ...state.eventFeeds })

const dispatchToProps = (dispatch) => bindActionCreators({
  fetchEventFeeds
}, dispatch)

export default connect(mapStateToProps, dispatchToProps)(EventFeeds)
