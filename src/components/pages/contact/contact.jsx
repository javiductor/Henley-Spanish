/*
-------------------------------------------------------------------------
| Import of React & SEO 
-------------------------------------------------------------------------
*/

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

/*
-------------------------------------------------------------------------
| Import Shared Component 
-------------------------------------------------------------------------
*/

import FormSection from "../../../components/shared/form-section";

/*
-------------------------------------------------------------------------
| Contact Page
-------------------------------------------------------------------------
*/

function Contact() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Get in touch with us today! | Henley Spanish Centre</title>
        <meta
          name="description"
          content="Looking to learn Spanish? Then look no furhter, simply get in touch and get started today!"
        />
        <meta property="og:title" content="Contact the Henley Spanish Centre" />
        <meta
          property="og:description"
          content="Want to learn Spanish? Simply get in touch today!"
        />
        <meta
          property="og:image"
          content="/src/assets/featured/contact-featured.jpg"
        />
      </Helmet>
      <div className="App">
        <FormSection />
      </div>
    </HelmetProvider>
  );
}

export default Contact;
