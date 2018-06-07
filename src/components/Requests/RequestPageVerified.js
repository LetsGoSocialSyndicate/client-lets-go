/* Copyright 2018, Socializing Syndicate Corp. */
import React, {Component} from 'react'
import {Link, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import '../../assets/styles/Signup.css'
import {bindActionCreators} from 'redux'
import {verifyAccount} from '../../actions/actionAuth'

class RequestPageVerified extends Component {

  async componentDidMount() {
    console.log("RequestPageVerified token:", this.props.match.params.token)
    this.props.verifyAccount(this.props.match.params.token, "/login")
  }

  render() {
    if (!this.props.auth.verified) {
      return (<div>
        <h1>
          Verifying...
        </h1>
      </div>)
    }

    if (this.props.auth.isUserLoggedIn) {
      return (<Redirect to="/requests"/>)
    } else {
      return (<div>
        <h1>
          Verification Failure
        </h1>
        <p>
          Error: {this.props.auth.error}
        </p>
      </div>)
    }
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  verifyAccount,
}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RequestPageVerified))
