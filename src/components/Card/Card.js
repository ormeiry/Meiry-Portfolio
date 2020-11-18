import React from "react";
import "./Card.css";

import { useObserver } from "../../hooks/useObserver";

const Card = ({ info: { title, listItems, link, github, name }, img }) => {
  const options = { threshold: [0.4] };
  const instructions = ([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("unseen");
      entry.target.classList.add("card");
    }
  };
  const observerRef = useObserver(instructions, options);

  const ul = listItems.map((item, i) => {
    return <li key={i}>{item}</li>;
  });
  return (
    <div className="unseen" ref={observerRef}>
      <img src={img} alt="project" className="project-image" />
      <div className="project-links">
        <a href={link} target="_blank" rel="noopener">
          <i className="fas fa-eye fa-3x"></i>
        </a>
        <a href={github} target="_blank" rel="noopener">
          <i className="fab fa-github fa-3x"></i>
        </a>
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <h4>{title}</h4>
        <ul>{ul}</ul>
      </div>
    </div>
  );
};

export default Card;
