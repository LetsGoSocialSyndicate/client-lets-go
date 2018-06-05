/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../assets/styles/NavigationBar.css'
import ellipsis from '../assets/images/ellipsis-h.svg'

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
            <li>
              <Link to='userprofile'>
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
              <Link to='logout'>
                <div className="logout">
                  <img src={require('../assets/images/exit.png')} alt="Logout"/>
                </div>
              </Link>
            </li>
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
            <Link to="/">
              <img src={require('../assets/images/letsgo_rgb_white.png')} alt="Let's Go Logo"/>
            </Link>
          </div>
          <span className="brand">
            <Link to="/">
              <img src={require('../assets/images/Lets Go Word.png')} alt="Let's Go"/>
            </Link>
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

/*
{ this.props.isUserLoggedIn ? <img src={require('../assets/images/ellipsis-h.svg')} alt="Menu" onClick={this.toggle} /> : null }
*/
export default connect(mapStateToProps)(NavigationBar)
