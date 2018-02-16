import React, { Component } from "react";

class Smoothie extends Component {
  renderMenu() {
    return <div>Smoothie</div>;
  }

  render() {
    return (
      <div>
        <div className="thirdTitle">Smoothie</div>
        <div className="dishes">{this.renderMenu()}</div>
      </div>
    );
  }
}

export default Smoothie;
