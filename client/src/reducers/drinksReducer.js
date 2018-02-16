import {
  FETCH_COFFEE,
  FETCH_COLD,
  FETCH_SMOOTHIE,
  FETCH_TEA,
  FETCH_FRIDGE
} from "../actions/types";

// If I don't give initialState, there would be an error on Dishes.js
const initialState = {
  coffee: {},
  cold: {},
  smoothie: {},
  tea: {},
  fridge: {}
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
    case FETCH_SMOOTHIE:
      return {
        ...state,
        smoothie: action.payload
      };
    case FETCH_TEA:
      return {
        ...state,
        tea: action.payload
      };
    case FETCH_FRIDGE:
      return {
        ...state,
        fridge: action.payload
      };
    default:
      return state;
  }
}
