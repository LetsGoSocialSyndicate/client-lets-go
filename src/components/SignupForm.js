import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../assets/styles/Login.css'

import { signupSubmit } from '../actions/actionAuth'

const SignupForm = (props) => {
  return (
    <div className="row">
      Signup Form
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signupSubmit }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignupForm)
