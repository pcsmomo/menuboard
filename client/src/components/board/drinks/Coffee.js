import React, { Component } from "react";

class Coffee extends Component {
  renderMenu() {
    return <div>Coffee</div>;
  }

  render() {
    return (
      <div>
        <div className="thirdTitle">Coffee</div>
        <div className="dishes">{this.renderMenu()}</div>
      </div>
    );
  }
}

export default Coffee;
