import React from "react";

import "./Technologies.css";
import { techs } from "../../data";
import Tech from "./Tech";

const Technologies = () => {
  return (
    <div className="tech-container">
      <h2>
        Technologies <span>&</span> Tools
      </h2>
      <p>
        These are the technologies and tools that I use and that I'm still
        learning to this day.
      </p>
      <div className="tech-grid">
        {techs.map((techImg, i) => {
          return <Tech techImg={techImg} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Technologies;
