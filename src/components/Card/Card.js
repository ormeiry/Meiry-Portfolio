import React, { useEffect, useRef } from "react";
import "./Card.css";

const Card = ({ info: { title, listItems, link, github, name }, img }) => {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("card");

          entry.target.classList.remove("unseen");
          entry.target.classList.add("card");
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

  const ul = listItems.map((item, i) => {
    return <li key={i}>{item}</li>;
  });
  return (
    <div className="unseen" ref={ref}>
      <img src={img} alt="project" className="project-image" />
      <div className="project-links">
        <a href={link} target="_blank" rel="noopener">
          <i className="fas fa-eye fa-3x"></i>
        </a>
        <a href={github} target="_blank" rel="noopener">
          <i className="fab fa-github fa-3x"></i>
        </a>
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <h4>{title}</h4>
        <ul>{ul}</ul>
      </div>
    </div>
  );
};

export default Card;
