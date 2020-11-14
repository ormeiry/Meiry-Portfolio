import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Card from "./Card";
import data from "../../data";
import "./CardContainer.css";

import contactImg from "../../images/projects/contactkeeper.png";
import gitImg from "../../images/projects/gituser.png";
import itImg from "../../images/projects/itlogger.png";
import sortImg from "../../images/projects/sort.png";
import contactImgM from "../../images/projects/contactkeeperM.jpg";
import gitImgM from "../../images/projects/gituserM.jpg";
import itImgM from "../../images/projects/itloggerM.jpg";
import sortImgM from "../../images/projects/sortM.jpg";

const CardContainer = () => {
  const [dataArr, setData] = useState(data);

  const screenWidth = window.screen.width;
  const changeImg = (id) => {
    switch (id) {
      case "git":
        return screenWidth > 750 ? gitImgM : gitImg;
      case "it":
        return screenWidth > 750 ? itImgM : itImg;
      case "sort":
        return screenWidth > 750 ? sortImgM : sortImg;
      default:
        return screenWidth > 750 ? contactImgM : contactImg;
    }
  };

  const project = dataArr.map((project, i) => {
    let img = changeImg(project.id);
    return <Card info={data[i]} img={img} key={project.id} />;
  });

  return <div className="card-container">{project}</div>;
};

export default CardContainer;
