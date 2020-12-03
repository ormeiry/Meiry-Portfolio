import React from "react";
import "./Card.css";

import { useObserver } from "../../hooks/useObserver";
import { changeSVG } from "../utils/switch";

const Card = ({ info: { title, listItems, link, github, name, id }, img }) => {
  const options = { root: null, threshold: [0.5] };
  const instructions = ([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("unseen");
      entry.target.classList.add("card-animation");
    }
  };

  const observerRef = useObserver(instructions, options);
  const SVG = changeSVG(id);
  const ul = listItems.map((item, i) => {
    return <li key={i}>{item}</li>;
  });

  return (
    <>
      <div className="unseen card" ref={observerRef}>
        <img src={img} alt="project" className="project-image" />
        <div className="card-content">
          <div className="project-links">
            <a href={link} target="_blank" rel="noopener">
              <i className="fas fa-eye fa-3x"></i>
            </a>
            <a href={github} target="_blank" rel="noopener">
              <i className="fab fa-github fa-3x"></i>
            </a>
          </div>
          <h2>{name}</h2>
          <h4>{title}</h4>
          <ul>{ul}</ul>
        </div>
        <SVG className="svg-char" />
      </div>
    </>
  );
};

export default Card;
