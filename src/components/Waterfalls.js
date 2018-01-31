import React, { Component } from 'react';

class Waterfalls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walls: [],
      height: 2
    };
  }
import App from './App.js'

class Waterfalls extends Component {

  handleClick(event) {
    this.setState({height: event.target.value});
    event.preventDefault();
  }

  render() {
    return (
      <div className="Waterfalls">
        <header className="Waterfalls-header">
        </header>
        <form onSubmit={(e) => {this.handleClick(e)}}>
          <label>
            Add a wall
            <input type="text" max="10" required />
            <input type="submit" value="Add"/>
          </label>
        </form>
      </div>
    );
  }
}

export default Waterfalls;
