import React, { Component, useState } from "react";
import Header from "../components/home/Header";
import Button from "../components/home/Button";
import PokemonInfo from "../components/home/PokemonInfo";
import Spin from "../components/home/Spin";
import ArrowDown from "../components/home/ArrowDown";
import Footer from "../components/home/Footer";
function Home(props) {
  const [loader, getLoader] = useState(true);
  const [pokemonFound, getPokemonFound] = useState(false);
  const [pokemonName, getPokemonName] = useState("");
  const [pokemonImg, getPokemonImg] = useState("");
  const [pokemonAbilities1, getPokemonAbilities1] = useState("");
  const [pokemonAbilities2, getPokemonAbilities2] = useState("");
  const [pokemonType, getPokemonType] = useState("");

  const [pokemonId, getPokemonId] = useState("");
  const [pokemonWGTS, getPokemonWGTS] = useState("");
  const [pokemonHP, getPokemonHP] = useState("");
  const [pokemonATK, getPokemonATK] = useState("");
  const [pokemonDEF, getPokemonDEF] = useState("");
  const [pokemonSPD, getPokemonSPD] = useState("");

  const getInfo = async (pokemon) => {
    getLoader(false);

    let requestData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    if (requestData.status === 404) {
      getPokemonFound(false);
      alert("This Pokemon does not exist, please search it again");
    } else {
      getPokemonFound(true);
      console.log(requestData.status);
      let responseData = await requestData.json();

      console.log(responseData);

      console.log(requestData.status);

      const id = await responseData.id;
      const name = await responseData.name;
      const img = await responseData.sprites.other["official-artwork"]
        .front_default;
      // const abilitie1 =
      //   await `First Abilitie: ${responseData.abilities[0].ability.name}`;
      // const abilitie2 =
      //   await `Seccond Abilitie: ${responseData.abilities[1].ability.name}`;
      const type = await `TYPE: ${responseData.types[0].type.name}`;
      const wgt = await `WEIGHT: ${responseData.weight}`;

      const hp = await responseData.stats[0].base_stat;
      const atk = await responseData.stats[1].base_stat;
      const def = await responseData.stats[2].base_stat;
      const spd = await responseData.stats[5].base_stat;

      getPokemonName(name.toUpperCase());
      getPokemonImg(img);
      getPokemonId(id);
      // getPokemonAbilities1(abilitie1.toUpperCase());
      // getPokemonAbilities2(abilitie2.toUpperCase());
      getPokemonType(type.toUpperCase());

      getPokemonWGTS(wgt.toUpperCase());
      getPokemonHP(hp);
      getPokemonATK(atk);
      getPokemonDEF(def);
      getPokemonSPD(spd);
      getPokemonWGTS(wgt);
    }
  };

  const handleText = (e) => {
    const input = document.getElementById("input");
    const inputValue = input.value;
    console.log(inputValue.toLowerCase());

    if (inputValue === "") {
      alert("Please, write the name of the pokemon");
    } else {
      getInfo(inputValue.toLowerCase());
    }
  };

  const resetInfo = () => {
    getPokemonFound(false);
    // window.location.reload();
  };
  return (
    <div>
      <div className="container-supreme">
        <Header />
        <div className="container">
          <input
            type="text"
            className="container__input"
            placeholder="Write the name or the id of the Pokemon"
            id="input"
            autoComplete="off"
          />
        </div>
        <Button funcion={handleText} title="Search" />

        <ArrowDown />
      </div>

      {!pokemonFound ? (
        <Spin />
      ) : (
        <PokemonInfo
          name={pokemonName}
          img={pokemonImg}
          // abilitie1={pokemonAbilities1}
          // abilitie2={pokemonAbilities2}
          type={pokemonType}
          wgt={pokemonWGTS}
          hp={pokemonHP}
          atk={pokemonATK}
          def={pokemonDEF}
          spd={pokemonSPD}
          id={pokemonId}
        />
      )}
      <Button funcion={resetInfo} title="Reset" />
      <hr
        style={{
          width: "80%",
          margin: "40px auto 0 auto",
          borderColor: "#ffcc00",
        }}
      />
      <Footer />
    </div>
  );
}

export default Home;
