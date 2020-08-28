import React, { useState } from "react";
import "../Styles/SearchBar.css";
import newlogo from "../Pictures/newlogo.png";
import lines from "../Pictures/lines.png";

export default ({ onSubmit, clickTrend }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [shrink, setShrink] = useState(false);

  const handleChange = event => setSearchTerm(event.target.value);

  const onKeyPress = event => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  };
  function trend() {
    clickTrend();
  }
  function hide() {
    setShrink(!shrink);
  }

  return (
    <div className="topnav">
      {shrink ? (
        <div>
          <img
            alt="Show additional options"
            className="showMore"
            onClick={hide}
            src={lines}
          ></img>

          <img alt="Youtube log" className="ylogo" src={newlogo}></img>

          <input
            className="bigSearch"
            type="text"
            placeholder="Find something to watch!"
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={onKeyPress}
          ></input>
          <div className="Over">
            <a className="smallSearch" onClick={trend}>
              Trending
            </a>
            <a className="smallSearch" href="http://sajeethwimalasuriyan.me/">
              About
            </a>
          </div>
        </div>
      ) : (
        <div>
          <img
            alt="Show additional options"
            className="showMore"
            onClick={hide}
            src={lines}
          ></img>
          <img alt="Youtube logo" className="ylogo" src={newlogo}></img>
          <div className="Over">
            <a onClick={trend} className="bigBar">
              Trending
            </a>
            <a href="http://sajeethwimalasuriyan.me/" className="bigBar">
              About
            </a>
          </div>
          <input
            type="text"
            placeholder="Find something to watch!"
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={onKeyPress}
          ></input>
        </div>
      )}
    </div>
  );
};

