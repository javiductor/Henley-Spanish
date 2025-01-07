/*
-------------------------------------------------------------------------
| Import of React & Shared Component
-------------------------------------------------------------------------
*/

import React from "react";
import Steps from "/src/components/shared/steps-1";

/*
-------------------------------------------------------------------------
| About Us Data
-------------------------------------------------------------------------
*/

const AboutStepsData = [
  {
    imgSrc: "/assets/icons/path-white.png",
    imgAlt: "Path icon",
    title: "Characteristic 1",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
  },
  {
    imgSrc: "/assets/icons/video.png",
    imgAlt: "Video icon",
    title: "Characteristic 2",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
  },
  {
    imgSrc: "/assets/icons/repeat-white.png",
    imgAlt: "Repeat icon",
    title: "Characteristic 3",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
  },
];

/*
-------------------------------------------------------------------------
| About Us x3 Cards
-------------------------------------------------------------------------
*/

const AboutSteps = () => {
  return (
    <div>
      <Steps heading="What we do best!" stepsData={AboutStepsData} />
    </div>
  );
};

export default AboutSteps;
