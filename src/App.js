import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import SearchContainer from './containers/SearchContainer'
import CalendarContainer from './containers/CalendarContainer'
import SwitcherContainer from './containers/SwitcherContainer'
import EventModalContainer from './containers/EventModalContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <SearchContainer />
        </Header>
        <div className="container">
          <SwitcherContainer />
          <CalendarContainer />
        </div>
        <EventModalContainer />
      </div>
    )
  }
}

export default App
