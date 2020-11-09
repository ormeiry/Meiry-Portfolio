import React from "react";

import CardContainer from "../Card/CardContainer";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="screen-container">
      <div className="portfolio-wrapper">
        <h1>Portfolio</h1>
        <CardContainer />
      </div>
    </div>
  );
};

export default Portfolio;
