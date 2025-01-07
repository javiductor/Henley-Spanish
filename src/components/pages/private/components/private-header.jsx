/*
-------------------------------------------------------------------------
| Import of React, Stlyes & CSS 
-------------------------------------------------------------------------
*/

import React from "react";
import styles from "./private-header.module.css";
import { BtnCTA, BtnSecond } from "../../../shared/buttons";

/*
-------------------------------------------------------------------------
| Private Lessons Custom Header
-------------------------------------------------------------------------
*/

const PrivateHeader = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-left"]}>
        <div className={styles["h1"]}>
          <h1>
            <span className={styles["h1-bold"]}>Private</span> Spanish Lessons
          </h1>
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
        <div className={styles["header-center"]}>
          <div>
            <img
              src="/assets/private/private-header-1.jpg"
              className={styles["image-center"]}
            />
            <div className={styles["zoom-bar"]}>
              <img src="/assets/icons/menu.png" className={styles["menu"]} />
              <img src="/assets/icons/video.png" className={styles["video"]} />
              <img src="/assets/icons/pause.png" className={styles["pause"]} />
              <img src="/assets/icons/micro.png" className={styles["micro"]} />
              <img src="/assets/icons/phone.png" className={styles["phone"]} />
            </div>
          </div>
        </div>
        <div className={styles["header-right"]}>
          <div>
            <img
              src="/assets/private/private-header-2.jpg"
              className={styles["image-center"]}
            />
            <div className={styles["zoom-bar"]}>
              <img src="/assets/icons/menu.png" className={styles["menu"]} />
              <img src="/assets/icons/video.png" className={styles["video"]} />
              <img src="/assets/icons/pause.png" className={styles["pause"]} />
              <img src="/assets/icons/micro.png" className={styles["micro"]} />
              <img src="/assets/icons/phone.png" className={styles["phone"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateHeader;
