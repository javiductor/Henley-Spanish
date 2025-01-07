/*
-------------------------------------------------------------------------
| Import of React, UseState, PropTypes, CSS, Buttons & Lucide-react icons
-------------------------------------------------------------------------
*/
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./faqs.module.css";
import { BtnCTA, BtnSecond } from "./buttons";
import { ChevronDown, ChevronUp } from "lucide-react";

/*
-------------------------------------------------------------------------
| FAQ H2 Section
-------------------------------------------------------------------------
*/

export const FAQHeading = () => (
  <div className={styles.faqHeader}>
    <h2>Frequently Asked Questions</h2>
    <p>
      Quick answers to questions you may have. <br />
      Can't find what you're looking for? Chat with us today.
    </p>
    <div className={styles.btnHolders}>
      <BtnCTA
        text="Book A Call"
        href="https://calendly.com/henleyspanishcentre/assessment-call"
      />
      <BtnSecond text="Contact Us" to="/contact" />
    </div>
  </div>
);

/*
-------------------------------------------------------------------------
| Single FAQ Question
-------------------------------------------------------------------------
*/

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div
    className={`${styles.faqContent} ${isOpen ? styles.open : ""}`}
    onClick={onClick}
  >
    <div className={styles.faqText}>
      <h5>{question}</h5>
      <p>{answer}</p>
    </div>
    <div className={styles.toggleButton}>
      {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
    </div>
  </div>
);

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

/*
-------------------------------------------------------------------------
| FAQ Questions Sections (Holder)
-------------------------------------------------------------------------
*/

export const FAQ = ({ imgSrc, imgAlt, FaqData = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {FaqData.map((item, index) => (
        <FAQItem
          key={index}
          {...item}
          isOpen={activeIndex === index}
          onClick={() => toggleFaq(index)}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
        />
      ))}
    </div>
  );
};

FAQ.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  FaqData: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
};
