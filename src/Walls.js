import React, { Component } from "react";
import FlipMove from 'react-flip-move';

class Walls extends Component {
  constructor(props, context) {
    super(props, context);

    this.createWalls = this.createWalls.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createWalls(wall) {
    return <li onClick={() => this.delete(wall.key)} key={wall.key}>{wall.text}</li>
  }

  render() {
    var wallEntries = this.props.entries;
    var mapWalls = wallEntries.map(this.createWalls);

    return (
      <ul className="theMap">
         <FlipMove duration={250} easing="ease-out">
          {mapWalls}
        </FlipMove>
      </ul>
    );
  }
};

export default Walls;
