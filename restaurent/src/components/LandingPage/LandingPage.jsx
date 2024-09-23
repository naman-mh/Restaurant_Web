import React from "react";
import Home from "../../pages/Home";
import CardComp from "../CardComp";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import NavComponent from "../NavComponent";

const LandingPage = () => {
  return (
    <div>
      <NavComponent/>
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
