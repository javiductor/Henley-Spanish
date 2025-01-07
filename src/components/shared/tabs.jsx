/*
-------------------------------------------------------------------------
| Import of React, UseState & CSS
-------------------------------------------------------------------------
*/

import React, { useState } from "react";
import styles from "./tabs.module.css";

/*
-------------------------------------------------------------------------
| Tabs Section with Props Passed
-------------------------------------------------------------------------
*/

const Tabs = ({
  buttonText = [],
  buttonLink = [],
  tabContent = [],
  ButtonComponent,
  showZoomBar = true,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles["tabs-container"]}>
      <div className={styles["btn-container"]}>
        {buttonText.map((text, index) => (
          <a
            key={index}
            href={buttonLink[index]}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(index);
            }}
          >
            <ButtonComponent
              className={
                activeTab === index
                  ? styles["btn-secondary"]
                  : styles["btn-white"]
              }
            >
              {text}
            </ButtonComponent>
          </a>
        ))}
      </div>

      <div className={styles["content-container"]}>
        <div className={styles["left"]}>
          {tabContent[activeTab].imgSrc && (
            <img
              className={styles["image"]}
              src={tabContent[activeTab].imgSrc}
              alt={tabContent[activeTab].imgAlt}
            />
          )}
          {showZoomBar && (
            <div className={styles["zoom-bar"]}>
              <img
                src="/assets/icons/menu.png"
                className={styles["menu"]}
                alt="Menu icon"
              />
              <img
                src="/assets/icons/video.png"
                className={styles["video"]}
                alt="Video icon"
              />
              <img
                src="/assets/icons/pause.png"
                className={styles["pause"]}
                alt="Pause icon"
              />
              <img
                src="/assets/icons/micro.png"
                className={styles["micro"]}
                alt="Microphone icon"
              />
              <img
                src="/assets/icons/phone.png"
                className={styles["phone"]}
                alt="Phone icon"
              />
            </div>
          )}
        </div>
        <div className={styles["right"]}>
          {/* {tabContent[activeTab].title && (
            <h5>{tabContent[activeTab].title}</h5>
          )} */}
          {tabContent[activeTab].heading && (
            <h2>{tabContent[activeTab].heading}</h2>
          )}
          {tabContent[activeTab].description && (
            <p>{tabContent[activeTab].description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
