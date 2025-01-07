/*
-------------------------------------------------------------------------
| Import of ReactCSS & Button
-------------------------------------------------------------------------
*/
import React from "react";
import styles from "./menu.module.css";
import { BtnCTA, BurgerMenu } from "./buttons";

/*
-------------------------------------------------------------------------
| Menu Section
-------------------------------------------------------------------------
*/

const Menu = ({ onMenuClick, burgerMenuRef, isOpen }) => {
  const handleBurgerClick = (e) => {
    e.stopPropagation();
    onMenuClick();
  };

  return (
    <header className={styles["menu-container"]}>
      <nav className={styles["navbar"]}>
        <div className={styles["logo-container"]}>
          <a href="/">
            <img
              className={styles["logo"]}
              src="/src/assets/logo/logo.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className={styles["menu-btns"]}>
          <BtnCTA
            text="Book a Call"
            href="https://calendly.com/henleyspanishcentre/assessment-call"
            className={BtnCTA}
          />
          <div ref={burgerMenuRef}>
            <BurgerMenu onClick={handleBurgerClick} isOpen={isOpen} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
