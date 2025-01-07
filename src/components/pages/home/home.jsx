/*
-------------------------------------------------------------------------
| Import of React & SEO
-------------------------------------------------------------------------
*/

import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

/*
-------------------------------------------------------------------------
| Import of Shared Components
-------------------------------------------------------------------------
*/

import Header from "/src/components/pages/home/components/header";
import DropDown from "/src/components/shared/dropdown";
import HomeSteps from "/src/components/pages/home/components/home-steps";
import TestimonialSlider from "../../../components/shared/review-slider";
import Cases from "./components/cases";
import AboutUs from "./components/about-us-section";
import FaqHome from "/src/components/pages/home/components/faq-home";

/*
-------------------------------------------------------------------------
| Import SVG & CSS
-------------------------------------------------------------------------
*/

import SquiggleSVG from "/src/components/pages/home/components/squiggle";
import Styles from "/src/components/pages/home/components/squiggle.module.css";

/*
-------------------------------------------------------------------------
| Home Page
-------------------------------------------------------------------------
*/

function Home() {
  useEffect(() => {
    const svg = document.querySelector(`svg.${Styles.squiggle}`);
    if (!svg) {
      console.error("SVG element not found");
      return;
    }

    const path = svg.querySelector("path");
    if (!path) {
      console.error("Path element not found within SVG");
      return;
    }

    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;
      const percentage = Math.min(distance / totalDistance, 1);
      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
    };

    scroll();
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>
            Henley Spanish Centre | Online Spanish Courses & Lessons
          </title>
          <meta
            name="description"
            content="The Henley Spanish Centre is an Online Spanish School that offers bespoke Spanish Lessons & Courses"
          />
          <meta
            property="og:title"
            content="Online Spanish Courses & Lessons"
          />
          <meta
            property="og:description"
            content="An Online Spanish School that offers bespoke Spanish Lessons & Courses"
          />
          <meta
            property="og:image"
            content="/src/assets/featured/home-featured.jpg"
          />
        </Helmet>
        <div className="App">
          <SquiggleSVG />
          <DropDown />
          <Header />
          <HomeSteps />
          <TestimonialSlider />
          <Cases />
          <AboutUs />
          <FaqHome />
        </div>
      </>
    </HelmetProvider>
  );
}

export default Home;
