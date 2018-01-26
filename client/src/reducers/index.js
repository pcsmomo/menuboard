import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import sliderReducer from "./sliderReducer";

export default combineReducers({
  menu: menuReducer,
  slider: sliderReducer
});
