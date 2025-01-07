/*
-------------------------------------------------------------------------
| Import of React & shared components
-------------------------------------------------------------------------
*/

import React from "react";
import Steps from "/src/components/shared/steps-1";

/*
-------------------------------------------------------------------------
| Corporate x3 Card Data
-------------------------------------------------------------------------
*/

const CorporateStepsData = [
  {
    imgSrc: "/assets/icons/path-white.png",
    imgAlt: "Path icon",
    title: "Business Spanish",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
  },
  {
    imgSrc: "/assets/icons/video.png",
    imgAlt: "Video icon",
    title: "Team training",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
  },
  {
    imgSrc: "/assets/icons/repeat-white.png",
    imgAlt: "Repeat icon",
    title: "Business Hour friendly",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
  },
];

/*
-------------------------------------------------------------------------
| Corporate x3 Card Section
-------------------------------------------------------------------------
*/

const CorporateSteps = () => {
  return (
    <div>
      <Steps
        showHeading={false}
        stepsData={CorporateStepsData}
        showButton={false}
      />
    </div>
  );
};

export default CorporateSteps;
