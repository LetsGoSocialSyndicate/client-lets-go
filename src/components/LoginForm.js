/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../assets/styles/Login.css'

import { loginSubmit } from '../actions/actionAuth'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      token: ''
    }
  }

  onusernameChange = (event) => {
    event.preventDefault()
    this.setState({ ...this.state, username: event.target.value })
  }

  onPasswordChange = (event) => {
    event.preventDefault()
    this.setState({ ...this.state, password: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.loginSubmit({ username: this.state.username, password: this.state.password })
  }

  render() {
    return (
      <div className="page">
        <form className="login-form container" onSubmit={this.onSubmit}>
          <div className="row form-group">
            <label className="col-form-label">Username:</label>
            <input className="form-control"
              placeholder='Username'
              onChange={this.onusernameChange}
              value={this.state.username} required />
          </div>
          <div className="row form-group">
            <label className="col-form-label">Password:</label>
            <input className="form-control"
              type="password"
              placeholder='Password'
              onChange={this.onPasswordChange}
              value={this.state.password} required />
          </div>
          <div className="row form-group">
            <input className="row btn btn-md submit" type="submit"/>
          </div>
          <p className="error">{this.props.error}</p>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.auth
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginSubmit }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
