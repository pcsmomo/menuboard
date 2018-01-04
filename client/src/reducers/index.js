import { combineReducers } from "redux";
import brekkieReducer from "./brekkieReducer";

export default combineReducers({
  brekkie: brekkieReducer
});
