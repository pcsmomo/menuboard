import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "../style/app.css";

import Header from "./board/Header";
import Food from "./board/Food";
import Slider from "./slider/Slider";

const applyBlur = {
  filter: "blur(3px)"
};
const cancelBlur = {
  filter: "blur()"
};

class App extends Component {
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
    toggle: state.slider.toggle
  };
};

export default connect(mapStateToProps)(App);
