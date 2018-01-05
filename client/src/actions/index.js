import axios from "axios";
import { FETCH_DISHES, FETCH_KIDS, FETCH_SIDES } from "./types";

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

export const fetchSides = () => async dispatch => {
  const res = await axios.get("/data/sides.json");
  dispatch({
    type: FETCH_SIDES,
    payload: res.data
  });
};
