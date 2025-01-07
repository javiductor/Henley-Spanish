/*
-------------------------------------------------------------------------
| Import of React and SEO
-------------------------------------------------------------------------
*/

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

/*
-------------------------------------------------------------------------
| Import of Shared Components
-------------------------------------------------------------------------
*/

import CoursesHeader from "./components/courses-header";
import PrivateLeftRight from "./components/private-courses";
import GroupLeftRight from "./components/group-courses";
import PrivateSteps from "./components/private-steps";
import CoursesSteps from "./components/group-steps";
import TestimonialSlider from "../../../components/shared/review-slider";
import FaqCourses from "./components/faq-courses";
import CTA from "/src/components/shared/cta";

/*
-------------------------------------------------------------------------
| Courses Page
-------------------------------------------------------------------------
*/

function Courses() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Group and Private Spanish Courses | Henley Spanish Centre</title>
        <meta
          name="description"
          content="At the Henley Spanish Centre we offer Group & Private Courses to people of all ages and levels"
        />
        <meta property="og:title" content="Group and Private Spanish Courses" />
        <meta
          property="og:description"
          content="Group & Private Courses to people of all ages and levels"
        />
        <meta
          property="og:image"
          content="/src/assets/featured/courses-featured.jpg"
        />
      </Helmet>
      <div className="App">
        <CoursesHeader />
        <GroupLeftRight />
        <CoursesSteps />
        <TestimonialSlider />
        <PrivateLeftRight />
        <PrivateSteps />
        <CTA />
        <FaqCourses />
      </div>
    </HelmetProvider>
  );
}

export default Courses;
