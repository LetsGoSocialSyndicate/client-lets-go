/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Groot from '../assets/images/groot.png'
import bottom_line from '../assets/images/bottom_line.png'
import requestButton from '../assets/images/Test.png'
import circle from '../assets/images/bgCircleGradient.png'

class EventFeeds extends Component {
  // componentDidMount(){
  //   this.props.fetchEvents()
  // }

  events = [
    {
      id: 1,
      title: 'Hanging with Groot',
      location: 'Boulder, CO',
      icon_name: 'tree',
      start_time: 'Today at 11:55am',
      duration_min: 120,
      description: "We're getting together to bash some bad guys and play video games in the park",
      owner: "Groot"
    },
    {
      id: 2,
      title: 'Bike Riding with Eric',
      location: 'Boulder, CO',
      icon_name: 'bicycle',
      start_time: 'Tomorrow at 5:00pm',
      duration_min: 60,
      description: "We'll be pedalling around town looking for networking opportunities",
      owner: "Eric"
    },
    {
      id: 3,
      title: 'Hanging with Groot',
      location: 'Boulder, CO',
      icon_name: 'tree',
      start_time: 'Today at 11:55am',
      duration_min: 120,
      description: "We're getting together to bash some bad guys and play video games in the park",
      owner: "Groot"
    },
    {
      id: 4,
      title: 'Bike Riding with Eric',
      location: 'Boulder, CO',
      icon_name: 'bicycle',
      start_time: 'Tomorrow at 5:00pm',
      duration_min: 60,
      description: "We'll be pedalling around town looking for networking opportunities",
      owner: "Eric"
    },
    {
      id: 5,
      title: 'Hanging with Groot',
      location: 'Boulder, CO',
      icon_name: 'tree',
      start_time: 'Today at 11:55am',
      duration_min: 120,
      description: "We're getting together to bash some bad guys and play video games in the park",
      owner: "Groot"
    },
    {
      id: 6,
      title: 'Bike Riding with Eric',
      location: 'Boulder, CO',
      icon_name: 'bicycle',
      start_time: 'Tomorrow at 5:00pm',
      duration_min: 60,
      description: "We'll be pedalling around town looking for networking opportunities",
      owner: "Eric"
    },
  ]


  renderEvents() {
    return (
      this.events.map(event => {
        return (
          <li className="list-group-item event-li" key={event.id}>
            <div className="row row-event-owner">
              <div>
                <img className="owner-image-bg"
                  src={circle} />
                <img className="owner-image"
                  src={Groot} alt="I am Groot!"/>
              </div>
              <div className="event-snapshot">
                <h4>{event.owner}</h4>
                {event.start_time}<br />
                {event.location}
              </div>
            </div>
            <div className="row row-event-info">
              <h3>{event.title}</h3><br />
              {event.icon_name}<br />
              <i class="far fa-tree"></i>
              <Link className="request-to-join"
                to={`events/${event.id}`}>
                <img className="requestButton" src={requestButton} />
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
    console.log('this.events', this.events)

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

const mapStateToProps =  (state) => state.eventFeeds

export default connect(mapStateToProps)(EventFeeds)
