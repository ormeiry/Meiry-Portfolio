import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className={`card ${props.cardAnimation}`}>
      <h2>{props.info.title}</h2>
    </div>
  );
};

export default Card;
