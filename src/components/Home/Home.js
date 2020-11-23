import React, { useEffect, useState } from 'react';

import HomeText from './HomeText';
import bgVideo from '../../images/bgVideo.mp4';
import bgStart from '../../images/bgStart.png';
import './Home.css';

const Home = () => {
  const [bg, setBg] = useState(bgStart);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBg(bgVideo);
    setLoading(false);
  }, []);

  let content = loading ? (
    <img src={bg} alt='bg' className='bg' />
  ) : (
    <video className='bg' autoPlay loop muted>
      <source src={bg} type='video/mp4' />
    </video>
  );

  console.log(content);
  return (
    <div className='home-body'>
      {content}
      <HomeText name='OR MEIRY' desc='Full Stack Developer' />
    </div>
  );
};

export default Home;
