/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter} from 'react-router-dom'
import '../assets/styles/NavigationBar.css'
import ellipsis from '../assets/images/ellipsis-h.svg'
import {logout} from '../actions/actionAuth'
import NavigationLink from './Basic/NavigationLink'
import NavigationButton from './Basic/NavigationButton'

class NavigationBar extends Component {
  constructor(props) {
    super(props)
    // should we move this state to Redux??
    this.state = { isOpen: false }
  }

  toggle = (event) => {
    event.preventDefault()
    this.setState({ isOpen: !this.state.isOpen })
  }

  renderMenu() {
    if (this.state.isOpen) {
      return (
        <div className="dropdown">
          <ul>
            <NavigationLink divClassName="nb-user-profile" navBar={this}
              destination="profile" altText="User profile" image="user.png" />
            <NavigationLink divClassName="nb-notification" navBar={this}
              destination="notification" altText="Notification" image="events.png" />
            <NavigationLink divClassName="nb-requests" navBar={this}
              destination="requests" altText="Requests" image="paper-plane.png" />
            <NavigationLink divClassName="nb-newevent" navBar={this}
              destination="newevent" altText="Create a new event" image="plus.png" />
            <NavigationLink divClassName="nb-logout" navBar={this}
              destination="" altText="Logout" image="exit.png" action={this.props.logout}/>
          </ul>
        </div>
      )
    }
    return ''
  }
  render() {
    return (
      <div className="menu-div">
        <div className="nav">
          <span className="menu">
            { this.props.isUserLoggedIn ? <img src={require('../assets/images/ellipsis.png')} alt="Menu" onClick={this.toggle} /> : null }
          </span>
          <div className="logo">
            <NavigationButton bar={this} to=""
                              alt="Let's Go Logo" img="letsgo_rgb_white.png" />
          </div>
          <span className="brand">
            <NavigationButton bar={this} to=""
                              alt="Let's Go" img="Lets Go Word.png" />
          </span>
        </div>
        { this.renderMenu() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.auth
}
const dispatchToProps = (dispatch) => bindActionCreators({
  logout
}, dispatch)

export default withRouter(connect(mapStateToProps, dispatchToProps)(NavigationBar))
