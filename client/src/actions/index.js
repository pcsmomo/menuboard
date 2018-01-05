import axios from "axios";
import { FETCH_DISHES, FETCH_KIDS } from "./types";

export const fetchDishes = () => async dispatch => {
  const res = await axios.get("/data/dishes.json");
  console.log("action: fetchDishes");
  dispatch({
    type: FETCH_DISHES,
    payload: res.data
  });
};

export const fetchKids = () => async dispatch => {
  const res = await axios.get("/data/kids.json");
  console.log("action: fetchKids");
  dispatch({
    type: FETCH_KIDS,
    payload: res.data
  });
};
