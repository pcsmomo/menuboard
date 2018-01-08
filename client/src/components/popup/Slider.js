import React, { Component } from "react";
import { connect } from "react-redux";

const display = {
  display: "block"
};
const hide = {
  display: "none"
};

class Slider extends Component {
  render() {
    return (
      <div className="slider" style={this.props.toggle ? display : hide}>
        Slider
      </div>
    );
  }
}

const mapStateToProps = ({ toggle }) => {
  return { toggle };
};

export default connect(mapStateToProps)(Slider);
