// Importing React, BrowserRouter, Routes, and Route from react-router-dom
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
const App = () => {
  return (
    <div>
      {/* Setting up BrowserRouter for routing */}
      <BrowserRouter>
        {/* Defining routes using Routes and Route components */}
        <Routes>
          {/* Default route for Home */}
          <Route path="*" element={<Home />} />
          {/* Route for About page */}
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
