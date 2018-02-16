import React, { Component } from "react";

import Coffee from "./Coffee";
import Cold from "./Cold";
import Smoothie from "./Smoothie";
import Tea from "./Tea";
import Fridge from "./Fridge";

class Drinks extends Component {
  render() {
    return (
      <div>
        <Coffee />
        <Cold />
        <Smoothie />
        <Tea />
        <Fridge />
      </div>
    );
  }
}

export default Drinks;
