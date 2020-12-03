import React, { useState } from "react";

import Card from "./Card";
import { items } from "../../data";
import { changeImg } from "../utils/switch";

const CardContainer = () => {
  const project = items.map((project, i) => {
    let img = changeImg(project.id);
    return <Card info={items[i]} img={img} key={project.id} />;
  });

  return <>{project}</>;
};

export default CardContainer;
