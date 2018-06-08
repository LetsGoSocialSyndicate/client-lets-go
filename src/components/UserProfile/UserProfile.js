/* Copyright 2018, Socializing Syndicate Corp. */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../../assets/styles/UserProfile.css'
import { fetchOtherUser, updateProfile, startEditing, cancelEditing } from '../../actions/actionUser'

const handleSave = (user, token, updateAction) => {
  const about = document.querySelector('#aboutToEdit').value || ''
  const updateInfo = { about }
  updateAction(updateInfo, user, token)
}

const buttonEditDiv = (startEditing) => (
  <div className="buttonEdit">
    <button id="edit" type="button" className="btn btn-user" onClick={startEditing}>
      Edit
    </button>
  </div>
)

const buttonsSaveDiv = (user, token, updateProfile, cancelEditing) => (
  <div className="buttons">
    <button id="save" type="button" className="btn btn-user" onClick={() => {
        handleSave(user, token, updateProfile)
      }}>
      Save
    </button>
    <button id="cancel" type="button" className="btn btn-user" onClick={cancelEditing}>
      Cancel
    </button>
  </div>
)

const constructButtons = (
  user,
  token,
  isReadOnly,
  startEditing,
  updateProfile,
  cancelEditing
) => (
  isReadOnly ?
  buttonEditDiv(startEditing) :
  buttonsSaveDiv(user, token, updateProfile, cancelEditing)
)

const constructAboutInput = (value, isReadOnly) => (
  isReadOnly ?
  <p className="overflow-visible">{value}</p> :
  <textarea id="aboutToEdit" type="text" defaultValue={value}></textarea>
)

class UserProfile extends Component {
  componentDidMount() {
    if (this.props.forOtherUser) {
      this.props.fetchOtherUser(this.props.match.params.id, this.props.auth.token)
    }
  }

  render() {
    const forOtherUser = this.props.forOtherUser

    const user = forOtherUser
      ? this.props.user.otherUser
      : this.props.user.user
    const isReadOnly = forOtherUser
      ? true
      : this.props.user.isReadOnly

    if (!user) {
      return <div className="page">Loading...</div>
    }
    return (
      <div className="container-user-top">
        <div className="container container-user">
          <div className="image">
            <img className="user-image" src={require('../../assets/images/bastian.jpg')}
            alt="user image"/>
          </div>
          <div className="user-name">
            <h1>{`${user.first_name} ${user.last_name}`}</h1>
          </div>
          <div className="user-about">
            <p>
              {constructAboutInput(user.about, isReadOnly)}
            </p>
          </div>
          <div>
            <h4>Add photos...</h4>
          </div>
        </div>
        { forOtherUser
            ? null
            : constructButtons(
                user,
                this.props.auth.token,
                isReadOnly,
                this.props.startEditing,
                this.props.updateProfile,
                this.props.cancelEditing )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, auth: state.auth}
}

const dispatchToProps = (dispatch) => bindActionCreators({
  fetchOtherUser,
  updateProfile,
  startEditing,
  cancelEditing
}, dispatch)
export default connect(mapStateToProps, dispatchToProps)(UserProfile)
