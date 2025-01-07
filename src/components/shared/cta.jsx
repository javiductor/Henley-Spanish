/*
-------------------------------------------------------------------------
| Import of React & CSS & Buttons
-------------------------------------------------------------------------
*/

import React from "react";
import styles from "./cta.module.css";
import { BtnCTA, BtnSecond } from "./buttons";

/*
-------------------------------------------------------------------------
| CTA Section
-------------------------------------------------------------------------
*/

const CTA = () => {
  return (
    <div className={styles["cta-container"]}>
      <h3>Book your free assessment call today!</h3>
      <div>
        <BtnCTA
          className={styles["btn-cta"]}
          text="Book A Call"
          href="https://calendly.com/henleyspanishcentre/assessment-call"
        />
        <BtnSecond
          className={styles["btn-second"]}
          text="Contact us"
          to="/contact"
        />
      </div>
    </div>
  );
};

export default CTA;
