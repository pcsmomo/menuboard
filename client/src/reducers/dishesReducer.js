import { FETCH_DISHES } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_DISHES:
      return action.payload;
    default:
      return state;
  }
}
