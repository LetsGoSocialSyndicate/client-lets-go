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

  // events = [
  //   {
  //     id: 1,
  //     title: 'Who wants to road bike through Flagstaff?',
  //     location: 'Boulder, CO',
  //     icon_name: 'tree',
  //     start_time: 'Today at 11:55am',
  //     duration_min: 120,
  //     description: "We're getting together to bash some bad guys and play video games in the park",
  //     owner: "Bastian"
  //   },
  //   {
  //     id: 2,
  //     title: "Volunteering at the farmer's market, who's in?",
  //     location: 'Boulder, CO',
  //     icon_name: 'bicycle',
  //     start_time: 'Tomorrow at 5:00pm',
  //     duration_min: 60,
  //     description: "We'll be pedalling around town looking for networking opportunities",
  //     owner: "Eric"
  //   },
  //   {
  //     id: 3,
  //     title: 'Hanging with Groot',
  //     location: 'Boulder, CO',
  //     icon_name: 'tree',
  //     start_time: 'Today at 11:55am',
  //     duration_min: 120,
  //     description: "We're getting together to bash some bad guys and play video games in the park",
  //     owner: "Groot"
  //   },
  //   {
  //     id: 4,
  //     title: 'Bike Riding with Eric',
  //     location: 'Boulder, CO',
  //     icon_name: 'bicycle',
  //     start_time: 'Tomorrow at 5:00pm',
  //     duration_min: 60,
  //     description: "We'll be pedalling around town looking for networking opportunities",
  //     owner: "Eric"
  //   },
  //   {
  //     id: 5,
  //     title: 'Hanging with Groot',
  //     location: 'Boulder, CO',
  //     icon_name: 'tree',
  //     start_time: 'Today at 11:55am',
  //     duration_min: 120,
  //     description: "We're getting together to bash some bad guys and play video games in the park",
  //     owner: "Groot"
  //   },
  //   {
  //     id: 6,
  //     title: 'Bike Riding with Eric',
  //     location: 'Boulder, CO',
  //     icon_name: 'bicycle',
  //     start_time: 'Tomorrow at 5:00pm',
  //     duration_min: 60,
  //     description: "We'll be pedalling around town looking for networking opportunities",
  //     owner: "Eric"
  //   },
  // ]


  renderEvents() {
    return (
      Object.values(this.props.eventFeeds)
      .map(event => {
        return (
          <li className="list-group-item event-li" key={event.id}>
            <div className="row row-event-owner">
              <div>
                <img className="owner-image-bg"
                  src={circle} />
                <img className="owner-image"
                  src={require('../assets/images/bastian.jpg')} alt="waaa bee boo dada!"/>
              </div>
              <div className="event-snapshot">
                <h4>{event.owner}<br />
                <small>
                {event.start_time}<br />
                {event.location}
              </small></h4>
              </div>
            </div>
            <div className="row row-event-info">
              <h3>{event.title}</h3>
              <div className="event-image-holder">
                <img className="event-image-bg"
                  src={circle} />
                <img className="event-image"
                  src={require('../assets/images/groot.png')} alt="I am Groot!"/><br />
              </div>
              <Link className="request-to-join"
                to={`events/${event.id}`}>
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
    console.log('render', this.props)
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
