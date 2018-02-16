import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import drinksReducer from "./drinksReducer";

export default combineReducers({
  menu: menuReducer,
  drinks: drinksReducer
});
