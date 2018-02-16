import React, { Component } from "react";

import Coffee from "./Coffee";
import Cold from "./Cold";
import Smoothie from "./Smoothie";
import Tea from "./Tea";
import Fridge from "./Fridge";
import Pastry from "./Pastry";

class Drinks extends Component {
  render() {
    return (
      <div className="drinks">
        <Coffee />
        <Cold />
        <Smoothie />
        <Tea />
        <Fridge />
        <Pastry />
      </div>
    );
  }
}

export default Drinks;
