/*
-------------------------------------------------------------------------
| Import of React & CSS
-------------------------------------------------------------------------
*/
import React from "react";
import styles from "./steps-1.module.css";

/*
-------------------------------------------------------------------------
| x3 Card Section
-------------------------------------------------------------------------
*/

const Steps = ({
  heading,
  stepsData,
  ButtonComponent,
  showHeading = true,
  showButton = true,
}) => {
  return (
    <>
      {showHeading && heading && (
        <div className={styles["h2-container"]}>
          <h2>{heading}</h2>
        </div>
      )}
      <div className={styles["steps-container"]}>
        {stepsData.map((step, index) => (
          <div className={styles["card"]} key={index}>
            <img
              className={styles["card-img"]}
              src={step.imgSrc}
              alt={step.imgAlt}
            />
            {step.title && <h3>{step.title}</h3>}
            <p>{step.description}</p>
            {showButton && ButtonComponent && (
              <ButtonComponent text={step.buttonText} to={step.buttonLink} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Steps;
