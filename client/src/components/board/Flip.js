import React, { Component } from "react";
import { Link } from "react-router-dom";

class Flip extends Component {
  render() {
    return <Link to={this.props.link} className="flip" />;
  }
}

export default Flip;
