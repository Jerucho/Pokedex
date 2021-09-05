import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

function PokemonInfo(props) {
  return (
    <div className="">
      <div className="card">
        <h1 className="container__name">{props.name}</h1>
        <h3 className="container__id">#{props.id}</h3>
        <img
          src={props.img}
          alt="pokemon selected"
          className="container__img"
        />
        <ProgressBar width={`${props.hp / 2}%`} percent={props.hp} title="HP" />
        <ProgressBar
          width={`${props.atk / 2}%`}
          percent={props.atk}
          title="ATK"
        />
        <ProgressBar
          width={`${props.def / 2}%`}
          percent={props.def}
          title="DEF"
        />
        <ProgressBar
          width={`${props.spd / 2}%`}
          percent={props.spd}
          title="SPD"
        />
        <div></div>
      </div>
    </div>
  );
}

export default PokemonInfo;
