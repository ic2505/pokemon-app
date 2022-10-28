import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonContainer from "../components/pokedex/PokemonContainer";
import PokeModal from "../components/pokedex/PokeModal";

export default function MyPokemon() {
  const [myPokemons, setMyPokemons] = useState(null);
  const [modalState, setModalState] = useState({});
  // selectedPokemon containes the URL of the pokemon pointing to pokemon
  const [selectedPokemon, setSelectedPokemon] = useState({});

  const handleModalClick = (poke, pokemon) => {
    // console.log("click", poke.id, poke.name);
    setModalState(poke);
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {
    fetch("http://localhost:6001/myPokemon")
      .then((response) => response.json())
      .then((data) => setMyPokemons(data));
  }, []);

  console.log(myPokemons);

  if (!myPokemons)
    return (
      <div>
        <h2>{"Loading..."}</h2>
      </div>
    );

  // modalState is the pokemon object containing details of the pokemon, eg. abilities, stats

  return (
    <div>
      <Header />
      <PokeModal modalState={modalState} selectedPokemon={selectedPokemon} />
      <PokemonContainer pokemons={myPokemons} onModalClick={handleModalClick} />
    </div>
  );
}
