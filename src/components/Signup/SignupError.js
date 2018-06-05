/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Signup.css'

const SignupError = ({error}) => {
  return (
    <div>
      <p>
        {error}
      </p>
    </div>
  )
}

export default SignupError
