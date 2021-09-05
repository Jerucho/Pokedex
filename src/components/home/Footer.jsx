import React, { Component } from "react";
import Icons from "./Icons";

import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <h3>Jeremias Amador</h3>
        <div className="icons">
          <Icons
            type={faInstagram}
            className="icons__icon"
            url="https://instagram.com"
          />
          <Icons
            type={faTwitter}
            className="icons__icon"
            url="https://twitter.com"
          />
          <Icons
            type={faLinkedin}
            className="icons__icon"
            url="https://linkedin.com"
          />
          <Icons
            type={faGithub}
            className="icons__icon"
            url="https://github.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
