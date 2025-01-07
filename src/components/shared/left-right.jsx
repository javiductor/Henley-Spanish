/*
-------------------------------------------------------------------------
| Import of React & CSS
-------------------------------------------------------------------------
*/
import React from "react";
import styles from "./left-right.module.css";

/*
-------------------------------------------------------------------------
| Left-Right Section (Image & Text) with Props Passed
-------------------------------------------------------------------------
*/
const LeftRightSection = ({
  title,
  heading,
  description,
  imgSrc,
  imgAlt,
  thumbSrc,
  thumbAlt,
  buttonText,
  buttonLink,
  ButtonComponent = BtnCTA,
  showThumb = false,
  showButton = true,
  showZoomBar = true,
  reverseOrder = true,
}) => {
  return (
    <div
      className={`${styles["left-right-container"]} ${
        reverseOrder ? styles["reverse"] : ""
      }`}
    >
      <div className={styles["left"]}>
        {title && <h5>{title}</h5>}
        {heading && <h2>{heading}</h2>}
        {description && <p>{description}</p>}
        {showButton && ButtonComponent && buttonLink && (
          <a href={buttonLink} rel="noopener noreferrer">
            <ButtonComponent>{buttonText}</ButtonComponent>
          </a>
        )}
      </div>
      <div className={styles["right"]}>
        <div className={styles["image-left"]}>
          {showThumb && thumbSrc && (
            <img className={styles["thumb"]} src={thumbSrc} alt={thumbAlt} />
          )}
          {imgSrc && (
            <img className={styles["image"]} src={imgSrc} alt={imgAlt} />
          )}
          {showZoomBar && (
            <div className={styles["zoom-bar"]}>
              <img
                src="../src/assets/icons/menu.png"
                className={styles["menu"]}
                alt="Menu icon"
              />
              <img
                src="../src/assets/icons/video.png"
                className={styles["video"]}
                alt="Video icon"
              />
              <img
                src="../src/assets/icons/pause.png"
                className={styles["pause"]}
                alt="Pause icon"
              />
              <img
                src="../src/assets/icons/micro.png"
                className={styles["micro"]}
                alt="Microphone icon"
              />
              <img
                src="../src/assets/icons/phone.png"
                className={styles["phone"]}
                alt="Phone icon"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftRightSection;
