import React, { useRef, useEffect } from "react";

import "./Tech.css";

const Tech = ({ techImg }) => {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("card");

          entry.target.classList.remove("unseen");
          entry.target.classList.add("tilt");
        }
      },
      {
        threshold: [0.3],
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
    <>
      <div className="img-wrap unseen" ref={ref}>
        <img src={`${techImg}`} className="tech-img" />
      </div>
    </>
  );
};

export default Tech;
