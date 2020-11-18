import React from "react";

import Home from "./components/Home/Home";
import AboutMe from "./components/About/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";
import ContactMe from "./components/ContactMe/ContactMe";
import { FaArrowCircleUp } from "react-icons/fa";
import Message from "./components/ContactMe/Message";

function App() {
  const screensArr = [
    <Home key="Home" />,
    <AboutMe key="AboutMe" />,
    <Portfolio key="Portfolio" />,
    <Technologies key="Technologies" />,
    <ContactMe key="ContactMe" />,
  ];

  const backToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      {screensArr.map((i, index) => i)}
      <Message />
      <FaArrowCircleUp className={"btn-top"} onClick={backToTopHandler}>
        Back To Top
      </FaArrowCircleUp>
    </div>
  );
}

export default App;
