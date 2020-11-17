import React from 'react';
import './AboutMe.css';

import { useObserver } from '../../hooks/useObserver';

const AboutMe = () => {
  const instructions = ([entry]) => {
    if (entry.isIntersecting) {
      entry.target.firstChild.classList.remove('unseen');
      entry.target.children[1].classList.remove('unseen');
      entry.target.children[1].classList.add('animation-side');
      entry.target.firstChild.classList.add('animation-text');
    }
  };
  const options = { threshold: [0.1] };
  const observerRef = useObserver(instructions, options);
  return (
    <div className='about-container' ref={observerRef}>
      <h2 className='unseen'>
        <span>A</span>bout Me
      </h2>
      <div className='unseen'></div>
      <p>
        I love People, Programming, and learning new things. Currently looking
        for a place that has all three. I have dedicated my time and effort to
        turn my life upside down, stopped being scared of failing, and jumped
        headfirst into this amazing field. I finished over 240 hours of
        professional online courses, and far more of them writing, reading, and
        understanding code, My journey continues to this day. The hunger for
        knowledge is growing as I learn more. All I need is a place where I can
        grow as a developer, and surly enough my contribution will come fast.
      </p>
    </div>
  );
};

export default AboutMe;
