import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Home from "./components/Home/Home";
import AboutMe from "./components/About/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact";
import { FaArrowCircleUp } from "react-icons/fa";

function App() {
  const screensArr = [
    <Home key="Home" />,
    <AboutMe key="AboutMe" />,
    <Portfolio key="Portfolio" />,
    <Technologies key="Technologies" />,
    <Contact key="Contact" />,
  ];

  const backToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      {screensArr.map((i, index) => i)}
      <FaArrowCircleUp className={"btn-top"} onClick={backToTopHandler}>
        Back To Top
      </FaArrowCircleUp>
    </div>
  );
}

export default App;
