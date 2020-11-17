import React from 'react';

import CardContainer from '../Card/CardContainer';
import { useObserver } from '../../hooks/useObserver';
import './portfolio.css';

const Portfolio = () => {
  const instructions = ([entry]) => {
    if (entry.isIntersecting) {
      entry.target.firstChild.classList.add('animation');
    }
  };
  const options = { threshold: [0.1] };
  const observerRef = useObserver(instructions, options);

  return (
    <div className='portfolio-wrapper' ref={observerRef}>
      <h1>My Projects</h1>
      <CardContainer />
    </div>
  );
};

export default Portfolio;
