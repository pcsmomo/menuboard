import axios from "axios";
import { FETCH_BREKKIE } from "./types";
//var brekkieData = require("../data/brekkie.json");

export const fetchBrekkie = () => async dispatch => {
  const res = await axios.get("/data/brekkie.json");
  console.log(res);

  dispatch({
    type: FETCH_BREKKIE,
    payload: res.data
  });
  /*
  return function(dispatch) {
    axios
      .get("../data/brekkie.json")
      .then(response => {
        dispatch({ type: "FETCH_BREKKIE", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_DATA_REJECT", payload: err });
      });
  };
  */
};
