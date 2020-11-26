import React from "react";
import "./AboutMe.css";

import { useObserver } from "../../hooks/useObserver";
import { ReactComponent as Wave } from "../../images/aboutwave.svg";
import { ReactComponent as AboutMeSVG } from "../../images/aboutmeSVG.svg";

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
    <div className="about-container">
      <Wave className="about-wave" />
      <AboutMeSVG className="about-me-svg" />
      <h2 className="title">
        <span>A</span>bout Me
      </h2>
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
