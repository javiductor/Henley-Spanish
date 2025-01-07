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
| About Us Image & Text Section
-------------------------------------------------------------------------
*/

const AboutUs = () => {
  return (
    <LeftRightSection
      title="About Us"
      heading="Helping students across the UK reach their Spanish learning goals"
      description="Curabitur ornare neque a pretium tincidunt. Quisque imperdiet lacus eros, in finibus ex bibendum a. Quisque cursus, ipsum ac pretium tristique, ante nisi finibus lacus, auctor gravida massa lectus et metus. Aenean eget consequat libero. Cras in nibh hendrerit, lobortis libero quis, mollis nibh. Aliquam suscipit metus quis lacus tempus, sed congue metus egestas."
      imgSrc="../src/assets/home-about/home-about.webp"
      imgAlt="Corporate Spanish"
      thumbSrc="../src/assets/home-about/home-about-thumb.webp"
      thumbAlt="young-man-learning-spanish"
      buttonText="Learn More"
      buttonLink="/about"
      ButtonComponent={BtnSecond}
      reverseOrder={true}
      showZoomBar={false}
      showThumb={true}
      showThumb2={false}
    />
  );
};

export default AboutUs;
