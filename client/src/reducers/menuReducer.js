import { FETCH_DISHES, FETCH_KIDS, FETCH_SIDES } from "../actions/types";

// If I don't give initialState, there would be an error on Dishes.js
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
    default:
      return state;
  }
}
