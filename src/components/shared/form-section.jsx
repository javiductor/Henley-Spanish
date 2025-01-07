/*
-------------------------------------------------------------------------
| Import of React, Shared Component & CSS
-------------------------------------------------------------------------
*/

import React from "react";
import ContactForm from "./form";
import styles from "./form-section.module.css";

/*
-------------------------------------------------------------------------
| Form Holder Section
-------------------------------------------------------------------------
*/

const FormSection = () => {
  return (
    <>
      <div className={styles.FormSection}>
        <div className={styles.left}>
          <h2>Contact us!</h2>
          <div className={styles.textLeft}>
            <p>
              Curabitur ornare neque a pretium tincidunt. Quisque imperdiet
              lacus eros, in finibus ex bibendum a. Quisque cursus, ipsum ac
              pretium tristique, ante nisi finibus lacus, auctor gravida massa
              lectus et metus. Aenean eget consequat libero. Cras in nibh
              hendrerit, lobortis libero quis, mollis nibh. Aliquam suscipit
              metus quis lacus tempus, sed congue metus egestas.
            </p>
            <a
              className={styles["contact-link"]}
              href="matilto:karenpetersspanish@gmail.com"
            >
              karenpetersspanish@gmail.com
            </a>
            <a className={styles["contact-link"]} href="tel:07495477305">
              (+44) 7495 477 305
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default FormSection;
