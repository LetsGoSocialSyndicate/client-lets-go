/*
 * Copyright 2018, Socializing Syndicate Corp.
 */
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'font-awesome/css/font-awesome.css'
import './assets/styles/App.css'
import NavigationBar from './components/NavigationBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
      </div>
    );
  }
}

export default App
