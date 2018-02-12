import {
  FETCH_SPECIALS,
  FETCH_DISHES,
  FETCH_KIDS,
  FETCH_SIDES
} from "../actions/types";
import { FETCH_DISHINFO } from "../actions/types";
import { OPEN_SLIDER, CLOSE_SLIDER } from "../actions/types";

// If I don't give initialState, there would be an error on Dishes.js
const cateNames = ["Specials", "Breakfast & Lunch", "Kids", "Sides"];
const cate = ["specials", "dishes", "kids", "sides"];
const initialState = {
  specials: {},
  dishes: {},
  kids: {},
  sides: {},
  toggle: false,
  curItem: "",
  curCateName: ""
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
    case FETCH_SPECIALS:
      return {
        ...state,
        specials: action.payload
      };
    case FETCH_DISHINFO:
      let result = findPrevNextItem(state, action.dishId, action.option);
      return {
        ...state,
        curItem: result.curItem,
        curCateName: result.curCateName
      };
    case OPEN_SLIDER:
      return {
        ...state,
        toggle: true,
        curItem: action.curItem,
        curCateName: cateNames[action.cateIdx]
      };
    case CLOSE_SLIDER:
      return {
        ...state,
        toggle: false,
        curItem: ""
      };
    default:
      return state;
  }
}

const findPrevNextItem = (state, curId, option) => {
  let curItem = null;
  let cateIdx = 0; // index for categories(dishes, kids, sides)

  for (cateIdx = 0; cateIdx <= 3; cateIdx++) {
    curItem = state[cate[cateIdx]].find(element => {
      return element.id == curId;
    });
    if (curItem) break;
  }

  // find prevItem or nextItem
  let nextItem = null;
  let curOrder = curItem.order;
  if (option === "prev") {
    if (curOrder <= 0) {
      if (cateIdx <= 0)
        cateIdx = 2; // between 0 and 2
      else cateIdx--;
      nextItem = state[cate[cateIdx]][state[cate[cateIdx]].length - 1];
    } else {
      nextItem = state[cate[cateIdx]][curOrder - 1];
    }
  } else if (option === "next") {
    if (curOrder >= state[cate[cateIdx]].length - 1) {
      if (cateIdx >= 2)
        cateIdx = 0; // between 0 and 2
      else cateIdx++;
      nextItem = state[cate[cateIdx]][0];
    } else {
      nextItem = state[cate[cateIdx]][curOrder + 1];
    }
  }

  return {
    curItem: nextItem,
    curCateName: cateNames[cateIdx]
  };
};
