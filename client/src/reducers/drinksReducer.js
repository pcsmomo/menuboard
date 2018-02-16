import { FETCH_COFFEE, FETCH_COLD } from "../actions/types";

// If I don't give initialState, there would be an error on Dishes.js
const initialState = {
  coffee: {},
  cold: {}
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case FETCH_COFFEE:
      return {
        ...state,
        coffee: action.payload
      };
    case FETCH_COLD:
      return {
        ...state,
        cold: action.payload
      };
    default:
      return state;
  }
}
