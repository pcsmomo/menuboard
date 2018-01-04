import React, { Component } from "react";

import Dishes from "./Dishes";
import Kids from "./Kids";
import Side from "./Side";

class Food extends Component {
  render() {
    return (
      <div>
        <Dishes />
        <Kids />
        <Side />
      </div>
    );
  }
}

export default Food;
