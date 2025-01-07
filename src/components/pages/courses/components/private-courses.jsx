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
| Private Courses Image and Text Section
-------------------------------------------------------------------------
*/

const PrivateLeftRight = () => {
  return (
    <LeftRightSection
      title="Private Courses"
      heading="Learn Spanish on your own or with a friend."
      description="Curabitur ornare neque a pretium tincidunt. Quisque imperdiet lacus eros, in finibus ex bibendum a. Quisque cursus, ipsum ac pretium tristique, ante nisi finibus lacus, auctor gravida massa lectus et metus. Aenean eget consequat libero. Cras in nibh hendrerit, lobortis libero quis, mollis nibh. Aliquam suscipit metus quis lacus tempus, sed congue metus egestas."
      imgSrc="../src/assets/courses/header-1.jpg"
      imgAlt="Online Group Course"
      buttonText="Learn More"
      buttonLink="/about"
      ButtonComponent={BtnSecond}
      showZoomBar={true}
      reverseOrder={false}
      showButton={false}
    />
  );
};

export default PrivateLeftRight;
