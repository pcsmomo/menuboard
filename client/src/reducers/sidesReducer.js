import { FETCH_SIDES } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SIDES:
      return action.payload;
    default:
      return state;
  }
}
