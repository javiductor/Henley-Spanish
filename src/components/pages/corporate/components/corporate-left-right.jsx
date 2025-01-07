/*
-------------------------------------------------------------------------
| Import of React, Shared Components & Buttons
-------------------------------------------------------------------------
*/

import React from "react";
import LeftRightSection from "/src/components/shared/left-right";
import { BtnSecond } from "../../../shared/buttons";

/*
-------------------------------------------------------------------------
| Corporate Page Image & text section
-------------------------------------------------------------------------
*/

const CorporateLeftRight = () => {
  return (
    <LeftRightSection
      title="Corporate training"
      heading="Bespoke Spanish training for businesses"
      description="Curabitur ornare neque a pretium tincidunt. Quisque imperdiet lacus eros, in finibus ex bibendum a. Quisque cursus, ipsum ac pretium tristique, ante nisi finibus lacus, auctor gravida massa lectus et metus. Aenean eget consequat libero. Cras in nibh hendrerit, lobortis libero quis, mollis nibh. Aliquam suscipit metus quis lacus tempus, sed congue metus egestas."
      imgSrc="../src/assets/corporate/business-man.jpg"
      imgAlt="Reversed Image"
      thumbSrc="../src/assets/corporate/business-thumb.jpg"
      thumbAlt="young-man-learning-spanish"
      buttonText="Learn More"
      buttonLink="/about"
      ButtonComponent={BtnSecond}
      reverseOrder={true}
      showZoomBar={false}
      showThumb={true}
      showThumb2={false}
      showButton={false}
    />
  );
};

export default CorporateLeftRight;
