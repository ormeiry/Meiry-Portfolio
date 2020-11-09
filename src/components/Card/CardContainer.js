import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Card from "./Card";
import data from "../../data";
import "./CardContainer.css";

const CardContainer = () => {
  const [cards, setCards] = useState(data);
  const [currentCard, setCurrentCard] = useState(cards[0]);
  const [cardAnim, setCardAnim] = useState("");

  const resetAnim = () => {
    setCardAnim("");
  };

  const prevCardHandler = () => {
    const prevCard = cards.indexOf(currentCard) - 1;
    if (prevCard === -1) {
      setCurrentCard(cards[cards.length - 1]);
    } else {
      setCurrentCard(cards[prevCard]);
    }
    setCardAnim("move-left");
    setTimeout(resetAnim, 1000);
  };

  const nextCardHandler = () => {
    console.log(cards.indexOf(currentCard));
    const nextCard = cards.indexOf(currentCard) + 1;
    if (nextCard === cards.length) {
      setCurrentCard(cards[0]);
    } else {
      setCurrentCard(cards[nextCard]);
    }
    setCardAnim("move-right");
    setTimeout(resetAnim, 1000);
  };

  let currentCardDisplay = <Card info={currentCard} cardAnimation={cardAnim} />;

  return (
    <div className="card-container">
      <FaArrowLeft className="btn-card" onClick={prevCardHandler} />
      {currentCardDisplay}
      <FaArrowRight className="btn-card" onClick={nextCardHandler} />
    </div>
  );
};

export default CardContainer;
