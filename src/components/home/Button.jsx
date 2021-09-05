import React, { Component } from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div className="container">
      <button onClick={props.funcion} className="container__button">
        {props.title}
      </button>
    </div>
  );
}

export default Button;
