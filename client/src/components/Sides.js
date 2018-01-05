import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSides } from "../actions";

class Sides extends Component {
  componentDidMount() {
    this.props.fetchSides();
  }

  renderMenu() {
    return Array.prototype.map.call(this.props.sides, side => {
      return (
        <div className="sides" key={side.name}>
          <div className="sideName">{side.name}</div>
          <div className="sidePrice">{side.price}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="thirdTitle">Sides</div>
        <div className="divSides">{this.renderMenu()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ sides }) => {
  return { sides };
};

const mapDispatchToProps = {
  fetchSides
};

export default connect(mapStateToProps, mapDispatchToProps)(Sides);
