/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/Signup.css'

const CheckEmail = ({email}) => {
  return !email ? null : (
    <div className="after-signup-message">
      <p>
        Please check<br />
        {email}<br />
        for a verification link...
      </p>
    </div>
  )
}

export default CheckEmail
