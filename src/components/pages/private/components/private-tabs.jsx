/*
-------------------------------------------------------------------------
| Import of React & Shared Components
-------------------------------------------------------------------------
*/

import React from "react";
import Tabs from "/src/components/shared/tabs";

/*
-------------------------------------------------------------------------
| Private Lessons Tab Section Data
-------------------------------------------------------------------------
*/
const tabContent = [
  {
    imgSrc: "/src/assets/courses-woman-1.jpg",
    imgAlt: "Description for Image 1",
    title: "Adult learning",
    heading: "1-2-1 Spanish Lessons for adults",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus.",
  },
  {
    imgSrc: "/src/assets/GSCE/GSCE-1.jpg",
    imgAlt: "Description for Image 2",
    title: "GCSE Spanish",
    heading: "Professional GCSE Spanish Tutoring",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus.",
  },
  {
    imgSrc: "/src/assets/GSCE/boy-1.jpg",
    imgAlt: "Description for Image 3",
    title: "A-level Spanish",
    heading: "Advanced tutoring for students doing their A-levels",
    description:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus. Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus.",
  },
];

/*
-------------------------------------------------------------------------
| Private Lessons Tabs Section
-------------------------------------------------------------------------
*/

const PrivateTabs = () => {
  const buttonText = tabContent.map((content) => content.title);
  const buttonLink = [`/adult-learning`, `/gcse-spanish`, `/a-level-spanish`];

  const ButtonComponent = ({ children, className }) => (
    <button className={className}>{children}</button>
  );

  return (
    <Tabs
      buttonText={buttonText}
      buttonLink={buttonLink}
      tabContent={tabContent}
      ButtonComponent={ButtonComponent}
      showZoomBar={true}
    />
  );
};

export default PrivateTabs;
