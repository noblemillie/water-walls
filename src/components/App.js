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
<<<<<<< HEAD
        <Waterfalls />
=======
        <body>
          <Waterfalls />
        </body>
>>>>>>> bdf9e4c2acaab945a7344e006f2573e17454a524
      </div>
    );
  }
}

export default App;
