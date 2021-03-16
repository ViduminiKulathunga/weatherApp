import { SET_CITIES, SET_SELECTED_CITY } from "../types";

const initialState = {
  citiesAvailable: [],
  citySelected: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        citiesAvailable: action.payload,
      };
    case SET_SELECTED_CITY:
      return {
        ...state,
        citySelected: action.payload,
      };
    default:
      return state;
  }
};
