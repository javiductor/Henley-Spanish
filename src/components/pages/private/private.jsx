/*
-------------------------------------------------------------------------
| Import of React & SEO 
-------------------------------------------------------------------------
*/

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

/*
-------------------------------------------------------------------------
| Import of Shared Components
-------------------------------------------------------------------------
*/

import PrivateHeader from "./components/private-header";
import PrivateLessonsSteps from "./components/private-lessons-steps";
import TestimonialSlider from "../../../components/shared/review-slider";
import CTA from "/src/components/shared/cta";
import FaqPrivate from "./components/faq-private";
import Privatetabs from "./components/private-tabs";

/*
-------------------------------------------------------------------------
| Private Lessons Page (1-2-1)
-------------------------------------------------------------------------
*/

function Private() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Adult, GCSE & A-Level Spanish Lessons | Henley Spanish Centre
        </title>
        <meta
          name="description"
          content="At the Henley Spanish Centre we offer 1-2-1 Spanish Lessons for adults, GCSE & A-level students!"
        />
        <meta
          property="og:title"
          content="Adult, GCSE & A-Level Spanish Lessons"
        />
        <meta
          property="og:description"
          content="1-2-1 Spanish Lessons for adults, GCSE & A-level students!"
        />
        <meta
          property="og:image"
          content="/src/assets/featured/private-featured.jpg"
        />
      </Helmet>
      <div className="App">
        <PrivateHeader />
        <Privatetabs />
        <PrivateLessonsSteps />
        <TestimonialSlider />
        <CTA />
        <FaqPrivate />
      </div>
    </HelmetProvider>
  );
}

export default Private;
