import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchKids } from "../../actions";

class Kids extends Component {
  componentDidMount() {
    this.props.fetchKids();
  }

  renderMenu() {
    return Array.prototype.map.call(this.props.kids, dish => {
      return (
        <div
          className="dish"
          key={dish.id}
          onClick={() => this.props.openSlider(dish, 2)}
        >
          <div className="divName">
            <span className="dishName">{dish.name}</span>
            {dish.desc ? " - " : ""}{" "}
            <span className="dishDesc">{dish.desc}</span>
            <span className="dishType"> {dish.type}</span>
          </div>
          <div className="divPrice">
            <span className="dishPrice">{dish.price}</span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="divTriangle">
          <div className="triangle pink" />
          <div className="triangle" />
          <div className="triangle pink" />
          <div className="triangle" />
        </div>
        <div className="thirdTitle">Kids</div>
        <div className="dishes">{this.renderMenu()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    kids: state.menu.kids
  };
};

const mapDispatchToProps = {
  fetchKids
};

export default connect(mapStateToProps, mapDispatchToProps)(Kids);
