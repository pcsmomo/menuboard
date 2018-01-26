import React, { Component } from "react";
import { connect } from "react-redux";
import "../../style/slider.css";

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
        <img
          className="slideImg"
          src={"images/" + this.props.selectedId + ".jpg"}
          alt={this.props.selectedId}
        />
        <button onClick={() => this.props.closeSlider()}>X</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.popup.toggle,
    selectedId: state.popup.selectedId
  };
};

export default connect(mapStateToProps)(Slider);
