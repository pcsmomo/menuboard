import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBrekkie } from "../actions";

class Brekkie extends Component {
  componentDidMount() {
    this.props.fetchBrekkie();
  }
  renderMenu() {
    // return this.props.brekkie.map(elm => {
    //   return <div key={elm.name}>{elm.price}</div>;
    // });
    return Array.prototype.map.call(this.props.brekkie, elm => {
      return (
        <div key={elm.name}>
          {elm.name} - {elm.desc} {elm.price}
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderMenu()}</div>;
  }
}

const mapStateToProps = state => {
  return { brekkie: state.food };
};

const mapDispatchToProps = {
  fetchBrekkie
};

export default connect(mapStateToProps, mapDispatchToProps)(Brekkie);
