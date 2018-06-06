import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNewEvent } from '../../actions/actionFeeds'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import '../../assets/styles/Events.css'
import { DATE_FORMAT } from '../../constants'

export const TITLE_FIELD = "title"
export const LOCATION_FIELD = "location"
export const CATEGORY_FIELD = "category"
export const DESCRIPTION_FIELD = "description"
export const START_TIME_FIELD = "startTime"
export const END_TIME_FIELD = "endTime"
export const ICON_URL_FIELD = "iconUrl"

const NewEvent = (props) => {
  return (
    <div className="container-events-top">
      <div className="container container-events">
        <div className="row row-event-owner">
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addNewEvent }, dispatch)

export default connect(null, mapDispatchToProps)(NewEvent)
