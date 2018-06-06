/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Signup.css'

const SignupError = ({error}) => {
  return !error ? null : (
    <div className="after-signup-message">
      <p>
        {error}
      </p>
    </div>
  )
}

export default SignupError
