import React, { Component } from "react";

class Juice extends Component {
  renderMenu() {
    return <div>Juice</div>;
  }

  render() {
    return (
      <div>
        <div className="thirdTitle">Juice</div>
        <div className="dishes">{this.renderMenu()}</div>
      </div>
    );
  }
}

export default Juice;
