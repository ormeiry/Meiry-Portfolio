import React, { useEffect, useState } from 'react';

import HomeText from './HomeText';

import './Home.css';
import { ReactComponent as Logo } from '../../images/bgSVG.svg';
import { ReactComponent as Wave } from '../../images/wave.svg';

const Home = () => {
  const [loading, setLoading] = useState(true);

  // const changebgHandler = () => {
  //   setLoading(false);
  // };

  // let content = loading ? (
  //   <img src={bgStart} alt='bg' className='bg' />
  // ) : (
  //   <video className='bg' autoPlay loop muted>
  //     <source src={bgVideo} type='video/mp4' />
  //   </video>
  // );

  return (
    <div className='home-body'>
      <Wave className='bg-wave' />
      <Logo className='bg' />
      <HomeText name='OR MEIRY' desc='Full Stack Developer' />
    </div>
  );
};

export default Home;
