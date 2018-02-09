import React, { Component } from "react";
import { connect } from "react-redux";
import { closeSlider, fetchDishInfo } from "../../actions";
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
          <div className="sliderImg">
            <img
              src={"images/" + this.props.selectedItem.id + ".jpg"}
              alt={this.props.selectedItem.name}
            />
            <label
              className="prev"
              onClick={() =>
                this.props.fetchDishInfo(this.props.selectedItem.id, "prev")
              }
            >
              <span />
            </label>
            <label
              className="next"
              onClick={() =>
                this.props.fetchDishInfo(this.props.selectedItem.id, "next")
              }
            >
              <span />
            </label>
          </div>
          <div className="sliderDetail">
            <h4>{this.props.selectedItem.name}</h4>
            <p>
              {this.props.selectedItem.desc}{" "}
              <span>{this.props.selectedItem.type}</span>
            </p>
            <p>{this.props.selectedItem.price}</p>
          </div>
          <button className="btnClose" onClick={() => this.props.closeSlider()}>
            close
          </button>
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
    },
    fetchDishInfo: (dishId, option) => {
      dispatch(fetchDishInfo(dishId, option));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
