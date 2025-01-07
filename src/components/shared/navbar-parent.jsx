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
        <DropDown />
      </div>
    </>
  );
};

export default NavbarParent;
