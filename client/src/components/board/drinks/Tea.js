import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTea } from "../../../actions";

class Tea extends Component {
  componentDidMount() {
    this.props.fetchTea();
  }

  renderMenu() {
    return Array.prototype.map.call(this.props.tea, elm => {
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
        <div className="thirdTitle">Tea</div>
        <div className="subDrinks">{this.renderMenu()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tea: state.drinks.tea
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTea: () => {
      dispatch(fetchTea());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tea);
