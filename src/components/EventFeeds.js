/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Groot from '../assets/images/groot.png'
import bottom_line from '../assets/images/assets_5.28-09.png'

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
    }
  ]


  renderEvents() {
    return (
      this.events.map(event => {
        return (
          <li className="list-group-item" key={event.id}>
            <div className="row">
              <div className="owner-image">
                <img src={Groot} alt="I am Groot!"/>
              </div>
              <div className="event-info">
                {event.owner}<br />
                {event.start_time}<br />
                {event.location}
              </div>
            </div>
            <div className="row">
              {event.title}<br />
              {event.icon_name}<br />
              <Link className="request-to-join"
                to={`events/${event.id}`}>
                request to join
              </Link>
            </div>
            <img src={bottom_line} />
          </li>
        )
      })
    )
  }

  render() {
    console.log('this.events', this.events)

    return (
      <div>
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
