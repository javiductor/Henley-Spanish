/*
-------------------------------------------------------------------------
| Import of React, CSS & Buttons
-------------------------------------------------------------------------
*/

import React from "react";
import styles from "./courses-header.module.css";
import { BtnCTA, BtnSecond } from "../../../shared/buttons";

/*
-------------------------------------------------------------------------
| Courses Page Custom Header
-------------------------------------------------------------------------
*/

const CoursesHeader = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-left"]}>
        <div className={styles["h1"]}>
          <h1>
            Spanish <span className={styles["h1-bold"]}>Group and Private</span>{" "}
            Courses
          </h1>{" "}
          <p>
            Mauris a massa vel massa maximus suscipit sed at metus. Nam
            venenatis, diam aliquet ssa maximus suscipit sed at metus. Nam
            venenatis, diam aliquet.
          </p>
          <div className={styles["btn-holders"]}>
            <BtnCTA
              text="Book A Call"
              href="https://calendly.com/henleyspanishcentre/assessment-call"
            />
            <BtnSecond text="Contact us" to="/contact" />
          </div>
        </div>
      </div>
      <div className={styles["header-images"]}>
        <div id={styles["image-card-1"]} className={styles["image-card"]}>
          <img
            src="../src/assets/courses/header-1.jpg"
            className={styles["image-right"]}
          />
        </div>
        <div id={styles["image-card-2"]} className={styles["image-card"]}>
          <img
            src="../src/assets/courses/header-2.jpg"
            className={styles["image-right"]}
          />
        </div>
      </div>
      <div className={styles["header-images"]}>
        <div id={styles["image-card-3"]} className={styles["image-card"]}>
          <img
            src="../src/assets/courses/header-3.jpg"
            className={styles["image-right"]}
          />
        </div>
        <div id="image-card-4" className={styles["image-card"]}>
          <img
            src="../src/assets/courses/header-4.jpg"
            className={styles["image-right"]}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesHeader;
