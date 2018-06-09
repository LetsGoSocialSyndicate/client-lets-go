/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React from 'react'
import '../../assets/styles/NavigationBar.css'
import NavigationButton from './NavigationButton'

const NavigationLink = ({ divClassName, navBar, destination, altText, image, action }) => {
  return (
    <li>
      <div className={divClassName}>
        <NavigationButton bar={navBar} to={destination}
                        alt={altText} img={image} action={action}/>
      </div>
    </li>
  )
}

export default NavigationLink
