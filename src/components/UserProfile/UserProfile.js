/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {withRouter} from "react-router-dom"
// import {bindActionCreators} from 'redux'
import '../../assets/styles/UserProfile.css'
import whiteCircle from '../assets/images/whiteCircle.png'
import {fetchUser} from '../actions/actionUser'

//Need to pass id or user's email here from navbar button onClick.
//User is logged in, we just need his id or email
class UserProfile extends Component {
  componentDidMount(){
    this.props.fetchUser(id)
  }
  render() {
    console.log("UserProfile render and props are:", this.props)
    // if (!this.props.?????) {
    //   return <div>Loading...</div>
    // }
    return (
      <div className="page">
        Hello World! It is User Profile page.
        <li className="list-group-item user-li" key={user.id}>
          <div className="row row-user">
            <div>
              <div className="white-circle">
                {whiteCircle}
              </div>
              <img className="owner-image"
                src={require('../assets/images/bastian.jpg')} alt="waaa bee boo dada!"/>
            </div>
            <div className="user-name">
              <h4>{user.name}</h4>
            </div>
          </div>
          <div className="row row-user-about">
            <h3>{user.about}</h3>
          </div>
          <div>
            <h4>Add photos...</h4>
          </div>
          <br />
        </li>
      </div>)
}
const mapStateToProps =  (state) => ({ ...state.userInfo })

const dispatchToProps = (dispatch) => bindActionCreators({
  fetchUser
}, dispatch)
export default connect(mapStateToProps, dispatchToProps)(UserProfile)
