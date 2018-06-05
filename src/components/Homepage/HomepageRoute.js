/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import EventFeeds from '../EventFeeds'

const HomepageRoute = ({ isUserLoggedIn }) => {
  console.log("HomepageRoute", isUserLoggedIn)
  const landingPage = () => !isUserLoggedIn
    ? (<Redirect to="/login"/>)
    : (<EventFeeds/>)

  return (<Route exact path="/" render={landingPage}/>)
}

const mapStateToProps = (state) => state.auth

export default withRouter(connect(mapStateToProps)(HomepageRoute))
