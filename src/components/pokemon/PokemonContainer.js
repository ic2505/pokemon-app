import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonContainer() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center px-72 mt-6">
      {pokemons.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} />;
      })}
    </div>
  );
}
