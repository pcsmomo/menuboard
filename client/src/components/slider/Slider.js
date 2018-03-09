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
  renderAdd(addArr) {
    return addArr.map(add => {
      return (
        <p key={add.name}>
          {add.name} / {add.price}
        </p>
      );
    });
  }

  render() {
    return (
      <div className="sliderArea" style={this.props.toggle ? display : hide}>
        <div className="slider">
          <h2>{this.props.curCateName}</h2>
          <div className="sliderDisplay">
            <div className="areaImg">
              <div
                className="btnClose"
                onClick={() => this.props.closeSlider()}
              />
              <img
                className="mainImg"
                src={"images/" + this.props.curItem.id + ".jpg"}
                alt={this.props.curItem.name}
              />
              <label
                className="prev"
                onClick={() =>
                  this.props.fetchDishInfo(this.props.curItem.id, "prev")
                }
              >
                <span />
              </label>
              <label
                className="next"
                onClick={() =>
                  this.props.fetchDishInfo(this.props.curItem.id, "next")
                }
              >
                <span />
              </label>
            </div>
            <div className="sliderDetail">
              <h4>{this.props.curItem.name}</h4>
              <p>
                {this.props.curItem.desc} <span>{this.props.curItem.type}</span>
              </p>
              <p>{this.props.curItem.price}</p>
              {this.props.curItem.add
                ? this.renderAdd(this.props.curItem.add)
                : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.menu.toggle,
    curItem: state.menu.curItem,
    curCateName: state.menu.curCateName
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
