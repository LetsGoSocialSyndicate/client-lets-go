/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, { Component } from 'react'
import '../assets/styles/NavigationBar.css'

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
            <li><a href="#"><img src={require('../assets/images/user.png')} alt="Menu"/></a></li>
            <li><a href="#"><img src={require('../assets/images/events.png')} alt="Menu"/></a></li>
            <li><a href="#"><img src={require('../assets/images/home.png')} alt="Menu"/></a></li>
            <li><a href="#"><img src={require('../assets/images/paper-plane.png')} alt="Menu"/></a></li>
            <li><a href="#"><img src={require('../assets/images/plus.png')} alt="Menu"/></a></li>
          </ul>
        </div>
      )
    }
    return ''
  }
  render() {
    return (
      <div>
        <div className="nav">
          <span className="menu">
            { this.props.isUserLoggedIn ? <img src={require('../assets/images/Menu Icon - 3 Dots.png')} alt="Menu" onClick={this.toggle} /> : null }
          </span>
          <div className="logo">
            <img src={require('../assets/images/lets-go-darkblue.png')} alt="Let's Go Logo"/>
          </div>
          <span className="brand">
            <img src={require('../assets/images/Lets Go Word.png')} alt="Let's Go"/>
          </span>
        </div>
        { this.renderMenu() }
      </div>
    )
  }
}

/*
{ this.props.isUserLoggedIn ? <img src={require('../assets/images/ellipsis-h.svg')} alt="Menu" onClick={this.toggle} /> : null }
*/
export default NavigationBar
