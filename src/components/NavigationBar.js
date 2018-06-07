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

const NavigationButton = ({bar, to, alt, img, action}) => {
  const onClick = () => {
    bar.setState({ isOpen: false })
    if (action) {
      action()
    }
    bar.props.history.push("/" + to)
  }
  return (
      <button className="navButton" onClick={onClick}>
        <img src={require('../assets/images/' + img)} alt={alt}/>
      </button>
  )
}

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
    // const handleLogout = () => {
    //   this.setState({ isOpen: false })
    //   this.props.logout()
    //   this.props.history.push("/")
    // }
    if (this.state.isOpen) {
      return (
        <div className="dropdown">
          <ul>
            <li>
              <div className="nb-user-profile">
                <NavigationButton bar={this} to="profile"
                                  alt="User profile" img="user.png" />
              </div>
            </li>
            <li>
              <div className="nb-notification">
                <NavigationButton bar={this} to="notification"
                                  alt="Notification" img="events.png" />
              </div>
            </li>
            <li>
              <div className="nb-requests">
                <NavigationButton bar={this} to="requests"
                                  alt="Requests" img="paper-plane.png" />
              </div>
            </li>
            <li>
              <div className="nb-newevent">
                <NavigationButton bar={this} to="newevent"
                                  alt="Create a new event" img="plus.png" />
              </div>
            </li>
            <li>
              <div className="nb-logout">
                <NavigationButton bar={this} to="" alt="Logout"
                                  img="exit.png" action={this.props.logout} />
              </div>
            </li>
          </ul>
          {/* <ul>
            <li>
              <Link to='profile'>
                <div>
                  <img src={require('../assets/images/user.png')} alt="User profile"/>
                </div>
              </Link>
            </li>
            <li>
              <Link to='notification'>
                <div>
                  <img src={require('../assets/images/events.png')} alt="Notification"/>
                </div>
              </Link>
            </li>
            <li>
              <Link to='requests'>
                <div>
                  <img src={require('../assets/images/paper-plane.png')} alt="Request"/>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/newevent'>
                <div>
                  <img src={require('../assets/images/plus.png')} alt="Create a new event"/>
                </div>
              </Link>
            </li>
            <li>
                <div className="logout">
                  <button onClick = {handleLogout}>
                    <img src={require('../assets/images/exit.png')} alt="Logout"/>
                  </button>
                </div>
            </li>
          </ul> */}
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
            {/* <Link to="/">
              <img src={require('../assets/images/letsgo_rgb_white.png')} alt="Let's Go Logo"/>
            </Link> */}
          </div>
          <span className="brand">
            <NavigationButton bar={this} to=""
                              alt="Let's Go" img="Lets Go Word.png" />

            {/* <Link to="/">
              <img src={require('../assets/images/Lets Go Word.png')} alt="Let's Go"/>
            </Link> */}
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
