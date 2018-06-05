import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNewEvent } from '../../actions/actionFeeds'
import circle from '../../assets/images/bgCircleGradient.png'
import '../../assets/styles/Events.css'

const NewEvent = (props) => {
  return (
    <div className="container-events-top">
      <div className="container container-events">
        <div className="row row-event-owner">
          <div>
            <img className="owner-image-bg" src={circle} alt="background image"/>
            <img className="owner-image" src={require('../../assets/images/bastian.jpg')} alt="waaa bee boo dada!"/>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addNewEvent }, dispatch)

export default connect(null, mapDispatchToProps)(NewEvent)
