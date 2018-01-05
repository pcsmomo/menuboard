import axios from "axios";
import { FETCH_DISHES, FETCH_KIDS } from "./types";

export const fetchDishes = () => async dispatch => {
  const res = await axios.get("/data/dishes.json");
  dispatch({
    type: FETCH_DISHES,
    payload: res.data
  });
};

export const fetchKids = () => async dispatch => {
  const res = await axios.get("/data/kids.json");
  dispatch({
    type: FETCH_KIDS,
    payload: res.data
  });
};
