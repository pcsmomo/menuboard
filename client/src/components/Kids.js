import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchKids } from "../actions";

class Kids extends Component {
  componentDidMount() {
    this.props.fetchKids();
  }
  renderMenu() {
    return Array.prototype.map.call(this.props.kids, dish => {
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

const mapStateToProps = ({ kids }) => {
  return { kids };
};

const mapDispatchToProps = {
  fetchKids
};

export default connect(mapStateToProps, mapDispatchToProps)(Kids);
