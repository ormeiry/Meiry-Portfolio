import React, { useRef, useEffect } from "react";

import CardContainer from "../Card/CardContainer";
import "./portfolio.css";

const Portfolio = () => {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("portfolio");
          entry.target.firstChild.classList.add("animation");
        }
      },
      {
        threshold: [0.1],
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="portfolio-wrapper" ref={ref}>
      <h1>My Projects</h1>
      <CardContainer />
    </div>
  );
};

export default Portfolio;
