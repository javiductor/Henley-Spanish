/*
-------------------------------------------------------------------------
| Import of React, CSS & Buttons
-------------------------------------------------------------------------
*/

import React from "react";
import styles from "./header.module.css";
import { BtnCTA, BtnSecond } from "../../../shared/buttons";

/*
-------------------------------------------------------------------------
| Home Page Custom Header
-------------------------------------------------------------------------
*/

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-left"]}>
        <div className={styles["h1"]}>
          <h1>
            An <span className={styles["h1-bold"]}>Online Spanish School</span>{" "}
            for people of all ages & levels
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
            <BtnSecond text="Our Courses" to="/courses" />
          </div>
        </div>
      </div>
      <div className={styles["header-center"]}>
        <div>
          <img
            src="/assets/header-final/webp/image-center-6.webp"
            className={styles["image-center"]}
          />
          <div className={styles["zoom-bar"]}>
            <img src="/assets/icons/menu.png" className={styles["menu"]} />
            <img src="/assets/icons/video.png" className={styles["video"]} />
            <img src="/assets/icons/pause.png" className={styles["pause"]} />
            <img src="/assets/icons/micro.png" className={styles["micro"]} />
            <a href="https://calendly.com/henleyspanishcentre/assessment-call">
              <img src="/assets/icons/phone.png" className={styles["phone"]} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles["header-right"]}>
        <img
          src="/assets/header-final/webp/header-right-1.webp"
          className={styles["image-right"]}
        />
        <img
          src="/assets/header-final/webp/header-right-2.webp"
          className={styles["image-right"]}
        />
        <img
          src="/assets/header-final/webp/header-right-3.webp"
          className={styles["image-right"]}
        />
      </div>
    </div>
  );
};

export default Header;
