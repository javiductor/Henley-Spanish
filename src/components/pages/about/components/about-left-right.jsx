/*
-------------------------------------------------------------------------
| Import of React & Shared Component
-------------------------------------------------------------------------
*/

import React from "react";
import LeftRightSection from "/src/components/shared/left-right";

/*
-------------------------------------------------------------------------
| About Image and text section
-------------------------------------------------------------------------
*/

const AboutLeftRight = () => {
  return (
    <LeftRightSection
      heading="Lorem Ipsum Dolor Mesta Polera Diupeo"
      description="Curabitur ornare neque a pretium tincidunt. Quisque imperdiet lacus eros, in finibus ex bibendum a. Quisque cursus, ipsum ac pretium tristique, ante nisi finibus lacus, auctor gravida massa lectus et metus. Aenean eget consequat libero. Cras in nibh hendrerit, lobortis libero quis, mollis nibh. Aliquam suscipit metus quis lacus tempus, sed congue metus egestas."
      imgSrc="/assets/about/woman-2.jpg"
      imgAlt="Reversed Image"
      thumbSrc="/assets/about/about-thumb.jpg"
      thumbAlt="young-man-learning-spanish"
      buttonText="Learn More"
      buttonLink="/about"
      ButtonComponent={false}
      reverseOrder={true}
      showZoomBar={true}
      showThumb={true}
    />
  );
};

export default AboutLeftRight;
