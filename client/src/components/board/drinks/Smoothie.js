import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmoothie } from "../../../actions";

class Smoothie extends Component {
  componentDidMount() {
    this.props.fetchSmoothie();
  }

  renderMenu() {
    return Array.prototype.map.call(this.props.smoothie, elm => {
      return (
        <div className="item" key={elm.id}>
          <div className="divName">
            <span className="dishName">{elm.name}</span>
            {elm.desc ? " - " : ""} <span className="dishDesc">{elm.desc}</span>
            <span className="dishType"> {elm.type}</span>
          </div>
          <div className="divPrice">
            <span className="dishPrice">{elm.price}</span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="thirdTitle">Smoothie</div>
        <div className="subDrinks">{this.renderMenu()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smoothie: state.drinks.smoothie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSmoothie: () => {
      dispatch(fetchSmoothie());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Smoothie);
