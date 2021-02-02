import React from 'react';
import './AboutMe.css';

import { useObserver } from '../../hooks/useObserver';
import { ReactComponent as Wave } from '../../images/aboutwave.svg';
import { ReactComponent as AboutMeSVG } from '../../images/aboutmeSVG.svg';

const AboutMe = () => {
  // const instructions = ([entry]) => {
  //   if (entry.isIntersecting) {
  //     entry.target.children[2].classList.remove("unseen");
  //     entry.target.children[3].classList.remove("unseen");
  //     entry.target.children[2].classList.add("animation-side");
  //     entry.target.children[3].classList.add("animation-text");
  //   }
  // };
  // const options = { threshold: [0.1] };
  // const observerRef = useObserver(instructions, options);
  return (
    <div className='about-container'>
      <Wave className='about-wave' />
      <AboutMeSVG className='about-me-svg' />
      <h2 className='title'>
        <span>A</span>bout Me
      </h2>
      <p>
        I enjoy solving problems, thinking out of the box, and learning new
        things every day. I Like working with other people and seeing things
        through their eyes to improve myself and my environment. I believe Those
        are the qualities that formed my natural connection to programming and
        my enthusiasm for developing. Over the last year, I learned everything I
        can about it, dedicating my time and effort to consume every piece of
        knowledge I can find. I spent hundreds of hours on great courses,
        hundreds more on writing code and banging my head on the table, trying
        to find a solution to a problem. It was and still is a great and
        challenging adventure.
      </p>
    </div>
  );
};

export default AboutMe;
