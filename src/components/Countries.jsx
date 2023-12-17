import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "../CSS/countries.css";

const Countries = () => {
  // Déclaration d'une variable d'état 'data' initialisée à un tableau vide
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("Africa");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  // UseEffect
  useEffect(() => {
    // Effectue une requête HTTP GET pour récupérer les données sur les pays
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      // Met à jour 'data' avec les données récupérées depuis l'API
      setData(response.data);
    });
  }, []); // Utilise un tableau vide comme dépendance pour effectuer la requête une seule fois

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          className="slider"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
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
      {selectedRadio && (<button onClick={() => setSelectedRadio("")}>
        Cancel Search
      </button>)}

      {/* List country from API */}
      <ul className="list-country">
        {data
          .filter((country) => country.region.includes(selectedRadio))
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
