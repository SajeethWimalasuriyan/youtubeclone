import React, { useState } from "react";
import "../Styles/FirstPage.css";
import logo from "../Pictures/ylogo.png";
export default ({ onSubmit, removeBar, clickTrend }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => setSearchTerm(event.target.value);

  const onKeyPress = event => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
      removeBar(true);
    }
  };
  function trend() {
    clickTrend();
    removeBar(true);
  }

  return (
    <div className="SearchEx">
      <div className="Search">
        <img alt="Youtube logo" className="frontLogo" src={logo}></img>
        <br></br>
        <input
          className="firstInput"
          type="text"
          placeholder=" Find something you like!"
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={onKeyPress}
        ></input>
        <br></br>
        <button className="frontButton" onClick={trend}>
          Search Trending
        </button>
        <button className="frontButton">Additional Information</button>
      </div>
    </div>
  );
};

