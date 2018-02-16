import React, { Component } from "react";
import { connect } from "react-redux";
import { openSlider } from "../../../actions";

import Specials from "./Specials";
import Dishes from "./Dishes";
import Kids from "./Kids";
import Sides from "./Sides";

class Food extends Component {
  renderFood() {
    return (
      <div>
        <div className="main">
          <Specials openSlider={this.props.openSlider} />
          <Dishes openSlider={this.props.openSlider} />
          <Kids openSlider={this.props.openSlider} />
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
