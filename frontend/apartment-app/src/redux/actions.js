import axios from "axios";
import { GET_APARTMENTS, IS_ERROR, IS_LOADING } from "./actionTypes";
const base_url = "http://localhost:5500/api";

export const getApartments = (dispatch) => {
  try {
    dispatch({ type: IS_LOADING });
    axios
      .get(base_url + "/apartments")
      .then((res) => {
        dispatch({
          type: GET_APARTMENTS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({ type: IS_ERROR });
      });
  } catch (error) {
    dispatch({ type: IS_ERROR });
  }
};
