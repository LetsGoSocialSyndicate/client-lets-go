/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import 'react-datepicker/dist/react-datepicker.css'
import { createDropDownFieldComponent,
  renderDateTimePicker
} from '../../utilities/guiUtils'
import TextComponent from '../Basic/TextComponent'

export const TITLE_FIELD = 'title'
export const LOCATION_FIELD = 'location'
export const CATEGORY_FIELD = 'category'
export const DESCRIPTION_FIELD = 'description'
export const START_TIME_FIELD = 'startTime'
export const END_TIME_FIELD = 'endTime'
export const ICON_URL_FIELD = 'iconUrl'

const CategoryOptionsField =
  createDropDownFieldComponent('Category',
   ['Hiking', 'Skiing', 'Biking', 'Movie', 'Yoga'])

const NewEventForm = ({ handleSubmit }) => {
  return (
    <form className="signup-form container-new-event"
          onSubmit={ handleSubmit }>
      <TextComponent labelTitle="Title:" fieldName={TITLE_FIELD}
        placeholder="Title" required={true}/>
      <TextComponent labelTitle="Location:" fieldName={LOCATION_FIELD}
        placeholder="Location" required={true}/>
      <div className="row form-group">
        <label className="col-form-label">Category:</label>
        <CategoryOptionsField name={ CATEGORY_FIELD }
          className="form-control"
          required />
      </div>
      <TextComponent labelTitle="Description:" fieldName={DESCRIPTION_FIELD}
        placeholder="Description"/>
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
