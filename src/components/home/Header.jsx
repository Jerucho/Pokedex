import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="container">
      <img
        src="https://ianars.github.io/Pok-dex/images/pokedeex.png"
        className="container__img"
      ></img>
      <h2 className="container__h2">By Jeremias Amador</h2>
    </div>
  );
}
