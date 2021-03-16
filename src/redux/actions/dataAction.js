import {
  SET_CITIES,
  SET_SELECTED_CITY,
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  STOP_LOADING_UI,
  LOADING_CITY,
  STOP_LOADING_CITY,
} from "../types";

import data from "../../Data/cities-data.json";

const apiId = "cdd9baf674d2a4f1a402cf0d5655c4ee";

export const getCities = () => (dispatch) => {
  try {
    dispatch({ type: LOADING_UI });

    const getData = data.List;

    const loadedCitiesCode = [];
    for (const key in getData) {
      loadedCitiesCode.push(getData[key].CityCode);
    }

    const stringCitiesCode = loadedCitiesCode.join(",");

    dispatch(getCurrentWeather(stringCitiesCode));
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: { message: "Something Went wrong" },
    });
    console.log(error);
    //throw error;
  }
};

export const getCurrentWeather = (data) => {
  return async (dispatch) => {
    try {
      const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${data}&units=metric&appid=${apiId}`;
      const resData = await fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

      dispatch({ type: SET_CITIES, payload: resData.list });
      dispatch({ type: STOP_LOADING_UI });
    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: { message: "Something Went wrong in the Server" },
      });
      console.log(error);
      //throw error;
    }
  };
};

export const getSelectedCityWeather = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_CITY });

      const apiUrl = `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiId}`;
      const resData = await fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

      dispatch({ type: SET_SELECTED_CITY, payload: resData });
      dispatch({ type: STOP_LOADING_CITY });
    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: { message: "Something Went wrong in the Server" },
      });
      console.log(error);
      //throw error;
    }
  };
};
