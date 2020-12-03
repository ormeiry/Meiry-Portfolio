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

import { ReactComponent as CharContact } from "../../images/projects/svg/codereview.svg";
import { ReactComponent as CharGit } from "../../images/projects/svg/bugfix.svg";
import { ReactComponent as CharIt } from "../../images/projects/svg/fullstack.svg";
import { ReactComponent as CharSort } from "../../images/projects/svg/mobileapp.svg";
import { ReactComponent as CharPort } from "../../images/projects/svg/versioncontrol.svg";

export const changeImg = (id) => {
  const screenWidth = window.screen.width;
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

export const changeSVG = (id) => {
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
