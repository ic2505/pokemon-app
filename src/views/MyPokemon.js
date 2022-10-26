import React, { useState } from "react";
import Header from "../components/Header";
import MyPokemonContainer from "../components/mypokemon/MyPokemonContainer";
import MyPokeModal from "../components/mypokemon/MyPokeModal";

export default function MyPokemon() {
  // modalState is the pokemon object containing details of the pokemon, eg. abilities, stats
  const [modalState, setModalState] = useState({});
  // selectedPokemon containes the URL of the pokemon pointing to pokemon
  const [selectedPokemon, setSelectedPokemon] = useState({});

  const handleModalClick = (poke, pokemon) => {
    console.log("click", poke.id, poke.name);
    setModalState(poke);
    setSelectedPokemon(pokemon);
  };

  return (
    <div>
      <Header />
      <MyPokeModal modalState={modalState} selectedPokemon={selectedPokemon} />
      <MyPokemonContainer onModalClick={handleModalClick} />
    </div>
  );
}
