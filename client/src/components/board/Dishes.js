import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDishes } from "../../actions";

class Dishes extends Component {
  componentDidMount() {
    this.props.fetchDishes();
  }

  addPrevNextId(obj, idx) {
    let dishes = this.props.dishes;
    let arrLen, prevIdx, nextIdx;

    arrLen = dishes.length;
    prevIdx = idx <= 0 ? arrLen - 1 : idx - 1;
    nextIdx = idx >= arrLen - 1 ? 0 : idx + 1;

    obj.prevId = dishes[prevIdx].id;
    obj.nextId = dishes[nextIdx].id;

    return obj;
  }

  renderMenu() {
    // return this.props.dishes.map(dish => {
    //   return <div key={dishes.name}>{dishes.price}</div>;
    // });

    // this.props.brekkie.map is not a function so, used a detour.
    return Array.prototype.map.call(this.props.dishes, (dish, idx) => {
      return (
        <div
          className="dish"
          key={dish.id}
          onClick={() => this.props.openSlider(this.addPrevNextId(dish, idx))}
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
    return <div className="dishes">{this.renderMenu()}</div>;
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
