import {
  SET_CITIES,
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  STOP_LOADING_UI,
} from "../types";

import data from "../../Data/cities-data.json";
import Cities from "../../models/cities";

export const getCities = () => (dispatch) => {
  try {
    dispatch({ type: LOADING_UI });

    const getData = data.List;

    const loadedCities = [];
    const loadedCitiesCode = [];
    for (const key in getData) {
      //console.log(key, " resData[key], ", resData[key].CityCode, " CityCode");
      loadedCitiesCode.push(getData[key].CityCode);
    }

    const stringCitiesCode = loadedCitiesCode.join(",");

    // for (const key in resData) {
    //   //console.log(key, " resData[key], ", resData[key].CityCode, " CityCode");
    //   loadedCities.push(
    //     new Cities(
    //       resData[key].CityCode,
    //       resData[key].CityCode,
    //       resData[key].CityName,
    //       resData[key].Temp,
    //       resData[key].Status
    //     )
    //   );
    // }

    dispatch(getCurrentWeather(stringCitiesCode));

    // dispatch({ type: SET_CITIES, payload: loadedCities });
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
      const apiId = "cdd9baf674d2a4f1a402cf0d5655c4ee";

      const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${data}&units=metric&appid=${apiId}`;
      const resData = await fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

        dispatch({ type: SET_CITIES, payload: resData.list });
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
