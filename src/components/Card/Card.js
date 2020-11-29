import React from "react";
import "./Card.css";

import { useObserver } from "../../hooks/useObserver";
import { ReactComponent as CharContact } from "../../images/projects/svg/codereview.svg";
import { ReactComponent as CharGit } from "../../images/projects/svg/bugfix.svg";
import { ReactComponent as CharIt } from "../../images/projects/svg/fullstack.svg";
import { ReactComponent as CharSort } from "../../images/projects/svg/mobileapp.svg";
import { ReactComponent as CharPort } from "../../images/projects/svg/versioncontrol.svg";

const changeSVG = (id) => {
  switch (id) {
    case "git":
      return CharGit;
    case "it":
      return CharIt;
    case "sort":
      return CharSort;
    case "portfolio":
      return CharPort;
    default:
      return CharContact;
  }
};

const Card = ({ info: { title, listItems, link, github, name, id }, img }) => {
  const options = { root: null, threshold: [0.4] };
  const instructions = ([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("unseen");
      entry.target.classList.add("card-animation");
    }
  };
  const observerRef = useObserver(instructions, options);

  const SVG = changeSVG(id);

  const ul = listItems.map((item, i) => {
    return <li key={i}>{item}</li>;
  });
  return (
    <>
      <div className="unseen card" ref={observerRef}>
        <img src={img} alt="project" className="project-image" />
        <div className="card-content">
          <div className="project-links">
            <a href={link} target="_blank" rel="noopener">
              <i className="fas fa-eye fa-3x"></i>
            </a>
            <a href={github} target="_blank" rel="noopener">
              <i className="fab fa-github fa-3x"></i>
            </a>
          </div>
          <h2>{name}</h2>
          <h4>{title}</h4>
          <ul>{ul}</ul>
        </div>
        <SVG className="svg-char" />
      </div>
    </>
  );
};

export default Card;
