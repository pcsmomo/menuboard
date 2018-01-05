import { combineReducers } from "redux";
import dishesReducer from "./dishesReducer";
import kidsReducer from "./kidsReducer";
import sidesReducer from "./sidesReducer";

export default combineReducers({
  dishes: dishesReducer,
  kids: kidsReducer,
  sides: sidesReducer
});
