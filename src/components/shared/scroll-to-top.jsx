/*
-------------------------------------------------------------------------
| Import of  useState & useLocation
-------------------------------------------------------------------------
*/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
-------------------------------------------------------------------------
| Scroll to top when link clicked
-------------------------------------------------------------------------
*/

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
