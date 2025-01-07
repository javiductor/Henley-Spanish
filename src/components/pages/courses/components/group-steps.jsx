/*
-------------------------------------------------------------------------
| Import of React and Shared Components
-------------------------------------------------------------------------
*/

import React from "react";
import Steps from "/src/components/shared/steps-1";

/*
-------------------------------------------------------------------------
| Courses x3 Card Data
-------------------------------------------------------------------------
*/

const CourseStepsData = [
  {
    imgSrc: "../src/assets/icons/path-white.png",
    imgAlt: "Path icon",
    title: "Conversational Spanish",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
  },
  {
    imgSrc: "../src/assets/icons/video.png",
    imgAlt: "Video icon",
    title: "Groups of up to 4 students",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
  },
  {
    imgSrc: "../src/assets/icons/repeat-white.png",
    imgAlt: "Repeat icon",
    title: "Tailored Spanish learning",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. venenatis, diam aliquet.",
  },
];

/*
-------------------------------------------------------------------------
| Courses x3 Card Section
-------------------------------------------------------------------------
*/

const CoursesSteps = () => {
  return (
    <div>
      <Steps
        showHeading={false}
        stepsData={CourseStepsData}
        showButton={false}
      />
    </div>
  );
};

export default CoursesSteps;
