import React from "react";

import CardContainer from "../Card/CardContainer";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <h1>
        M<span>y</span> Pro<span>j</span>ects
      </h1>
      <CardContainer />
    </div>
  );
};

export default Portfolio;
