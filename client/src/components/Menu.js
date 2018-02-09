import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "../style/menu.css";

import Header from "./board/Header";
import Food from "./board/Food";
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
      <div className="content">
        <div
          className="menu"
          style={this.props.toggle ? applyBlur : cancelBlur}
        >
          <Header />
          <Food />
        </div>
        <Slider />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.menu.toggle
  };
};

export default connect(mapStateToProps)(Menu);
