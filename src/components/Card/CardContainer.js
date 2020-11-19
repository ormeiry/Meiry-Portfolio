import React, { useState, useEffect, useRef } from "react";

import Card from "./Card";
import { items } from "../../data";
import "./CardContainer.css";

import contactImg from "../../images/projects/contactkeeper.png";
import gitImg from "../../images/projects/gituser.png";
import itImg from "../../images/projects/itlogger.png";
import sortImg from "../../images/projects/sort.png";
import portfolioImg from "../../images/projects/portfolio.png";
import contactImgM from "../../images/projects/contactkeeperM.jpg";
import gitImgM from "../../images/projects/gituserM.jpg";
import itImgM from "../../images/projects/itloggerM.jpg";
import sortImgM from "../../images/projects/sortM.jpg";
import portfolioImgM from "../../images/projects/portfolioM.jpg";

const CardContainer = () => {
  const [dataArr, setData] = useState(items);
  const screenWidth = window.screen.width;
  const changeImg = (id) => {
    switch (id) {
      case "git":
        return screenWidth > 800 ? gitImgM : gitImg;
      case "it":
        return screenWidth > 800 ? itImgM : itImg;
      case "sort":
        return screenWidth > 800 ? sortImgM : sortImg;
      case "portfolio":
        return screenWidth > 800 ? portfolioImgM : portfolioImg;
      default:
        return screenWidth > 800 ? contactImgM : contactImg;
    }
  };

  const project = dataArr.map((project, i) => {
    let img = changeImg(project.id);
    return <Card info={dataArr[i]} img={img} key={project.id} />;
  });

  return <div className="card-container">{project}</div>;
};

export default CardContainer;
