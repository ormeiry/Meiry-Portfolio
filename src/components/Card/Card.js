import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({
  info: { title, listItems, link, github, name },
  cardAnimation,
  img,
}) => {
  return (
    <div className={`card ${cardAnimation}`}>
      <img src={img} alt="project" className="project-image" />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
