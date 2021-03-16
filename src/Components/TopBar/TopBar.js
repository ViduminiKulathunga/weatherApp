import React from 'react';
import "./TopBar.css";

import Logo from "../../images/logo.png"

const TopBar = () => {
    return (
        <div className="top-container">
            <img src={Logo} alt="Weather App" className="logo" />
            <h1 className="title">Weather App</h1>
        </div>
    )
}

export default TopBar;
