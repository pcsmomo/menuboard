import { combineReducers } from "redux";
import dishesReducer from "./dishesReducer";
import kidsReducer from "./kidsReducer";

export default combineReducers({
  dishes: dishesReducer,
  kids: kidsReducer
});
