import { FETCH_COFFEE } from "../actions/types";

// If I don't give initialState, there would be an error on Dishes.js
const initialState = {
  coffee: {}
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case FETCH_COFFEE:
      return {
        ...state,
        coffee: action.payload
      };
    default:
      return state;
  }
}
