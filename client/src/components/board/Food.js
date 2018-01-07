import React, { Component } from "react";

import Dishes from "./Dishes";
import Kids from "./Kids";
import Sides from "./Sides";

class Food extends Component {
  renderFood() {
    return (
      <div>
        <div className="main">
          <Dishes />
          <Kids />
        </div>
        <Sides />
      </div>
    );
  }

  render() {
    return <div className="food">{this.renderFood()}</div>;
  }
}

export default Food;
