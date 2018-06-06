import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import { DATE_TIME_FORMAT } from '../../constants'
import { createInputFieldComponent, createDropDownFieldComponent,
  renderDateTimePicker
} from '../../utilities/guiUtils'

export const TITLE_FIELD = 'title'
export const LOCATION_FIELD = 'location'
export const CATEGORY_FIELD = 'category'
export const DESCRIPTION_FIELD = 'description'
export const START_TIME_FIELD = 'startTime'
export const END_TIME_FIELD = 'endTime'
export const ICON_URL_FIELD = 'iconUrl'

const TextInputField = createInputFieldComponent('text')
const CategoryOptionsField =
  createDropDownFieldComponent('Category',
   ['Hiking', 'Skiing', 'Biking', 'Movie', 'Yoga'])

const NewEventForm = ({ handleSubmit }) => {
  return (
    <form className="signup-form container"
          onSubmit={ handleSubmit }>
      <div className="row form-group">
        <label className="col-form-label">Title:</label>
        <TextInputField name={ TITLE_FIELD }
          className="form-control"
          placeholder="Title"
          required />
      </div>
      <div className="row form-group">
        <label className="col-form-label">Location:</label>
        <TextInputField name={ LOCATION_FIELD }
          className="form-control"
          placeholder="Location"
          required />
      </div>
      <div className="row form-group">
        <label className="col-form-label">Category:</label>
        <CategoryOptionsField name={ CATEGORY_FIELD }
          className="form-control"
          required />
      </div>
      <div className="row form-group">
        <label className="col-form-label">Start:</label>
        <Field name={ START_TIME_FIELD } component={ renderDateTimePicker } />
      </div>
      <div className="row form-group">
        <label className="col-form-label">End:</label>
        <Field name={ END_TIME_FIELD } component={ renderDateTimePicker } />
      </div>
      <div className="row form-group">
        <button type="submit" className="row btn btn-md submit">Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'newevent' })(NewEventForm)
