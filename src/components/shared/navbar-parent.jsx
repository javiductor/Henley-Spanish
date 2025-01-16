/*
-------------------------------------------------------------------------
| Import of React, UseState, useEffect, useRef & Shared Components
-------------------------------------------------------------------------
*/
import React, { useState, useEffect, useRef } from "react";
import Menu from "./menu";
import DropDown from "./dropdown";
import styles from "./dropdown.module.css";

/*
-------------------------------------------------------------------------
| NavbarParent Component (Menu Container)
-------------------------------------------------------------------------
*/

const NavbarParent = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const burgerMenuRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLinkClick = () => {
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isDropdownVisible &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(event.target)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownVisible]);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isDropdownVisible) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isDropdownVisible]);

  // Prevent body scroll when dropdown is open
  useEffect(() => {
    if (isDropdownVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDropdownVisible]);

  return (
    <>
      <Menu
        onMenuClick={toggleDropdown}
        burgerMenuRef={burgerMenuRef}
        isOpen={isDropdownVisible}
      />
      {isDropdownVisible && (
        <div
          className={styles.overlay}
          onClick={() => setIsDropdownVisible(false)}
        ></div>
      )}
      <div
        ref={dropdownRef}
        className={`${styles.dropdown} ${isDropdownVisible ? styles.show : ""}`}
      >
        <DropDown onLinkClick={handleLinkClick} />
      </div>
    </>
  );
};

export default NavbarParent;
