import React, { useEffect, useState } from "react";

import HomeText from "./HomeText";

import "./Home.css";
import { ReactComponent as Logo } from "../../images/bgSVG.svg";
import { ReactComponent as Wave } from "../../images/wave.svg";

const Home = () => {
  return (
    <div className="home-body">
      <Wave className="bg-wave" />
      <Logo className="bg" />
      <HomeText />
    </div>
  );
};

export default Home;
