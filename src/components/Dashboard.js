/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { connect } from 'react-redux'

const Dashboard = (props) => {
  return (
    <div>
      Welcome
    </div>
  )
}

const mapStateToProps =  (state) => state.eventFeeds

export default connect(mapStateToProps)(Dashboard)
