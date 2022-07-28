import axios from "axios";
import {
  FLAT_DETAIL,
  GET_APARTMENTS,
  IS_ERROR,
  IS_LOADING,
} from "./actionTypes";
const base_url = "http://localhost:5500/api";

export const getApartments = (dispatch, page = 1, limit = 10) => {
  try {
    dispatch({ type: IS_LOADING });
    axios
      .get(`${base_url}/apartments?page=${page}&limit=${limit}`)
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

// export const getFilteredApartments = (dispatch, type) => {
//   try {
//     dispatch({ type: IS_LOADING });
//     axios(base_url + "/apartments/" + type)
//       .then((res) => {
//         dispatch({
//           type: FILTER_FLATS,
//           payload: res.data,
//         });
//       })
//       .catch((error) => dispatch({ type: IS_ERROR }));
//   } catch (error) {
//     dispatch({ type: IS_ERROR });
//   }
// };

export const flatDetails = (dispatch, id) => {
  try {
    dispatch({ type: IS_LOADING });
    axios.get(base_url + "/apartments/" + id).then((res) => {
      dispatch({
        type: FLAT_DETAIL,
        payload: res.data.residents,
      });
    });
  } catch (error) {
    dispatch({ type: IS_ERROR });
  }
};
