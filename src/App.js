import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import CalendarContainer from './containers/CalendarContainer';
import SwitcherContainer from './containers/SwitcherContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Search></Search>
        </Header>
        <div>
          <SwitcherContainer></SwitcherContainer>
          <CalendarContainer></CalendarContainer>
        </div>
      </div>
    );
  }
}

export default App;
