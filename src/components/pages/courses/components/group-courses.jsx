/*
-------------------------------------------------------------------------
| Import of React, Shared Components & Button
-------------------------------------------------------------------------
*/
import React from "react";
import LeftRightSection from "/src/components/shared/left-right";
import { BtnSecond } from "../../../shared/buttons";

/*
-------------------------------------------------------------------------
| Group Courses Image and Text Section
-------------------------------------------------------------------------
*/

const GroupLeftRight = () => {
  return (
    <LeftRightSection
      title="Group Courses"
      heading="Learn Spanish with others with our bespoke courses"
      description="Curabitur ornare neque a pretium tincidunt. Quisque imperdiet lacus eros, in finibus ex bibendum a. Quisque cursus, ipsum ac pretium tristique, ante nisi finibus lacus, auctor gravida massa lectus et metus. Aenean eget consequat libero. Cras in nibh hendrerit, lobortis libero quis, mollis nibh. Aliquam suscipit metus quis lacus tempus, sed congue metus egestas."
      imgSrc="/assets/courses/group-3.jpg"
      imgAlt="Reversed Image"
      thumbSrc="/assets/courses/group-4.jpg"
      thumbAlt="young-man-learning-spanish"
      buttonText="Learn More"
      buttonLink="/about"
      ButtonComponent={BtnSecond}
      reverseOrder={true}
      showZoomBar={true}
      showThumb={true}
      showThumb2={false}
      showButton={false}
    />
  );
};

export default GroupLeftRight;
