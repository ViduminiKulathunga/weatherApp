import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getSelectedCityWeather } from "../../redux/actions/dataAction";

import TopBar from "../../Components/TopBar/TopBar";
import Footer from "../../Components/Footer/Footer";
import CityWheather from "../../Components/CityWheather/CityWheather";

import "./City.css";

const City = (props) => {
  const citySelected = useSelector((state) => state.data.citySelected);
  const loadingCity = useSelector((state) => state.UI.loadingCity);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(loadingCity, "Loading 1");
    dispatch(getSelectedCityWeather(props.match.params.cityId));
    console.log(loadingCity, "Loading 2");

    const interval = setInterval(() => {
      dispatch(getSelectedCityWeather(props.match.params.cityId));
    }, 150000);

    return () => clearInterval(interval);
  }, []);

  console.log(loadingCity, "Loading 3");

  let recent = loadingCity ? (
    ""
  ) : (
    <Fragment>
      <CityWheather key={citySelected.id} city={citySelected} />
    </Fragment>
  );

  return (
    <Fragment>
      <div className="city-main-wrapper">
        <TopBar />
        <div className="city-content-wrapper">{recent}</div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default City;
