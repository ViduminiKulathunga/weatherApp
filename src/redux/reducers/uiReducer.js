import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  LOADING_CITY,
  STOP_LOADING_CITY,
} from "../types";

const initialState = {
  loading: true,
  loadingCity: true,
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false,
      };
      case LOADING_CITY:
        return {
          ...state,
          loadingCity: true,
        };
      case STOP_LOADING_CITY:
        return {
          ...state,
          loadingCity: false,
        };
    default:
      return state;
  }
}
