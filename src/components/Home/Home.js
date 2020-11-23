import React, { useEffect, useState } from 'react';

import HomeText from './HomeText';
import bgVideo from '../../images/bgVideo.mp4';
import bgStart from '../../images/bgStart.png';
import './Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);

  const changebgHandler = () => {
    setLoading(false);
  };

  let content = loading ? (
    <img src={bgStart} alt='bg' className='bg' />
  ) : (
    <video className='bg' autoPlay loop muted>
      <source src={bgVideo} type='video/mp4' />
    </video>
  );

  return (
    <div className='home-body'>
      {content}
      <HomeText
        name='OR MEIRY'
        desc='Full Stack Developer'
        changeBg={changebgHandler}
      />
    </div>
  );
};

export default Home;
