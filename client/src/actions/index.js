import axios from "axios";
import { FETCH_DISHES } from "./types";

export const fetchDishes = () => async dispatch => {
  const res = await axios.get("/data/dishes.json");

  dispatch({
    type: FETCH_DISHES,
    payload: res.data
  });
};
