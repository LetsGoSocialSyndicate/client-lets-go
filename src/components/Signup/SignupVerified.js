/* Copyright 2018, Socializing Syndicate Corp. */
import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import '../../assets/styles/Signup.css'
import {bindActionCreators} from 'redux'
import {verifyAccount} from '../../actions/actionAuth'
import {countDownStart, countingDown, countDownFinish} from '../../actions/actionTimeout'

class SignupVerified extends Component {

  async componentDidMount() {
    console.log("SignupVerified token:", this.props.match.params.token)
    this.props.verifyAccount(this.props.match.params.token)
  }

  componentWillMount() {
    this.timer = null
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  updateTimer() {
    let timeout = 3
    if (this.props.timeout.countingDown) {
      timeout = this.props.timeout.counter
      if (this.props.timeout.counter <= 0) {
        clearInterval(this.timer)
        this.timer = null
        this.props.countDownFinish(this.props.history)
      }
    } else {
      // TODO: This works fine but with warning:
      //  Cannot update during an existing state transition...
      this.props.countDownStart(timeout)
      this.timer = setInterval(() => this.props.countingDown(), 1000)
    }
    return timeout
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
      let timeout = this.updateTimer()
      return (<div>
        <h1>
          Your account has been verified!
        </h1>
        <p>
          You will be redirected to profile page in {timeout} seconds...
        </p>
        <Link to='/profile'>
          <button className="row btn btn-md submit">Go to Profile now</button>
        </Link>
      </div>)
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
  return {auth: state.auth, timeout: state.timeout}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  verifyAccount,
  countDownStart,
  countingDown,
  countDownFinish
}, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupVerified))
