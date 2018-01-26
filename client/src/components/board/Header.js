import React, { Component } from "react";

class Header extends Component {
  renderHeader() {
    return (
      <header>
        <div className="title">
          <div className="mainTitle">FROM THE KITCHEN</div>
          <div className="subTitle">BREAKFAST & LUNCH ALL DAY</div>
        </div>
        <img className="logo" src="/images/jethro_logo.png" alt="logo" />
      </header>
    );
  }

  render() {
    return <div>{this.renderHeader()}</div>;
  }
}

export default Header;