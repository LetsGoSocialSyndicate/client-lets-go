/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import '../../assets/styles/NavigationBar.css'

const NavigationButton = ({bar, to, alt, img, action}) => {
  const onClick = () => {
    bar.setState({ isOpen: false })
    if (action) {
      action()
    }
    bar.props.history.push("/" + to)
  }
  return (
    <span className="navButton" onClick={onClick}>
      <img src={require('../../assets/images/' + img)} alt={alt}/>
    </span>
  )
}

export default NavigationButton
