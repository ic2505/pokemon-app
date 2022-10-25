import React, { useState } from "react";
import Header from "../components/Header";
import PokemonContainer from "../components/pokedex/PokemonContainer";
import PokeModal from "../components/pokedex/PokeModal";

export default function Pokemon() {
  const [modalState, setModalState] = useState({});

  const onModalClick = (poke) => {
    console.log("click", poke.id, poke.name);
    setModalState(poke);
  };



  return (
    <div>
      <Header />
      <PokeModal modalState={modalState} />
      <PokemonContainer onModalClick={onModalClick} />
    </div>
  );
}
