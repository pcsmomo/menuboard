import React, { Component } from "react";
import { connect } from "react-redux";
import Draggable from "react-draggable";
import { fetchSpecials } from "../../../actions";

class Specials extends Component {
  componentDidMount() {
    this.props.fetchSpecials();
  }

  renderMenu() {
    // return this.props.dishes.map(dish => {
    //   return <div key={dishes.name}>{dishes.price}</div>;
    // });

    // this.props.brekkie.map is not a function so, used a detour.
    return Array.prototype.map.call(this.props.specials, dish => {
      return (
        <div
          className="item"
          key={dish.id}
          onClick={() => this.props.openSlider(dish, 0)}
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
          {dish.add ? this.renderAdd(dish.add) : ""}
        </div>
      );
    });
  }

  renderAdd(addArr) {
    return addArr.map(add => {
      return (
        <div className="divAdd" key={add.name}>
          <div className="divName">{add.name}</div>
          <div className="divPrice">{add.price}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <Draggable handle=".spcTitleArea">
        <div className="specials">
          <div className="spcTitleArea">
            <span className="specialTitle">SPECIALS</span>
            <span className="dragdrop" />
          </div>
          {this.renderMenu()}
        </div>
      </Draggable>
    );
  }
}

const mapStateToProps = state => {
  return {
    specials: state.menu.specials
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpecials: () => {
      dispatch(fetchSpecials());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specials);
