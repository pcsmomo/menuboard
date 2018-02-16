import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCoffee } from "../../../actions";

class Coffee extends Component {
  componentDidMount() {
    this.props.fetchCoffee();
  }

  renderMenu() {
    return Array.prototype.map.call(this.props.coffee, elm => {
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
        <div className="thirdTitle">Coffee</div>
        <div className="subDrinks">{this.renderMenu()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coffee: state.drinks.coffee
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCoffee: () => {
      dispatch(fetchCoffee());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Coffee);
