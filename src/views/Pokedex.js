import React, { useState } from "react";
import Header from "../components/Header";
import PokemonContainer from "../components/pokedex/PokemonContainer";
import PokeModal from "../components/pokedex/PokeModal";

export default function Pokemon() {
  // modalState is the pokemon object containing details of the pokemon, eg. abilities, stats
  const [modalState, setModalState] = useState({});
  // selectedPokemon containes the URL of the pokemon pointing to pokemon
  const [selectedPokemon, setSelectedPokemon] = useState({});

  const handleModalClick = (poke, pokemon) => {
    console.log("click", poke.id, poke.name);
    setModalState(poke);
    setSelectedPokemon(pokemon);
  };

  // contains selectedPokemon.name and selectedPokemon.url
  // console.log(selectedPokemon);
  // console.log(modalState);

  // * PUSH Favorited pokemon to database

  return (
    <div>
      <Header />
      <PokeModal modalState={modalState} selectedPokemon={selectedPokemon} />
      <PokemonContainer onModalClick={handleModalClick} />
    </div>
  );
}
