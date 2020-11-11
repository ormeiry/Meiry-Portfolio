import React from "react";

import HomeText from "./HomeText";
import bgVideo from "../../images/bgVideo.mp4";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-body">
      <video className="video-tag" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <HomeText name="OR MEIRY" desc="Full Stack Developer" />
    </div>
  );
};

export default Home;
