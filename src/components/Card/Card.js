import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = (props) => {
  const { cardAnimation } = props;

  useEffect(() => {
    return () => {
      cardAnimation = "move-left";
    };
  }, []);

  return (
    <div className={`card ${cardAnimation}`}>
      <h2>{props.info.title}</h2>
    </div>
  );
};

export default Card;
