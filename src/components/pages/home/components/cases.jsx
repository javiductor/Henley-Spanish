/*
-------------------------------------------------------------------------
| Import of React,  Shared Components, CSS & Buttons
-------------------------------------------------------------------------
*/

import React from "react";
import Case from "/src/components/shared/case";
import styles from "/src/components/shared/case.module.css";
import { BtnCTA, BtnSecond } from "/src/components/shared/buttons";

/*
-------------------------------------------------------------------------
| Sticky Card Section - Cases
-------------------------------------------------------------------------
*/

const Cases = () => {
  return (
    <div className={styles["cases"]}>
      <Case
        heading="Group Courses"
        description="Curabitur ornare neque a pretium tincidunt. Quisque imperdiet lacus eros, in finibus ex bibendum a. Quisque cursus, ipsum ac pretium tristique, ante nisi finibus lacus, auctor gravida massa lectus et metus. Aenean eget consequat libero. Cras in nibh hendrerit, lobortis libero quis, mollis nibh. Aliquam suscipit metus quis lacus tempus, sed congue metus egestas."
        imgSrc="/assets/cases/webp/courses.webp"
        imgAlt="man-group-course"
        caption="01 - 05"
        buttons={[
          {
            text: "Learn More",
            to: "/courses",
            ButtonComponent: BtnSecond,
            showButton: true,
          },
          {
            text: "Book a Call",
            href: "https://calendly.com/henleyspanishcentre/assessment-call",
            ButtonComponent: BtnCTA,
            showButton: true,
          },
        ]}
      />
      <Case
        heading="Private Lessons"
        description="Curabitur ornare neque a pretium tincidunt. Quisque imperdiet lacus eros, in finibus ex bibendum a. Quisque cursus, ipsum ac pretium tristique, ante nisi finibus lacus, auctor gravida massa lectus et metus. Aenean eget consequat libero. Cras in nibh hendrerit, lobortis libero quis, mollis nibh. Aliquam suscipit metus quis lacus tempus, sed congue metus egestas."
        imgSrc="/assets/cases/webp/private.webp"
        imgAlt="private-courses"
        caption="02 - 05"
        buttons={[
          {
            text: "Learn More",
            to: "/private",
            ButtonComponent: BtnSecond,
            showButton: true,
          },
          {
            text: "Book a Call",
            href: "https://calendly.com/henleyspanishcentre/assessment-call",
            ButtonComponent: BtnCTA,
            showButton: true,
          },
        ]}
      />
      <Case
        heading="GCSE & A-Level"
        description="Curabitur ornare neque a pretium tincidunt. Quisque imperdiet lacus eros, in finibus ex bibendum a. Quisque cursus, ipsum ac pretium tristique, ante nisi finibus lacus, auctor gravida massa lectus et metus. Aenean eget consequat libero. Cras in nibh hendrerit, lobortis libero quis, mollis nibh. Aliquam suscipit metus quis lacus tempus, sed congue metus egestas."
        imgSrc="/assets/cases/webp/gcse.webp"
        imgAlt="GCSE-Alevel"
        caption="04 - 05"
        buttons={[
          {
            text: "Learn More",
            to: "/private",
            ButtonComponent: BtnSecond,
            showButton: true,
          },
          {
            text: "Book a Call",
            href: "https://calendly.com/henleyspanishcentre/assessment-call",
            ButtonComponent: BtnCTA,
            showButton: true,
          },
        ]}
      />
      <Case
        heading="Corporate Spanish"
        description="Curabitur ornare neque a pretium tincidunt. Quisque imperdiet lacus eros, in finibus ex bibendum a. Quisque cursus, ipsum ac pretium tristique, ante nisi finibus lacus, auctor gravida massa lectus et metus. Aenean eget consequat libero. Cras in nibh hendrerit, lobortis libero quis, mollis nibh. Aliquam suscipit metus quis lacus tempus, sed congue metus egestas."
        imgSrc="/assets/cases/webp/corporate.webp"
        imgAlt="corporate-spanish"
        caption="05 - 05"
        buttons={[
          {
            text: "Learn More",
            to: "/corporate",
            ButtonComponent: BtnSecond,
            showButton: true,
          },
          {
            text: "Book a Call",
            href: "https://calendly.com/henleyspanishcentre/assessment-call",
            ButtonComponent: BtnCTA,
            showButton: true,
          },
        ]}
      />
    </div>
  );
};

export default Cases;
