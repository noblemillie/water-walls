import React, { Component } from 'react';

class Waterfalls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walls: [],
      height: 2
    };
  }

  handleChange(event) {
    this.setState({height: event.target.value});
  }

  handleClick(event) {
    var joined = this.state.walls.concat(Number(this.state.height));
    this.setState({ walls: joined })
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
            <input type="text" max="10" onChange={(e) => {this.handleChange(e)}} required />
            <input type="submit" value="Add"/>
          </label>
        </form>
      </div>
    );
  }
}

export default Waterfalls;
