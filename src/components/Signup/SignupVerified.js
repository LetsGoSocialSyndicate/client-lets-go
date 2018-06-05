/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Signup.css'

//TODO: get user by email, and
// say "Hello user.firstName!" ....
const SignupVerified = ({token, email}) => {
  return (
    <div>
      <h1>
        Your account has been verified!
      </h1>
      <p> Please continue to build your Profile on the next page... </p>
      <p> You will be redirected in 3 seconds... </p>
    </div>
  )
}

export default SignupVerified
