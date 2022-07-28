import {
  GET_APARTMENTS,
  IS_ERROR,
  IS_LOADING,
  FILTER_FLATS,
  FLAT_DETAIL,
} from "./actionTypes";

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
        residents: [],
        totalApartments: 0,
      };
    case GET_APARTMENTS: {
      return {
        ...state,
        apartments: action.payload.apartments,
        totalApartments: action.payload.totalApartments,
      };
    }
    case FILTER_FLATS: {
      return {
        ...state,
        apartments: action.payload.apartments,
        totalApartments: action.payload.totalApartments,
      };
    }

    case FLAT_DETAIL: {
      return {
        ...state,
        residents: action.payload,
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
