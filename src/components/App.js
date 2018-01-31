import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Waterfalls from './Waterfalls.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Water Walls</h1>
        </header>
        <body>
          <Waterfalls />
        </body>
      </div>
    );
  }
}

export default App;
