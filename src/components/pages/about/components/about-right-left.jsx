/*
-------------------------------------------------------------------------
| Import of React & Shared Components
-------------------------------------------------------------------------
*/
import React from "react";
import LeftRightSection from "/src/components/shared/left-right";

/*
-------------------------------------------------------------------------
| About Us Text and Image section
-------------------------------------------------------------------------
*/

const AboutRightLeft = () => {
  return (
    <LeftRightSection
      heading="Meet your tutor & our founder"
      description="Curabitur ornare neque a pretium tincidunt. Quisque imperdiet lacus eros, in finibus ex bibendum a. Quisque cursus, ipsum ac pretium tristique, ante nisi finibus lacus, auctor gravida massa lectus et metus. Aenean eget consequat libero. Cras in nibh hendrerit, lobortis libero quis, mollis nibh. Aliquam suscipit metus quis lacus tempus, sed congue metus egestas."
      imgSrc="/assets/about/karen-peters.jpg"
      imgAlt="Reversed Image"
      buttonText="Learn More"
      buttonLink="/about"
      ButtonComponent={false}
      reverseOrder={false}
      showZoomBar={false}
      showThumb={false}
    />
  );
};

export default AboutRightLeft;
