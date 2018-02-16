import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "../style/menu.css";

import FoodHeader from "./board/FoodHeader";
import Food from "./board/Food";
import DrinksHeader from "./board/DrinksHeader";
import Drinks from "./board/Drinks";
import Slider from "./slider/Slider";

const applyBlur = {
  filter: "blur(3px)"
};
const cancelBlur = {
  filter: "blur()"
};

class Menu extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <div
            className="menu"
            style={this.props.toggle ? applyBlur : cancelBlur}
          >
            <Route exact path="/" component={FoodHeader} />
            <Route exact path="/" component={Food} />
            <Route exact path="/drinks" component={DrinksHeader} />
            <Route exact path="/drinks" component={Drinks} />
          </div>
          <Slider />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.menu.toggle
  };
};

export default connect(mapStateToProps)(Menu);
