import { FETCH_DISHES, FETCH_KIDS, FETCH_SIDES } from "../actions/types";
import { FETCH_DISHINFO } from "../actions/types";

// If I don't give initialState, there would be an error on Dishes.js
const cate = ["dishes", "kids", "sides"];
const initialState = {
  dishes: {},
  kids: {},
  sides: {}
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case FETCH_DISHES:
      return {
        ...state,
        dishes: action.payload
      };
    case FETCH_KIDS:
      return {
        ...state,
        kids: action.payload
      };
    case FETCH_SIDES:
      return {
        ...state,
        sides: action.payload
      };
    case FETCH_DISHINFO:
      console.log(findPrevNextItem(state, action.dishId, action.option));
      return {
        ...state
      };
    default:
      return state;
  }
}

const findPrevNextItem = (state, curId, option) => {
  let curItem = null;
  let upIdx = 0; // index for categories(dishes, kids, sides)

  for (let upIdx = 0; upIdx <= 2; upIdx++) {
    curItem = state[cate[upIdx]].find(element => {
      return element.id == curId;
    });
    if (curItem) break;
  }

  // find prevItem or nextItem
  let nextItem = null;
  let curOrder = curItem.order;
  if (option === "prev") {
    if (curOrder <= 0) {
      if (upIdx <= 0) upIdx = 1;
      else upIdx--;
      nextItem = state[cate[upIdx]][state[cate[upIdx]].length - 1];
    } else {
      nextItem = state[cate[upIdx]][curOrder - 1];
    }
  } else if (option === "next") {
    if (curOrder >= state[cate[upIdx]].length - 1) {
      if (upIdx >= 1) upIdx = 0;
      else upIdx++;
      nextItem = state[cate[upIdx]][0];
    } else {
      nextItem = state[cate[upIdx]][curOrder + 1];
    }
  }

  return nextItem;
};
