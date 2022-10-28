import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonContainer from "../components/pokedex/PokemonContainer";

export default function MyPokemon() {
  const [myPokemons, setMyPokemons] = useState(null);

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

  return (
    <div>
      <Header />
      <PokemonContainer pokemons={myPokemons} />
    </div>
  );
}
