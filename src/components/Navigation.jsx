// Importing React and NavLink from react-router-dom
import React from "react";
import { NavLink } from "react-router-dom";

import "../CSS/navigation.css";

// Functional component declaration for Navigation
const Navigation = () => {
  // Rendering the Navigation component
  return (
    <div className="navigation">
      {/* Unordered list for navigation links */}
      <ul>
        {/* NavLink for the "Home" route */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Home</li>
        </NavLink>
        {/* NavLink for the "About" route */}
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>About</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
