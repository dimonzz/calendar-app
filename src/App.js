import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Calendar from './components/Calendar';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Search></Search>
        </Header>
        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;
