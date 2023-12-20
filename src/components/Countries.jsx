// Importing React, useState, useEffect, and axios modules
import React, { useState, useEffect } from "react";
import axios from "axios";
// Importing the Card component and the countries.css style file
import Card from "./Card";
import "../CSS/countries.css";

// Functional component declaration for Countries
const Countries = () => {
  // Declaration of a 'data' state variable initialized as an empty array
  const [data, setData] = useState([]); // Using useState to manage data state
  const [rangeValue, setRangeValue] = useState(36); // Using useState to manage range value
  const [selectedRadio, setSelectedRadio] = useState("Africa"); // Using useState to manage selected continent
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"]; // Array containing continents

  // Using useEffect to perform an action after the component's initial render
  useEffect(() => {
    // Making an HTTP GET request to fetch country data from the API
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      // Updating 'data' with the fetched data from the API
      setData(response.data);
    });
  }, []); // Using an empty array as a dependency to perform the request only once

  // Rendering the Countries component
  return (
    <div className="countries">
      {/* Section for radio buttons to select continents */}
      <ul className="radio-container">
        {/* Using a slider to set the range */}
        <input
          type="range"
          min="1"
          max="250"
          className="slider"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {/* Using the map method to generate radio buttons for each continent */}
        {radios.map((continent) => (
          <li key={continent}>
            <input
              type="radio"
              id={continent}
              name="ContinentRadio"
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      
      {/* Button to cancel the search */}
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Cancel Search
        </button>
      )}

      {/* List of countries fetched from the API */}
      <ul className="list-country">
        {/* Using filter, slice, and map methods to display countries */}
        {data
          .filter((country) => country.region.includes(selectedRadio)) // Filtering countries based on the selected continent
          .slice(0, rangeValue) // Limiting the number of displayed countries based on the defined range
          .map((country, index) => (
            <Card key={index} country={country} /> // Using the Card component for each country
          ))}
      </ul>
    </div>
  );
};

export default Countries;
