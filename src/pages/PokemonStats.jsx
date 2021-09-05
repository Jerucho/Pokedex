import React, { Component, useState } from "react";
import SearchBar from "../components/home/SearchBar";
function PokemonStats(props) {
  const [valorTexto, textoCambiante] = useState("");
  const handleText = (e) => {
    console.log(e.target.value);
    textoCambiante(e.target.value);
    //this.setState({ valor: e.target.value });
  };

  const getInfo = async () => {
    let request = await fetch("https://reqres.in/api/users?page=2");
    let response = await request.json();
    console.log(response);
  };

  return (
    <div>
      <h1>{valorTexto}</h1>
    </div>
  );
}

export default PokemonStats;
