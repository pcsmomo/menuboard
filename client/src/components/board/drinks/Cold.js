import React, { Component } from "react";

class Cold extends Component {
  renderMenu() {
    return <div>Cold</div>;
  }

  render() {
    return (
      <div>
        <div className="thirdTitle">Cold</div>
        <div className="dishes">{this.renderMenu()}</div>
      </div>
    );
  }
}

export default Cold;
