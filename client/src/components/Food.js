import React, { Component } from "react";

import Dishes from "./Dishes";
import Kids from "./Kids";
import Side from "./Side";

class Food extends Component {
  renderFood() {
    return (
      <div>
        <div className="main">
          <Dishes />
          <Kids />
        </div>
        <Side />
      </div>
    );
  }

  render() {
    return <div className="food">{this.renderFood()}</div>;
  }
}

export default Food;
