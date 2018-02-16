import React, { Component } from "react";
import Flip from "./Flip";

class DrinksHeader extends Component {
  renderHeader() {
    return (
      <header>
        <div className="title">
          <div className="mainTitle">FROM THE BREW BAR</div>
        </div>
        <img className="logo" src="/images/jethro_logo.png" alt="logo" />
        <Flip link="/" />
      </header>
    );
  }

  render() {
    return <div>{this.renderHeader()}</div>;
  }
}

export default DrinksHeader;
