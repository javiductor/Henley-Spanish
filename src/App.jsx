import React, { useState, useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import ReactGA from "react-ga4";
import CookieConsent from "react-cookie-consent";
import { initGA } from "./main.jsx";

import NavbarParent from "./components/shared/navbar-parent";
import DropDown from "./components/shared/dropdown.jsx";
import Footer from "./components/shared/footer";
import ScrollToTop from "./components/shared/scroll-to-top";
import "./App.css";
import styles from "/src/styles/cookie-banner.module.css";
import { Cookie } from "lucide-react";

const Home = lazy(() => import("/src/components/pages/home/home"));
const AboutUs = lazy(() => import("/src/components/pages/About/About"));
const Courses = lazy(() => import("/src/components/pages/courses/courses"));
const Private = lazy(() => import("/src/components/pages/private/private"));
const Corporate = lazy(() =>
  import("/src/components/pages/corporate/corporate")
);
const Contact = lazy(() => import("/src/components/pages/contact/contact"));
const PrivacyPolicy = lazy(() =>
  import("./components/pages/privacy-policy/privacy-policy")
);

function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("cookieConsent") === "true") {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

function App() {
  const [gaInitialized, setGaInitialized] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookieConsent") === "true" && !gaInitialized) {
      initGA();
      setGaInitialized(true);
    }
  }, [gaInitialized]);

  return (
    <Router>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="cookieConsent"
        disableStyles={true}
        enableDeclineButton={true}
        containerClasses={styles.cookieBanner}
        buttonClasses={styles.acceptButton}
        declineButtonClasses={styles.declineButton}
        buttonWrapperClasses={styles.buttonContainer}
        expires={150}
        onAccept={() => {
          if (!gaInitialized) {
            initGA();
            setGaInitialized(true);
          }
          localStorage.setItem("cookieConsent", "true");
        }}
        onDecline={() => {
          localStorage.setItem("cookieConsent", "false");
        }}
      >
        <div className={styles.cookieText}>
          <Cookie className={styles.cookieIcon} />
          <p>
            This website uses cookies for analytics purposes to improve user
            experience.{" "}
          </p>
          <Link to="/privacy-policy" className={styles.policyLink}>
            Learn more
          </Link>
        </div>
      </CookieConsent>
      <NavbarParent />
      <DropDown />
      <ScrollToTop />
      <PageViewTracker />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/private" element={<Private />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
