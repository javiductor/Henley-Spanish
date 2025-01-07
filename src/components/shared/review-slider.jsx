/*
-------------------------------------------------------------------------
| Import of React, UseState & CSS
-------------------------------------------------------------------------
*/
import React, { useState } from "react";
import styles from "./review-slider.module.css";

/*
-------------------------------------------------------------------------
| Testimonial Data
-------------------------------------------------------------------------
*/

const testimonials = [
  {
    review: `Karen is a wonderful teacher, she has endless patience and great empathy with her students. Classes are individually designed to the evolving level of each student and excellent course material is included. Karen makes learning a fun and enjoyable experience."`,
    name: "John and Julie",
    level: "1-2-1 Lessons",
  },
  {
    review: `Karen’s attention to detail and wide-ranging topics means I’ve progressed much further than I thought possible. The classes are always fun and the relaxed atmosphere definitely encourages conversation – I thoroughly recommend Henley Spanish!"`,
    name: "Mrs S Wilkinson",
    level: "1-2-1 Lessons",
  },
  {
    review: `Karen provides encouragement, support, but never makes you feel daft or silly if you can’t roll your ‘rrrrs’ or you don’t have an Spanish accent. What a breath of fresh air."`,
    name: "Ann",
    level: "Private Course",
  },
];

/*
-------------------------------------------------------------------------
| Testimonial Slider Section
-------------------------------------------------------------------------
*/

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const changeTestimonial = (newIndex) => {
    setFade(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(false);
    }, 500); // Adjust time to match CSS transition duration
  };

  const nextTestimonial = () => {
    changeTestimonial((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    changeTestimonial(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      <div className={styles["review-continer"]}>
        <div className={styles["review-left"]}>
          <h2>What our students are saying</h2>
          <p className={styles["text-left"]}>
            Here’s what some of our students have said about Henley Spanish
            Center.
          </p>
          <div className={styles["review-images"]}>
            <img
              src="/assets/reviews/man-1.jpg"
              className={styles["review-image-left"]}
              alt="Testimonial 1"
            />
            <img
              src="/assets/reviews/woman-1.jpg"
              className={styles["review-image-left"]}
              alt="Testimonial 2"
            />
            <img
              src="/assets/reviews/man-2.jpg"
              className={styles["review-image-left"]}
              alt="Testimonial 3"
            />
            <img
              src="/assets/reviews/woman-2.jpg"
              className={styles["review-image-left"]}
              alt="Testimonial 4"
            />
          </div>
        </div>
        <div
          className={`${styles["review-right"]} ${
            fade ? styles["fade-out"] : styles["fade-in"]
          }`}
        >
          <p className={styles["quote-icon"]}>"</p>
          <p className={styles["review"]}>
            {testimonials[currentIndex].review}
          </p>
          <div className={styles["review-author"]}>
            <div className={styles["review-author-info"]}>
              <p className={styles["review-author-name"]}>
                {testimonials[currentIndex].name}
              </p>
              <p className={styles["review-author-level"]}>
                {testimonials[currentIndex].level}
              </p>
            </div>
          </div>
          <div className={styles["btn-sliders"]}>
            <button className={styles["btn-prev"]} onClick={prevTestimonial}>
              &#60; {/* Left arrow */}
            </button>
            <button className={styles["btn-next"]} onClick={nextTestimonial}>
              &#62; {/* Right arrow */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
