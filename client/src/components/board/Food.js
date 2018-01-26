import React, { Component } from "react";
import { connect } from "react-redux";
import { openSlider, closeSlider } from "../../actions";

import Dishes from "./Dishes";
import Kids from "./Kids";
import Sides from "./Sides";
import Slider from "../slider/Slider";

class Food extends Component {
  renderFood() {
    return (
      <div>
        <div className="main">
          <Dishes openSlider={this.props.openSlider} />
          <Kids />
        </div>
        <Sides />
        <Slider closeSlider={this.props.closeSlider} />
      </div>
    );
  }

  render() {
    return <div className="food">{this.renderFood()}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openSlider: selectedItem => {
      dispatch(openSlider(selectedItem));
    },
    closeSlider: () => {
      dispatch(closeSlider());
    }
  };
};

export default connect(null, mapDispatchToProps)(Food);
