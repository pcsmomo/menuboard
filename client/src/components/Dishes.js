import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDishes } from "../actions";

class Dishes extends Component {
  componentDidMount() {
    this.props.fetchDishes();
  }
  renderMenu() {
    // return this.props.brekkie.map(elm => {
    //   return <div key={elm.name}>{elm.price}</div>;
    // });

    // this.props.brekkie.map is not a function so, used a detour.
    return Array.prototype.map.call(this.props.dishes, dish => {
      return (
        <div className="dish" key={dish.name}>
          <div className="divName">
            <span className="dishName">{dish.name}</span>
            {dish.desc ? " - " : ""}{" "}
            <span className="dishDesc">{dish.desc}</span>
            <span className="dishType"> {dish.type}</span>
          </div>
          <div className="divPrice">
            <span className="dishPrice">{dish.price}</span>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="dishes">{this.renderMenu()}</div>;
  }
}

const mapStateToProps = state => {
  return { dishes: state.food };
};

const mapDispatchToProps = {
  fetchDishes
};

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
