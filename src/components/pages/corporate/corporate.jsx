/*
-------------------------------------------------------------------------
| Import of React & SEO 
-------------------------------------------------------------------------
*/

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

/*
-------------------------------------------------------------------------
| Import of shared Components
-------------------------------------------------------------------------
*/

import TestimonialSlider from "../../../components/shared/review-slider";
import CorporateLeftRight from "./components/corporate-left-right";
import CorporateSteps from "./components/corporate-steps";
import FaqCorporate from "./components/faq-corporate";
import CorporateHeader from "./components/header-corporate";
import CTA from "/src/components/shared/cta";

/*
-------------------------------------------------------------------------
| Corporate Page
-------------------------------------------------------------------------
*/

function Corporate() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Corporate Spanish Lessons | Henley Spanish Centre</title>
        <meta
          name="description"
          content="At the Henley Spanish Centre we offer bespoke Corporate Spanish training and lessons!"
        />
        <meta property="og:title" content="Corporate Spanish Lessons" />
        <meta
          property="og:description"
          content="Bespoke Corporate Spanish Training & Lessons!"
        />
        <meta
          property="og:image"
          content="/src/assets/featured/corporate-featured.jpg"
        />
      </Helmet>
      <div className="App">
        <CorporateHeader />
        <CorporateLeftRight />
        <CorporateSteps />
        <TestimonialSlider />
        <CTA />
        <FaqCorporate />
      </div>
    </HelmetProvider>
  );
}

export default Corporate;
