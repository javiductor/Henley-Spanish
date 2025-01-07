/*
-------------------------------------------------------------------------
| Import of React, Shared Components & CSS
-------------------------------------------------------------------------
*/
import React from "react";
import { FAQHeading, FAQ } from "/src/components/shared/faqs";
import styles from "/src/components/shared/faqs.module.css";

/*
-------------------------------------------------------------------------
| Courses FAQ Data
-------------------------------------------------------------------------
*/

const faqData = [
  {
    question: "Do you offer one-off lessons?",
    answer:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus...",
    imgSrc: "/src/assets/icons/phone.png",
  },
  {
    question: "Do you tutor children?",
    answer:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus...",
  },
  {
    question: "Can my partner and I do a course together?",
    answer:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus...",
  },
  {
    question: "Can I pay lesson by lesson?",
    answer:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus...",
  },
  {
    question: "Can I have a trial lesson?",
    answer:
      "Mauris a massa vel massa maximus suscipit sed at metus. Nam venenatis, diam aliquet ssa maximus suscipit sed at metus...",
  },
];

/*
-------------------------------------------------------------------------
| Courses FAQ Section
-------------------------------------------------------------------------
*/

const FaqCourses = () => (
  <div className={styles.faqSection}>
    <FAQHeading />
    <FAQ FaqData={faqData} />
  </div>
);

export default FaqCourses;
