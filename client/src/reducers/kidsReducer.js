import { FETCH_KIDS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_KIDS:
      return action.payload;
    default:
      return state;
  }
}
