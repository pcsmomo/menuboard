import { FETCH_BREKKIE } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BREKKIE:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
