import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import popupReducer from "./popupReducer";

export default combineReducers({
  menu: menuReducer,
  popup: popupReducer
});
