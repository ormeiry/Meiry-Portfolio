import React, { useState, useEffect } from 'react';

import './HomeText.css';

const HomeText = ({ name, desc }) => {
  const [iconsClass, setIconsClass] = useState('unseen');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIconsClass('icons-animation');
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='home-text-container'>
      <h1>OR</h1>
      <div className='flip'>
        <h1>MEIRY</h1>
      </div>
      <p>Full Stack Developer</p>
      <div className='icons'>
        <a
          className={iconsClass}
          href='https://www.linkedin.com/in/or-meiry-618b3719b/'
          target='_blank'
          rel='noopener'
        >
          <i className='fab fa-linkedin fa-3x'></i>
        </a>
        <a
          className={iconsClass}
          href='https://github.com/ormeiry'
          target='_blank'
          rel='noopener'
        >
          <i className='fab fa-github fa-3x'></i>
        </a>
        <a className={iconsClass} href='mailto: ormeiry2411@gmail.com'>
          <i className='fa fa-envelope fa-3x' aria-hidden='true'></i>
        </a>
      </div>
    </div>
  );
};

export default HomeText;
