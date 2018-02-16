import React, { Component } from "react";

class Fridge extends Component {
  renderMenu() {
    return <div>Fridge</div>;
  }

  render() {
    return (
      <div>
        <div className="thirdTitle">From the Fridge</div>
        <div className="dishes">{this.renderMenu()}</div>
      </div>
    );
  }
}

export default Fridge;
