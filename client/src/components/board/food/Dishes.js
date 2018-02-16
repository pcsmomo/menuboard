import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDishes } from "../../../actions";

class Dishes extends Component {
  componentDidMount() {
    this.props.fetchDishes();
  }

  renderMenu() {
    // return this.props.dishes.map(dish => {
    //   return <div key={dishes.name}>{dishes.price}</div>;
    // });

    // this.props.brekkie.map is not a function so, used a detour.
    return Array.prototype.map.call(this.props.dishes, dish => {
      return (
        <div
          className="item"
          key={dish.id}
          onClick={() => this.props.openSlider(dish, 1)}
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
      <div className="dishes">
        {this.renderMenu()}
        <p className="pargEgg">
          *Eggs by Burd Eggs: Eggs laid by 100% free range hens, roaming free in
          the country air, 365 days a year!
        </p>
      </div>
    );
  }
}

// const mapStateToProps = ({ dishes }) => {
//   return { dishes };
// }
const mapStateToProps = state => {
  return {
    dishes: state.menu.dishes
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchDishes: () => {
//       dispatch(fetchDishes());
//     },
//     openSlider: selectedItem => {
//       dispatch(openSlider(selectedItem));
//     }
//   };
// };
const mapDispatchToProps = dispatch => {
  return {
    fetchDishes: () => {
      dispatch(fetchDishes());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
