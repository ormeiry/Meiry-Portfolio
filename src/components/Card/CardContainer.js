import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Card from "./Card";
import data from "../../data";
import "./CardContainer.css";

const CardContainer = () => {
  const [cards, setCards] = useState(data);
  const [currentCard, setCurrentCard] = useState(cards[0]);
  const [cardAnim, setCardAnim] = useState("");
  const [showNext, setShowNext] = useState(false);

  const resetAnim = () => {
    setCardAnim("");
  };

  const inAnim = (anim) => {
    setCardAnim(anim);
  };

  const delaySwitch = (number) => {
    setCurrentCard(cards[number]);
  };

  const prevCardHandler = () => {
    setTimeout(() => inAnim("in-left"), 200);
    setCardAnim("out-left");
    setTimeout(resetAnim, 1500);
    const prevCard = cards.indexOf(currentCard) - 1;
    if (prevCard === -1) {
      setTimeout(() => delaySwitch(cards.length - 1), 600);
    } else {
      setTimeout(() => delaySwitch(prevCard), 600);
    }
  };

  const nextCardHandler = () => {
    setTimeout(() => inAnim("in-right"), 200);
    setCardAnim("out-right");
    setTimeout(resetAnim, 1500);
    console.log(cards.indexOf(currentCard));
    const nextCard = cards.indexOf(currentCard) + 1;
    if (nextCard === cards.length) {
      setTimeout(() => delaySwitch(0), 600);
    } else {
      setTimeout(() => delaySwitch(nextCard), 600);
    }
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
