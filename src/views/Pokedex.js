import React from "react";
import Header from "../components/Header";
import PokemonContainer from "../components/pokedex/PokemonContainer";

export default function Pokemon() {
  return (
    <div>
      <Header />
      <PokemonContainer />
    </div>
  );
}
