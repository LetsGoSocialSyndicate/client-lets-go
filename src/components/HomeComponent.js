/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Home.css'

const HomeComponent = (props) => {
  return (
    <div>
      <div className="home">
        <div >
          <Link className="btn btn-lg login-opt" to="/login">Login</Link>
        </div>
        <div >
          <Link className="btn btn-lg login-opt" to="/signup">Create an Account</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent
