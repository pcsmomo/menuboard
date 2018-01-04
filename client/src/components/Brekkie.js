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
    return Array.prototype.map.call(this.props.brekkie, brekkie => {
      return (
        <div key={brekkie.name}>
          {brekkie.name} - {brekkie.desc} {brekkie.price}
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderMenu()}</div>;
  }
}

const mapStateToProps = ({ brekkie }) => {
  return { brekkie };
};

const mapDispatchToProps = {
  fetchBrekkie
};

export default connect(mapStateToProps, mapDispatchToProps)(Brekkie);
