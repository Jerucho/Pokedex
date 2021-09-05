import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Icons = (props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className="icons__a"
        style={{ textDecoration: "none", color: "#f0f0f0" }}
      >
        <FontAwesomeIcon icon={props.type} style={{ fontSize: "30px" }} />
      </a>
    </div>
  );
};

export default Icons;
