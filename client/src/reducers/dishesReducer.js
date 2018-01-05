import { FETCH_DISHES } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_DISHES:
      console.log("reducer: fetchDishes");
      return action.payload;
    default:
      return state;
  }
}
