import React, { Component } from "react";

const ProgressBar = (props) => {
  return (
    <div className="progress">
      <h2 className="progress__h2">{props.title}</h2>
      <div id="progressbar">
        <div style={{ width: `${props.width}` }}>{props.percent}/300</div>
      </div>
    </div>
  );
};
export default ProgressBar;

// `${props.width}px`;
