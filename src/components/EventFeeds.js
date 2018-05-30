import React from 'react'
import { connect } from 'react-redux'

const EventFeeds = (props) => {
  return (
    <div>
      Event Feeds Here
    </div>
  )
}

const mapStateToProps =  (state) => state.eventFeeds

export default connect(mapStateToProps)(EventFeeds)
