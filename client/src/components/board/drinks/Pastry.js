import React, { Component } from "react";

class Pastry extends Component {
  renderMenu() {
    return Array.prototype.map.call(this.props.smoothie, elm => {
      return (
        <div className="item" key={elm.id}>
          <div className="divName">
            <span className="dishName">{elm.name}</span>
            {elm.desc ? " - " : ""} <span className="dishDesc">{elm.desc}</span>
            <span className="dishType"> {elm.type}</span>
          </div>
          <div className="divPrice">
            <span className="dishPrice">{elm.price}</span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="thirdTitle">Pastries & Cakes</div>
        <div className="subDrinks">
          <div className="item">
            <div className="divName">
              <span className="dishName">
                Available from our counter cabinet
              </span>
            </div>
          </div>
        </div>
        <div className="divTriangle">
          <div className="triangle pink" />
          <div className="triangle" />
          <div className="triangle pink" />
          <div className="triangle" />
          <div className="triangle newLine" />
          <div className="triangle pink" />
          <div className="triangle" />
          <div className="triangle pink" />
          <div className="triangle pink newLine" />
          <div className="triangle" />
          <div className="triangle pink" />
          <div className="triangle" />
          <div className="triangle newLine" />
          <div className="triangle pink" />
          <div className="triangle" />
          <div className="triangle pink" />
        </div>
      </div>
    );
  }
}

export default Pastry;
