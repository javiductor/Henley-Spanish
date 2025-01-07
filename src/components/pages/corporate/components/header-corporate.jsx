/*
-------------------------------------------------------------------------
| Import of React, Styles & Buttons
-------------------------------------------------------------------------
*/

import React from "react";
import styles from "./header-corporate.module.css";
import { BtnCTA, BtnSecond } from "../../../shared/buttons";

/*
-------------------------------------------------------------------------
| Corporate Page Custom Header
-------------------------------------------------------------------------
*/

const CoursesHeader = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-left"]}>
        <div className={styles["h1"]}>
          <h1>
            Corporate
            <span className={styles["h1-bold"]}> Spanish Training</span>
          </h1>
          <p>
            Mauris a massa vel massa maximus suscipit sed at metus. Nam
            venenatis, diam aliquet ssa maximus suscipit sed at metus. Nam
            venenatis, diam aliquet.
          </p>
          <div className={styles["btn-holders"]}>
            <BtnCTA
              text="Book a Call"
              href="https://calendly.com/henleyspanishcentre/assessment-call"
              className={BtnCTA}
            />
            <BtnSecond text="Contact us" to="/contact" />
          </div>
        </div>
      </div>
      <div className={styles["header-images"]}>
        <div id={styles["image-card-1"]} className={styles["image-card"]}>
          <img
            src="../src/assets/corporate/business-1.jpg"
            className={styles["image-right"]}
          />
        </div>
        <div id={styles["image-card-2"]} className={styles["image-card"]}>
          <img
            src="../src/assets/corporate/business-9.jpg"
            className={styles["image-right"]}
          />
        </div>
      </div>
      <div className={styles["header-images"]}>
        <div id={styles["image-card-3"]} className={styles["image-card"]}>
          <img
            src="../src/assets/corporate/business-10.jpg"
            className={styles["image-right"]}
          />
        </div>
        <div id="image-card-4" className={styles["image-card"]}>
          <img
            src="../src/assets/corporate/business-7.jpg"
            className={styles["image-right"]}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesHeader;
