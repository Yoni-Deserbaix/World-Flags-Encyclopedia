import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Countries from "../components/Countries";
import Card from "../components/Card";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Card />
      <Countries />
    </div>
  );
};

export default Home;
