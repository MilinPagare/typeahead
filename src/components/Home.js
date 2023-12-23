import React, { useEffect, useState } from "react";
import { allCountries } from "./Countries";
import "./Home.css";

const Home = () => {
  const [toShow, setToShow] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setToShow([]);
    } else {
      setToShow(
        allCountries.filter((item) =>
          item.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  const handleClick = (country) => {
    setSearch(country);
    setToShow([]);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e);
        }}
        className="search_box"
      />
      <div className="country_list">
        {toShow.map((item, index) => (
          <div
            key={index}
            className="country"
            onClick={() => {
              handleClick(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
