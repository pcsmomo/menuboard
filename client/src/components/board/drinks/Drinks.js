import React, { Component } from "react";

import Coffee from "./Coffee";
import Cold from "./Cold";
import Juice from "./Juice";
import Tea from "./Tea";
import Fridge from "./Fridge";

class Drinks extends Component {
  render() {
    return (
      <div>
        <Coffee />
        <Cold />
        <Juice />
        <Tea />
        <Fridge />
      </div>
    );
  }
}

export default Drinks;
