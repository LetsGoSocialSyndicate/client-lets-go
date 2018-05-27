import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../assets/styles/Login.css'

import { loginSubmit } from '../actions/actionAuth'

const LoginForm = (props) => {
  return (
    <div className="row">
      Login Form
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginSubmit }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginForm)
