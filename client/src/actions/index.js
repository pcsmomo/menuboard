import axios from "axios";
import { FETCH_DISHES, FETCH_KIDS, FETCH_SIDES, FETCH_SPECIALS } from "./types";
import { OPEN_SLIDER, CLOSE_SLIDER } from "./types";
import { FETCH_DISHINFO } from "./types";
import {
  FETCH_COFFEE,
  FETCH_COLD,
  FETCH_SMOOTHIE,
  FETCH_TEA,
  FETCH_FRIDGE
} from "./types";

export const fetchSpecials = () => async dispatch => {
  const res = await axios.get("/data/specials.json");
  dispatch({
    type: FETCH_SPECIALS,
    payload: res.data
  });
};

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

export const openSlider = (curItem, cateIdx) => {
  return {
    type: OPEN_SLIDER,
    curItem,
    cateIdx
  };
};

export const closeSlider = () => {
  return {
    type: CLOSE_SLIDER
  };
};

export const fetchDishInfo = (dishId, option) => {
  return {
    type: FETCH_DISHINFO,
    dishId,
    option
  };
};

export const fetchCoffee = () => async dispatch => {
  const res = await axios.get("/data/coffee.json");
  dispatch({
    type: FETCH_COFFEE,
    payload: res.data
  });
};

export const fetchCold = () => async dispatch => {
  const res = await axios.get("/data/cold.json");
  dispatch({
    type: FETCH_COLD,
    payload: res.data
  });
};

export const fetchSmoothie = () => async dispatch => {
  const res = await axios.get("/data/smoothie.json");
  dispatch({
    type: FETCH_SMOOTHIE,
    payload: res.data
  });
};

export const fetchTea = () => async dispatch => {
  const res = await axios.get("/data/tea.json");
  dispatch({
    type: FETCH_TEA,
    payload: res.data
  });
};

export const fetchFridge = () => async dispatch => {
  const res = await axios.get("/data/fridge.json");
  dispatch({
    type: FETCH_FRIDGE,
    payload: res.data
  });
};
