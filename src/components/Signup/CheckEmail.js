/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Signup.css'

const CheckEmail = ({email}) => {
  return !email ? null : (
    <div>
      <h1>
        Please check {email} for a verification link...
      </h1>
    </div>
  )
}

export default CheckEmail
