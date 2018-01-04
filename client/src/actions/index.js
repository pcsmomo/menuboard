import axios from "axios";
import { FETCH_BREKKIE } from "./types";

export const fetchBrekkie = () => async dispatch => {
  const res = await axios.get("/data/brekkie.json");

  dispatch({
    type: FETCH_BREKKIE,
    payload: res.data
  });
};
