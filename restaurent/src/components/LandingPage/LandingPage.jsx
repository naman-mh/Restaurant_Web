import React from "react";
import Home from "../../pages/Home";
import CardComp from "../CardComp";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <CardComp />
      <About />
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
