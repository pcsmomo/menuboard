import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFridge } from "../../../actions";

class Fridge extends Component {
  componentDidMount() {
    this.props.fetchFridge();
  }

  renderMenu() {
    return Array.prototype.map.call(this.props.fridge, elm => {
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
        <div className="thirdTitle">Fridge</div>
        <div className="dishes">{this.renderMenu()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fridge: state.drinks.fridge
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFridge: () => {
      dispatch(fetchFridge());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fridge);
