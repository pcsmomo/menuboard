import React, { Component } from "react";

import Brekkie from "./Brekkie";
import Lunch from "./Lunch";
import Kids from "./Kids";
import Side from "./Side";

class Food extends Component {
  render() {
    return (
      <div>
        <Brekkie />
        <Lunch />
        <Kids />
        <Side />
      </div>
    );
  }
}

export default Food;
