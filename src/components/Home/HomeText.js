import React, { useState, useEffect } from "react";

import "./HomeText.css";

const HomeText = ({ name, desc }) => {
  const [nameText, setNameText] = useState("");
  const [descText, setDescText] = useState("");
  const [iconsClass, setIconsClass] = useState("unseen");

  useEffect(() => {
    displayText(name, desc);

    return () => {
      console.log("now");
      setNameText("");
      setDescText("");
    };
  }, [name, desc]);

  useEffect(() => {
    if (descText.length === desc.length - 6) {
      setIconsClass("icons-animation");
    }
  }, [descText, desc]);

  const displayText = (name, desc) => {
    const nameArr = name.split("");
    const descArr = desc.split("");

    for (let i = 0; i < nameArr.length; i++) {
      setTimeout(() => {
        setNameText((prev) => prev + nameArr[i]);
      }, i * 200);
    }
    for (let i = 0; i < descArr.length; i++) {
      setTimeout(() => {
        setDescText((prev) => prev + descArr[i]);
      }, i * 100 + nameArr.length * 250);
    }
  };

  return (
    <div className="home-text-container">
      <h1>{nameText}</h1>
      <p>{descText}</p>
      <div className={`icons`}>
        <a
          className={iconsClass}
          href="https://www.linkedin.com/in/or-meiry-618b3719b/"
          target="_blank"
          rel="noopener"
        >
          <i className="fab fa-linkedin fa-3x"></i>
        </a>
        <a
          className={iconsClass}
          href="https://github.com/ormeiry"
          target="_blank"
          rel="noopener"
        >
          <i className="fab fa-github fa-3x"></i>
        </a>
        <a className={iconsClass} href="mailto: ormeiry2411@gmail.com">
          <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default HomeText;
