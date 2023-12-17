import React from "react";
import "../CSS/card.css";
const Card = ({ country }) => {
  if (!country) {
    return null; // Retourner null ou un message indiquant l'absence de données si props.country est vide ou undefined
  }
  return (
    <div className="card-container">
      <li className="card">
        <img src={country.flags.svg} alt={"flag " + country.name.common} />
        <div className="infos">
          <h2>{country.name.common}</h2>
          <h2>{country.capital}</h2>
          <p>Pop.{country.population.toLocaleString()}</p>
        </div>
      </li>
    </div>
  );
};

export default Card;
