/*
-------------------------------------------------------------------------
| Import of React & CSS
-------------------------------------------------------------------------
*/

import React from "react";
import Styles from "./squiggle.module.css";

/*
-------------------------------------------------------------------------
| SVG Component
-------------------------------------------------------------------------
*/

const SquiggleSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1982.961"
    height="2435.707"
    viewBox="0 0 1982.961 2435.707"
    className={Styles.squiggle} // Apply class from CSS module
  >
    <path
      id="Path_1"
      data-name="Path 1"
      className={Styles.path} // Apply class from CSS module
      d="M-24028-576.649s538.6-116,754.605,185.635,38.2,597.99-157.84,713.825-519.479,184.21-552.137,445.719,197.756,500.9,381.986,506.2,457.809-36.625,485.031-280.72-149.924-307.786-230.449-275.66-325.229,163.274-121.066,468.885,500.482,239.279,514.111,378.88,579.758,212.719,902.816,220.985"
      transform="translate(24033.264 623.612)"
      strokeLinecap="round"
    />
  </svg>
);

export default SquiggleSVG;
