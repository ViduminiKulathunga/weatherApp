import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import banner from "./images/banner.jpg";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
//Compoponents

//Pages
import Home from "./Pages/Home/Home";
import City from "./Pages/City/City";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="container">
            <img className="img" src={banner} />
            <Switch>
              <Route exact path="/city/:cityId" component={City} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}
