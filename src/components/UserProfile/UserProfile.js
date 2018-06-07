/* Copyright 2018, Socializing Syndicate Corp. */
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {withRouter} from "react-router-dom"
import {bindActionCreators} from 'redux'
import '../../assets/styles/UserProfile.css'
import {fetchUser, updateProfile} from '../../actions/actionUser'

const handleSave = (newInfo, routerHistory, editAction) => {
  const about = document.querySelector('#aboutToEdit').value || ''
  const editedInfo = {
    about: about
  }
  editAction(editedInfo)
  routerHistory.push('/profile')
}

const buttonEditDiv = (user, history) => {
  return(
    <div className="buttonEdit">
      <button id="edit" type="button" className="btn"
              onClick={() => { history.push(`/edit/${user.id}`) }
      }>Edit
      </button>
    </div>
  )
}

const buttonsSaveDiv = (user, history, editProfile) => {
  return(
    <div className="buttons">
      <button id="save" type="button" className="btn"
        onClick={() => { handleSave(user, history, editProfile)}}>
        Save
      </button>
      <button id="cancel" type="button" className="btn"
        onClick={() => { history.push('/profile') }}>
        Cancel
      </button>
    </div>
  )
}

const constructButtons = (isReadOnly) => {
  let buttons
  if (isReadOnly) {
    buttons = buttonEditDiv(this.state.user, this.props.history)
  } else {
    buttons = buttonsSaveDiv(this.state.user, this.props.history, this.props.editMessage)
  }
}

const constructAboutInput = (value, isReadOnly) => {
  if (isReadOnly) {
    return (<p className="overflow-visible">{ value }</p>)
  } else {
    return (<input id="aboutToEdit" type="text" defaultValue={ value }></input>)
  }
}


class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.auth.email)
  }

  render() {
    console.log("UserProfile render and props are:", this.props.user.user)
    if (!this.props.user) {
      return <div className="page">Loading...</div>
    }
    return (
      <div className="container-user-top">
        <div className="container container-user">
          <div className="image">
            <img className="user-image" src={require('../../assets/images/bastian.jpg')} alt="waaa bee boo dada!"/>
          </div>
          <div className="user-name">
            <h3>{this.props.user.user.first_name} {this.props.user.user.last_name}</h3>
          </div>
          <div className="user-about">
            <h3>
              {constructAboutInput(this.props.user.user.about, this.props.isReadOnly)}
            </h3>
          </div>
          <div>
            <h4>Add photos...</h4>
          </div>
        </div>
        {constructButtons(this.props.isReadOnly)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, auth: state.auth}
}

const dispatchToProps = (dispatch) => bindActionCreators({
  fetchUser,
  updateProfile
}, dispatch)
export default connect(mapStateToProps, dispatchToProps)(UserProfile)
