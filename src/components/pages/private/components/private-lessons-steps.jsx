/*
-------------------------------------------------------------------------
| Import of React & Shared Components
-------------------------------------------------------------------------
*/

import React from "react";
import Steps from "/src/components/shared/steps-1";

/*
-------------------------------------------------------------------------
| Private Lessons x3 Card Data
-------------------------------------------------------------------------
*/

const PrivateLessonsStepsData = [
  {
    imgSrc: "../src/assets/icons/path-white.png",
    imgAlt: "Path icon",
    title: "Benefit 1",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
  },
  {
    imgSrc: "../src/assets/icons/video.png",
    imgAlt: "Video icon",
    title: "Benefit 2",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
  },
  {
    imgSrc: "../src/assets/icons/repeat-white.png",
    imgAlt: "Repeat icon",
    title: "Benefit 3",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
  },
];

/*
-------------------------------------------------------------------------
| Private Lessons x3 Card  Section
-------------------------------------------------------------------------
*/

const PrivateLessonsSteps = () => {
  return (
    <div>
      <Steps
        showHeading={false}
        stepsData={PrivateLessonsStepsData}
        showButton={false}
      />
    </div>
  );
};

export default PrivateLessonsSteps;
