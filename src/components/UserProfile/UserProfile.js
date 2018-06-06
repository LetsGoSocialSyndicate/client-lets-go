/* Copyright 2018, Socializing Syndicate Corp. */
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {withRouter} from "react-router-dom"
import {bindActionCreators} from 'redux'
import '../../assets/styles/UserProfile.css'
import {fetchUser} from '../../actions/actionUser'

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
          <div className="row row-user-about">
            <h3>{this.props.user.user.about}</h3>
          </div>
          <div>
            <h4>Add photos...</h4>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, auth: state.auth}
}

const dispatchToProps = (dispatch) => bindActionCreators({
  fetchUser
}, dispatch)
export default connect(mapStateToProps, dispatchToProps)(UserProfile)
