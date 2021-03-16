import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCities } from "../../redux/actions/dataAction";

import TopBar from "../../Components/TopBar/TopBar";
import ContentBar from "../../Components/ContentBar";
import CityBucket from "../../Components/CityBucket/CityBucket";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Footer from "../../Components/Footer/Footer";
import { colors } from "../../Data/Colors";

import "./Home.css";

const Home = () => {
  const citiesAvailable = useSelector((state) => state.data.citiesAvailable);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, []);

  let recent = "";
  recent = (
    <Fragment>
      {citiesAvailable.map((city, index) => (
        <CityBucket key={city.id} city={city} color={colors[index]} />
      ))}
    </Fragment>
  );

  return (
    <Fragment>
      <div className="main-wrapper">
        <TopBar />
        <SearchBar />
        <div className="conent-wrapper">{recent}</div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
