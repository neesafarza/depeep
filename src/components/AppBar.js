import React from "react";
import "../styles/appBar.css";

export const AppBar = ({ items, hideSoldItem, setHideSoldItems }) => {
  return (
    <div className="app-bar">
      <h3>{items.length} Results</h3>
      <h1>Depeep</h1>
      <button
        onClick={() => setHideSoldItems(!hideSoldItem)}
        className="hide-show-button"
      >
        {hideSoldItem ? "Include Sold Items" : "Hide Sold Items"}
      </button>
    </div>
  );
};
