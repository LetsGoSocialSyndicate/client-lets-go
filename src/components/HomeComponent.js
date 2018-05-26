import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../assets/styles/Login.css'

import { login, signup } from '../actions/actionAuth'

const HomeComponent = (props) => {
  return (
    <div className="home">
      <button className="row btn btn-lg login-opt shadow-lg">Login</button>
      <button className="row btn btn-lg login-opt shadow-lg">Create an Account</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login, signup }, dispatch)
}
export default connect(null, mapDispatchToProps)(HomeComponent)
