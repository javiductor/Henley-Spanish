/*
-------------------------------------------------------------------------
| Import of React, UseNavigate & CSS
-------------------------------------------------------------------------
*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./buttons.module.css";

/*
-------------------------------------------------------------------------
| Overall button Function
-------------------------------------------------------------------------
*/
const Button = ({ text, href, to, className, onClick, type }) => {
  const navigate = useNavigate();

  if (href) {
    return (
      <a href={href} className={className} rel="noopener noreferrer">
        {text}
      </a>
    );
  } else if (to) {
    return (
      <button
        className={className}
        onClick={() => {
          if (onClick) onClick();
          navigate(to);
        }}
        type={type || "button"}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button className={className} onClick={onClick} type={type || "button"}>
        {text}
      </button>
    );
  }
};

/*
-------------------------------------------------------------------------
| Call To Action Button (Blue)
-------------------------------------------------------------------------
*/
export const BtnCTA = ({ text = "Book a Call", href, to, onClick }) => {
  return (
    <Button
      text={text}
      href={href}
      to={to}
      className={styles["btn-cta"]}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

/*
-------------------------------------------------------------------------
| Secondary Button (Black)
-------------------------------------------------------------------------
*/
export const BtnSecond = ({ text = "LEARN MORE", href, to, onClick }) => {
  return (
    <Button
      text={text}
      href={href}
      to={to}
      className={styles["btn-secondary"]}
      onClick={onClick}
    />
  );
};

/*
-------------------------------------------------------------------------
| Form Submit Button
-------------------------------------------------------------------------
*/

export const BtnSubmit = ({ text = "Submit", onClick }) => {
  return (
    <Button
      text={text}
      className={`${styles["btn-cta"]} ${styles["btn-submit"]}`}
      onClick={onClick}
      type="submit"
    />
  );
};

/*
-------------------------------------------------------------------------
| Burger Menu Button
-------------------------------------------------------------------------
*/

export const BurgerMenu = ({ onClick, isOpen }) => {
  return (
    <button
      className={`${styles["burger-menu"]} ${isOpen ? styles["open"] : ""}`}
      onClick={onClick}
    >
      <div className={styles["burger-icon"]}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};
