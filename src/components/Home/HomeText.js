import React, { useState, useEffect } from 'react';

import './HomeText.css';

const HomeText = ({ name, desc }) => {
  const [nameText, setNameText] = useState('');
  const [descText, setDescText] = useState('');

  useEffect(() => {
    displayText(name, desc);
  }, [name, desc]);

  const displayText = (name, desc) => {
    const nameArr = name.split('');
    const descArr = desc.split('');

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
    <div className='home-text-container'>
      <h1>{nameText}</h1>
      <p>{descText}</p>
    </div>
  );
};

export default HomeText;
