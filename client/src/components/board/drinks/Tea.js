import React, { Component } from "react";

class Tea extends Component {
  renderMenu() {
    return <div>Tea</div>;
  }

  render() {
    return (
      <div>
        <div className="thirdTitle">Tea</div>
        <div className="dishes">{this.renderMenu()}</div>
      </div>
    );
  }
}

export default Tea;
