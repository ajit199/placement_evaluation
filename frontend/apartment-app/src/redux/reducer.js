import { GET_APARTMENTS, IS_ERROR, IS_LOADING } from "./actionTypes";

const initState = {
  apartments: [],
  isError: false,
  isLoading: false,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        apartments: [],
        totalApartments: 0,
      };
    case GET_APARTMENTS: {
      return {
        ...state,
        apartments: action.payload.apartments,
        totalApartments: action.payload.totalApartments,
      };
    }
    case IS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        apartments: [],
      };
    default: {
      return state;
    }
  }
};
