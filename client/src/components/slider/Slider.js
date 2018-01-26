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
          src={"images/" + this.props.selectedItem.id + ".jpg"}
          alt={this.props.selectedItem.name}
        />
        <div>
          <h4>{this.props.selectedItem.name}</h4>
          <p>
            {this.props.selectedItem.desc}{" "}
            <span>{this.props.selectedItem.type}</span>
          </p>
          <p>{this.props.selectedItem.price}</p>
        </div>
        <button onClick={() => this.props.closeSlider()}>X</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.slider.toggle,
    selectedItem: state.slider.selectedItem
  };
};

export default connect(mapStateToProps)(Slider);
