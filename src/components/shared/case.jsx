/*
-------------------------------------------------------------------------
| Import of React, PropTypes & CSS
-------------------------------------------------------------------------
*/

import React from "react";
import PropTypes from "prop-types";
import styles from "./case.module.css";

/*
-------------------------------------------------------------------------
| Sticky Card Sections - Cases
-------------------------------------------------------------------------
*/

const Case = ({
  heading,
  description,
  imgSrc,
  imgAlt,
  caption,
  buttons = [],
}) => {
  return (
    <div className={styles["case-root"]}>
      <div className={styles["case-info"]}>
        <div className={styles["case-header"]}>
          <div className={styles["caseArticle-info"]}>
            {heading && <h2 className={styles["case-h2"]}>{heading}</h2>}
            {description && <p className={styles["case-p"]}>{description}</p>}
            <div className={styles["btn-holders"]}>
              {buttons.map((button, index) =>
                button.showButton && button.ButtonComponent ? (
                  <button.ButtonComponent
                    key={index}
                    text={button.text}
                    href={button.href}
                    to={button.to}
                    onClick={button.onClick}
                  />
                ) : null
              )}
            </div>
          </div>
          {caption && (
            <span className={styles["caption-small"]}>{caption}</span>
          )}
        </div>
      </div>
      <div className={styles["case-media"]}>
        {imgSrc && (
          <img className={styles["case-img"]} src={imgSrc} alt={imgAlt} />
        )}
      </div>
    </div>
  );
};

/*
-------------------------------------------------------------------------
| PropTypes Validation
-------------------------------------------------------------------------
*/

Case.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  caption: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string, // For external links
      to: PropTypes.string, // For internal navigation
      onClick: PropTypes.func, // Custom onClick handler
      ButtonComponent: PropTypes.elementType.isRequired,
      showButton: PropTypes.bool.isRequired,
    })
  ),
};

export default Case;
