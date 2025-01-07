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
import AboutHeader from "/src/components/pages/about/components/about-header";
import AboutSteps from "/src/components/pages/about/components/about-steps";
import AboutLeftRight from "/src/components/pages/about/components/about-left-right";
import AboutRightLeft from "/src/components/pages/about/components/about-right-left";
import TestimonialSlider from "../../../components/shared/review-slider";
import FaqAbout from "/src/components/pages/about/components/faq-about";

/*
-------------------------------------------------------------------------
| About Page
-------------------------------------------------------------------------
*/

function AboutUs() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>About the Henley Spanish Centre</title>
          <meta
            name="description"
            content="Meet our Founder Karen and learn more about our story at the Henley Spanish Centre!"
          />
          <meta property="og:title" content="About the Henley Spanish Centre" />
          <meta
            property="og:description"
            content="Learn more about our story at the Henley Spanish Centre!"
          />
          <meta
            property="og:image"
            content="/assets/featured/about-featured.jpg"
          />
        </Helmet>
        <div className="App">
          <AboutHeader />
          <AboutSteps />
          <AboutLeftRight />
          <TestimonialSlider />
          <AboutRightLeft />
          <FaqAbout />
        </div>
      </>
    </HelmetProvider>
  );
}

export default AboutUs;
