import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <form action = "" method = "GET">
        <input type="text" name="enter_city" placeholder="Enter a City" className="search-bar"/>
        <input type="submit" value="Add City" className="button"/>
      </form>
    </div>
  );
};

export default SearchBar;
