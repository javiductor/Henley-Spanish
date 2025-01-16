/*
-------------------------------------------------------------------------
| Import of React, CSS, Buttons & Lucide-React Icons
-------------------------------------------------------------------------
*/

import React from "react";
import styles from "./dropdown.module.css";
import { BtnCTA } from "./buttons";
import {
  Home,
  BookOpen,
  User,
  Building,
  Users,
  Mail,
  ArrowUpRight,
} from "lucide-react";

/*
-------------------------------------------------------------------------
| Dropdown Menu Section
-------------------------------------------------------------------------
*/

const DropDown = () => {
  return (
    <div className={styles["dropdown-container"]}>
      <div className={styles["dropdown-left"]}>
        <h4 className={styles["dropdown-heading"]}>Get a free assessment</h4>
        <p className={styles["dropdown-text"]}>
          Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis,
          diam aliquet ssa maximus suscipit.
        </p>
        <BtnCTA
          text="Book A Call"
          href="https://calendly.com/henleyspanishcentre/assessment-call"
        />
      </div>

      <div className={styles["dropdown-center"]}>
        <a href="/" className={styles["menu-item"]}>
          <div className={styles["menu-item-top"]}>
            <div className={styles["menu-item-content"]}>
              <Home className={styles["menu-icon"]} />
              <h4 className={styles["dropdown-heading"]}>Home</h4>
            </div>
            <ArrowUpRight className={styles["arrow"]} />
          </div>
          <p className={styles["dropdown-small"]}>An online Spanish School.</p>
        </a>
        <a href="/courses" className={styles["menu-item"]}>
          <div className={styles["menu-item-top"]}>
            <div className={styles["menu-item-content"]}>
              <BookOpen className={styles["menu-icon"]} />
              <h4 className={styles["dropdown-heading"]}>Our Courses</h4>
            </div>
            <ArrowUpRight className={styles["arrow"]} />
          </div>
          <p className={styles["dropdown-small"]}>
            See our group and private spanish courses.
          </p>
        </a>
        <a href="/private" className={styles["menu-item"]}>
          <div className={styles["menu-item-top"]}>
            <div className={styles["menu-item-content"]}>
              <User className={styles["menu-icon"]} />
              <h4 className={styles["dropdown-heading"]}>Private Lessons</h4>
            </div>
            <ArrowUpRight className={styles["arrow"]} />
          </div>
          <p className={styles["dropdown-small"]}>
            1-2-1 Spanish Lessons for students of all ages.
          </p>
        </a>
      </div>

      <div className={styles["dropdown-right"]}>
        <a href="/corporate" className={styles["menu-item"]}>
          <div className={styles["menu-item-top"]}>
            <div className={styles["menu-item-content"]}>
              <Building className={styles["menu-icon"]} />
              <h4 className={styles["dropdown-heading"]}>Corporate Training</h4>
            </div>
            <ArrowUpRight className={styles["arrow"]} />
          </div>
          <p className={styles["dropdown-small"]}>
            Upskill your employees with Spanish lessons.
          </p>
        </a>
        <a href="/about" className={styles["menu-item"]}>
          <div className={styles["menu-item-top"]}>
            <div className={styles["menu-item-content"]}>
              <Users className={styles["menu-icon"]} />
              <h4 className={styles["dropdown-heading"]}>About Us</h4>
            </div>
            <ArrowUpRight className={styles["arrow"]} />
          </div>
          <p className={styles["dropdown-small"]}>
            Find out who we are and what we do.
          </p>
        </a>
        <a href="/contact" className={styles["menu-item"]}>
          <div className={styles["menu-item-top"]}>
            <div className={styles["menu-item-content"]}>
              <Mail className={styles["menu-icon"]} />
              <h4 className={styles["dropdown-heading"]}>Contact Us</h4>
            </div>
            <ArrowUpRight className={styles["arrow"]} />
          </div>
          <p className={styles["dropdown-small"]}>
            Have a question? Get in touch with us today!
          </p>
        </a>
      </div>
    </div>
  );
};

export default DropDown;
