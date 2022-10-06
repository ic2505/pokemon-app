import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonContainer() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      {pokemons.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} />;
      })}
    </div>
  );
}
