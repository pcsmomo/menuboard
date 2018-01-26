import { OPEN_SLIDER, CLOSE_SLIDER } from "../actions/types";

const initialState = {
  toggle: false,
  selectedId: ""
};

export default function slider(state = initialState, action) {
  switch (action.type) {
    case OPEN_SLIDER:
      return {
        ...state,
        toggle: true,
        selectedId: action.selectedId
      };
    case CLOSE_SLIDER:
      return {
        ...state,
        toggle: false,
        selectedId: ""
      };
    default:
      return state;
  }
}
