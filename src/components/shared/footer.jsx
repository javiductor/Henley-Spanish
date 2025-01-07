/*
-------------------------------------------------------------------------
| Import of React, CSS & Buttons
-------------------------------------------------------------------------
*/

import React from "react";
import styles from "./footer.module.css";
import { BtnCTA } from "./buttons";

/*
-------------------------------------------------------------------------
| Footer links 
-------------------------------------------------------------------------
*/

const footerLinks = [
  { title: "Our Courses", url: "/courses" },
  { title: "1-2-1 Lessons", url: "/private" },
  { title: "Corporate training", url: "/corporate" },
  { title: "About Us", url: "/about" },
  { title: "Contact Us", url: "/contact" },
  { title: "Legal", url: "/privacy-policy" },
];

/*
-------------------------------------------------------------------------
| Footer Section
-------------------------------------------------------------------------
*/

const Footer = () => {
  return (
    <>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-left"]}>
          <img
            src="/assets/Logo/henley-spanish-logo-white.png"
            className={styles["logo-footer"]}
          />
          <div className={styles["footer-text"]}>
            <div>
              {footerLinks.slice(0, 2).map((link) => (
                <p key={link.title}>
                  <a href={link.url}>{link.title}</a>
                </p>
              ))}
            </div>
            <div>
              {footerLinks.slice(2, 4).map((link) => (
                <p key={link.title}>
                  <a href={link.url}>{link.title}</a>
                </p>
              ))}
            </div>
            <div>
              {footerLinks.slice(4, 6).map((link) => (
                <p key={link.title}>
                  <a href={link.url}>{link.title}</a>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles["footer-right"]}>
          <div className={styles["footer-btnHolder"]}>
            <BtnCTA href="https://calendly.com/henleyspanishcentre/assessment-call" />
          </div>
          <div className={styles["links-right"]}>
            <a href="tel:07495 477305" className={styles["footer-links"]}>
              (+44) 7495 477305
            </a>
            <a
              href="mailto:henleyspanishcentre@gmail.com"
              className={styles["footer-links"]}
            >
              henleyspanishcentre@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
