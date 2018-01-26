import { OPEN_SLIDER, CLOSE_SLIDER } from "../actions/types";

const initialState = {
  toggle: false,
  selectedItem: ""
};

export default function slider(state = initialState, action) {
  switch (action.type) {
    case OPEN_SLIDER:
      return {
        ...state,
        toggle: true,
        selectedItem: action.selectedItem
      };
    case CLOSE_SLIDER:
      return {
        ...state,
        toggle: false,
        selectedItem: ""
      };
    default:
      return state;
  }
}
