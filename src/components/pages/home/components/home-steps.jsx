/*
-------------------------------------------------------------------------
| Import of React, Shared Components & Buttons
-------------------------------------------------------------------------
*/

import React from "react";
import Steps from "/src/components/shared/steps-1";
import { BtnSecond } from "../../../shared/buttons";

/*
-------------------------------------------------------------------------
| Home Page x3 Card Data
-------------------------------------------------------------------------
*/

const HomeStepsData = [
  {
    imgSrc: "/assets/icons/path-white.png",
    imgAlt: "Path icon",
    title: "Choose your path",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
    buttonText: "Learn More",
    buttonLink: "/courses",
  },
  {
    imgSrc: "/assets/icons/video.png",
    imgAlt: "Video icon",
    title: "Start learning",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
    buttonText: "Learn More",
    buttonLink: "/courses",
  },
  {
    imgSrc: "/assets/icons/repeat-white.png",
    imgAlt: "Repeat icon",
    title: "Practice and repeat",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
    buttonText: "Learn More",
    buttonLink: "/courses",
  },
];

/*
-------------------------------------------------------------------------
| Home Page x3 Card Section
-------------------------------------------------------------------------
*/

const HomeSteps = () => {
  return (
    <div>
      <Steps
        heading="Master Spanish in 3 Steps"
        stepsData={HomeStepsData}
        ButtonComponent={BtnSecond}
      />
    </div>
  );
};

export default HomeSteps;
