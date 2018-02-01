import React, { Component } from 'react';
import Walls from "./Walls";
import "./WaterWalls.css";
import logo from './logo.svg';


class WaterWalls extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      walls: [],
      height: 2
    };

    this.addWall = this.addWall.bind(this);
    this.deleteWall = this.deleteWall.bind(this);
  }

  addWall(e) {
    var wallArray = this.state.walls;
    // if a value has been entered upon submit, add it to the array of walls
    if (this._inputElement.value !== "") {
      // add a new wall object the the array. Set key to use date as unique identifier
      wallArray.unshift({
          text: this._inputElement.value,
          key: Date.now()
      });
      // set state new newly modified array
      this.setState({
        walls: wallArray
      });
      // clear input box once set
      this._inputElement.value = "";
    }

    console.log(wallArray);
    // prevent default clear and reload behavior inherent to html forms
    e.preventDefault();
  }


  deleteWall(key) {
    var filteredWalls = this.state.walls.filter(function (wall) {
      return (wall.key !== key);
    });

    this.setState({
      walls: filteredWalls
    });
  }

  // handleChange(event) {
  //   this.setState({height: event.target.value});
  // }
  //
  // handleClick(event) {
  //   var joined = this.state.walls.concat(Number(this.state.height));
  //   this.setState({ walls: joined })
  //   event.preventDefault();
  // }


  render() {
    return (
      <div className="waterWallsMain">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Water Walls</h1>
        </div>
        <form onSubmit={this.addWall}>
          <input ref={(a) => this._inputElement = a}
                  placeholder="enter wall height">
          </input>
          <button type="submit">build the wall</button>
        </form>
        <Walls entries={this.state.walls}
          delete={this.deleteWall} />
      </div>
    );
  }
}

export default WaterWalls;
