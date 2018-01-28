import React, { Component } from "react";
import { connect } from "react-redux";
import { closeSlider } from "../../actions";
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
      <div className="sliderArea" style={this.props.toggle ? display : hide}>
        <div className="slider">
          <button onClick={() => this.props.closeSlider()}>X</button>
          <div className="sliderImg">
            <img
              src={"images/" + this.props.selectedItem.id + ".jpg"}
              alt={this.props.selectedItem.name}
            />
          </div>
          <div className="sliderDetail">
            <h4>{this.props.selectedItem.name}</h4>
            <p>
              {this.props.selectedItem.desc}{" "}
              <span>{this.props.selectedItem.type}</span>
            </p>
            <p>{this.props.selectedItem.price}</p>
          </div>
        </div>
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

const mapDispatchToProps = dispatch => {
  return {
    closeSlider: () => {
      dispatch(closeSlider());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
