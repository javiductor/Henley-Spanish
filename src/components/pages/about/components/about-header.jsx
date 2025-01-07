/*
-------------------------------------------------------------------------
| Import of React, Styles & Buttons
-------------------------------------------------------------------------
*/

import React from "react";
import styles from "./about-header.module.css";
import { BtnCTA, BtnSecond } from "../../../shared/buttons";

/*
-------------------------------------------------------------------------
| About Header
-------------------------------------------------------------------------
*/

const AboutHeader = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-left"]}>
        <div className={styles["h1"]}>
          <h1>
            About the{" "}
            <span className={styles["h1-bold"]}>
              Henley <br />
              Spanish Center
            </span>{" "}
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
            src="/assets/about/about-header-1.jpg"
            className={styles["image-right"]}
          />
        </div>
        <div id={styles["image-card-2"]} className={styles["image-card"]}>
          <img
            src="/assets/about/about-header-3.jpg"
            className={styles["image-right"]}
          />
        </div>
      </div>
      <div className={styles["header-images"]}>
        <div id={styles["image-card-3"]} className={styles["image-card"]}>
          <img
            src="/assets/about/about-header-2.jpg"
            className={styles["image-right"]}
          />
        </div>
        <div id="image-card-4" className={styles["image-card"]}>
          <img
            src="/assets/about/about-header-4.jpg"
            className={styles["image-right"]}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
