import React, { Component } from "react";
import { connect } from "react-redux";
import { openSlider } from "../../actions";

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
      </div>
    );
  }

  render() {
    return <div className="food">{this.renderFood()}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openSlider: (curItem, cateIdx) => {
      dispatch(openSlider(curItem, cateIdx));
    }
  };
};

export default connect(null, mapDispatchToProps)(Food);
