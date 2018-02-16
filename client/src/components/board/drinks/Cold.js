import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCold } from "../../../actions";

class Cold extends Component {
  componentDidMount() {
    this.props.fetchCold();
  }

  renderMenu() {
    return Array.prototype.map.call(this.props.cold, elm => {
      return (
        <div className="dish" key={elm.id}>
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
        <div className="thirdTitle">Cold</div>
        <div className="dishes">{this.renderMenu()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cold: state.drinks.cold
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCold: () => {
      dispatch(fetchCold());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cold);
