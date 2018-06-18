/* Copyright 2018, Socializing Syndicate Corp. */
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"
import {bindActionCreators} from 'redux'
import '../../assets/styles/Signup.css'

import {verifyCode} from '../../actions/actionAuth'
import VerifyCodeForm, {VERIFICATION_CODE} from './VerifyCodeForm'

const VerifyCodePage = ({auth, verifyCode}) => {
  const action = (fields) => verifyCode(fields[VERIFICATION_CODE], auth.email)
  return auth.email
    ? (<div className="after-signup-message page">
      <p>
        Please check<br/> {auth.email}<br/>
        for a verification code:
      </p>
      <VerifyCodeForm errorMsg={auth.error} onSubmit={action}/>
    </div>)
    : (<div className="page">
      <p>Something went wrong - email is undefined.</p>
    </div>)
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  verifyCode
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(VerifyCodePage)
