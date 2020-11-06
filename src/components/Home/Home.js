import React from 'react';

import HomeText from './HomeText';
import './Home.css';

const Home = () => {
  return (
    <div
      className='screen-container home-body'
      //   style={{ backgroundImage: `url(${homeBG})` }}
    >
      <div className='bg-img'>
        <div className='bg-img-after'>
          <HomeText name='OR MEIRY' desc='Full Stack Developer' />
        </div>
      </div>
    </div>
  );
};

export default Home;
