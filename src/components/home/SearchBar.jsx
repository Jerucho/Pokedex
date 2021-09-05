import React, { Component, useState } from "react";

function SearchBar(props) {
  const [valorTexto, textoCambiante] = useState("");
  const handleText = (e) => {
    console.log(e.target.value);
    textoCambiante(e.target.value);
    //this.setState({ valor: e.target.value });
  };

  return (
    <div className="container">
      <h3 className="container__h3">
        {valorTexto}
        {/* Escribe el nombre del Pokemon para obtener informacion */}
      </h3>
      <input
        type="text"
        className="container__input"
        placeholder="Pokemon"
        onChange={handleText}
      />
    </div>
  );
}

export default SearchBar;
