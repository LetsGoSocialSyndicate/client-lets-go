/* Copyright 2018, Socializing Syndicate Corp. */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import '../../assets/styles/UserProfile.css'
import {fetchUser, updateProfile, startEditing, cancelEditing} from '../../actions/actionUser'

const handleSave = (user, token, updateAction) => {
  const about = document.querySelector('#aboutToEdit').value || ''
  const updateInfo = {
    about: about
  }
  updateAction(updateInfo, user, token)
}

const buttonEditDiv = (startEditing) => {
  return (<div className="buttonEdit">
    <button id="edit" type="button" className="btn" onClick={startEditing}>
      Edit
    </button>
  </div>)
}

const buttonsSaveDiv = (user, token, updateProfile, cancelEditing) => {
  return (<div className="buttons">
    <button id="save" type="button" className="btn" onClick={() => {
        handleSave(user, token, updateProfile)
      }}>
      Save
    </button>
    <button id="cancel" type="button" className="btn" onClick={cancelEditing}>
      Cancel
    </button>
  </div>)
}

const constructButtons = (user, token, isReadOnly, startEditing, updateProfile, cancelEditing) => {
  if (isReadOnly) {
    return buttonEditDiv(startEditing)
  } else {
    return buttonsSaveDiv(user, token, updateProfile, cancelEditing)
  }
}

const constructAboutInput = (value, isReadOnly) => {
  if (isReadOnly) {
    return (<p className="overflow-visible">{value}</p>)
  } else {
    return (<input id="aboutToEdit" type="text" defaultValue={value}></input>)
  }
}

class UserProfile extends Component {
  // componentDidMount() {
  //   this.props.fetchUser(this.props.auth.email)
  // }

  render() {
    console.log("UserProfile render and props are:", this.props.user.user)
    if (!this.props.user) {
      return <div className="page">Loading...</div>
    }
    const user = this.props.user.user
    const isReadOnly = this.props.user.isReadOnly

    return (<div className="container-user-top">
      <div className="container container-user">
        <div className="image">
          <img className="user-image" src={require('../../assets/images/bastian.jpg')} alt="waaa bee boo dada!"/>
        </div>
        <div className="user-name">
          <h3>{user.first_name}
            {user.last_name}</h3>
        </div>
        <div className="user-about">
          <h3>
            {constructAboutInput(user.about, isReadOnly)}
          </h3>
        </div>
        <div>
          <h4>Add photos...</h4>
        </div>
      </div>
      {constructButtons(user, this.props.auth.token, isReadOnly, this.props.startEditing, this.props.updateProfile, this.props.cancelEditing)}
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, auth: state.auth}
}

const dispatchToProps = (dispatch) => bindActionCreators({
  //fetchUser,
  updateProfile,
  startEditing,
  cancelEditing
}, dispatch)
export default connect(mapStateToProps, dispatchToProps)(UserProfile)
