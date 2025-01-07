/*
-------------------------------------------------------------------------
| Import of React, SEO & CSS 
-------------------------------------------------------------------------
*/

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styles from "./privacy-policy.module.css";

/*
-------------------------------------------------------------------------
| Privacy Policy Page
-------------------------------------------------------------------------
*/

function PrivacyPolicy() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Privacy & Cookie Policies | Henley Spanish Centre</title>
        <meta
          name="description"
          content="Take a look at our Privacy & Cookie Policies"
        />
        <meta property="og:title" content="Privacy & Cookie Policies" />
        <meta
          property="og:description"
          content="Take a look at our Privacy & Cookie Policies"
        />
        <meta
          property="og:image"
          content="/assets/featured/legal-featured.jpg"
        />
      </Helmet>
      <div className="App">
        <div className={styles["privacy-container"]}>
          <h1>Our Privacy & Cookie Policies</h1>
          <p>
            Telephone Number: <a href="tel:0753974820">07539748205</a>
          </p>
          <p>
            e-mail:{" "}
            <a href="mailto:karenpetersspanish@gmail.com">
              karenpetersspanish@gmail.com
            </a>
          </p>
          <h2>Our Privacy Policy</h2>
          <p>
            We respect your privacy and are committed to protecting your
            personal data.
          </p>
          <p>
            Every time you visit our Web page, the web serve which we use
            automatically recognises no information regarding the domain or
            e-mail address.
          </p>
          <p>
            We (only) collect the e-mail addresses of those who communicate with
            us via e-mail, the e-mail addresses of those who make postings to
            one of our pages, aggregate information on what pages consumers
            access or visit, information volunteered by the consumer, such as
            survey information and/or site registrations (or form submissions).
          </p>
          <p>
            Said information that is collected is used to improve our web
            content and used by us to contact consumers for marketing purposes.
            If you do not want to receive e-mail from us in the future, please
            let us know by writing to us at the above e-mail address.
          </p>
          <p>
            Persons who supply us with their telephone numbers on-line will only
            receive telephone contact from us with information regarding orders
            they have placed online. If you would like not to receive any
            telephone contact, please contact us using the e-mail address above.
            Upon request we provide site visitors with access to all information
            [including proprietary information] that we maintain about them.
            Consumers can access this information by writing to us at the above
            e-mail address. Consumers can have this information corrected by
            writing to us at the above e-mail address.
          </p>
          <p>
            If you feel that this site is not following its stated information
            policy, you may contact us at the above e-mail address or phone
            number.
          </p>
          <h2>Our Cookie Policy</h2>
          <p>
            This Cookie Policy explains what cookies are and how we use them.
            You should read this policy to understand what cookies are, how we
            use them, the types of cookies we use i.e, the information we
            collect using cookies and how that information is used and how to
            control the cookie preferences. For further information on how we
            use, store and keep your personal data secure, see our Privacy
            Policy.You can at any time change or withdraw your consent from the
            Cookie Declaration on our website.
          </p>

          <p>
            Learn more about who we are, how you can contact us and how we
            process personal data in our Privacy Policy:
          </p>
          <ul>
            <li>
              Your consent applies to the following domains:
              henleyspanishcentre.com
            </li>
            <li>Your current state: Consent Accepted.</li>
          </ul>
          <h3>What are cookies?</h3>
          <p>
            Cookies are small text files that are used to store small pieces of
            information. The cookies are stored on your device when the website
            is loaded on your browser. These cookies help us make the website
            function properly, make the website more secure, provide better user
            experience, and understand how the website performs and to analyse
            what works and where it needs improvement.
          </p>
          <h3>How do we use cookies</h3>
          <p>
            As most of the online services, our website uses cookies first-party
            and third-party cookies for a number of purposes. The first-party
            cookies are mostly necessary for the website to function the right
            way, and they do not collect any of your personally identifiable
            data. The third-party cookies used on our websites are used mainly
            for understanding how the website performs, how you interact with
            our website, keeping our services secure, providing advertisements
            that are relevant to you, and all in all providing you with a better
            and improved user experience and help speed up your future
            interactions with our website.
          </p>
          <h3>What type of cookies do we use?</h3>
          <p>
            Essential: Some cookies are essential for you to be able to
            experience the full functionality of our site. They allow us to
            maintain user sessions and prevent any security threats. They do not
            collect or store any personal information. For example, these
            cookies allow you to log-in to your account and add products to your
            basket and checkout securely.
          </p>
          <p>
            Statistics: These cookies store information like the number of
            visitors to the website, the number of unique visitors, which pages
            of the website have been visited, the source of the visit etc. These
            data help us understand and analyse how well the website performs
            and where it needs improvement.
          </p>
          <p>
            Functional: These are the cookies that help certain non-essential
            functionalities on our website. These functionalities include
            embedding content like videos or sharing contents on the website on
            social media platforms.
          </p>
          <p>
            Preferences: These cookies help us store your settings and browsing
            preferences like language preferences so that you have a better and
            efficient experience on future visits to the website.
          </p>
          <h3>How can I control the cookie preference?</h3>
          <p>
            Should you decide to change your preferences later through your
            browsing session, you can click on the “Privacy & Cookie Policy” tab
            on your screen. This will display the consent notice again enabling
            you to change your preferences or withdraw your consent entirely.
          </p>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default PrivacyPolicy;
