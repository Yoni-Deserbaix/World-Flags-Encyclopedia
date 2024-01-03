import React from "react";
import "../CSS/card.css";
const Card = ({ country }) => {
    // Check if 'country' prop is empty or undefined
  if (!country) {
    return null; // Return null or a message indicating the absence of data if props.country is empty or undefined
  }

  return (
      <li className="card">
        {/* Displaying the country's flag */}
        <img src={country.flags.svg} alt={"flag " + country.name.common} />
        <div className="infos">
          {/* Displaying the country's name and capital */}
          <h2>{country.name.common}</h2>
          <h2>{country.capital}</h2>
          {/* Displaying the country's population */}
          <p>Pop.{country.population.toLocaleString()}</p>
        </div>
      </li>
  );
};

export default Card;
