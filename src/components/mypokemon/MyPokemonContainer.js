import React, { useEffect, useState } from "react";
import MyPokemonCard from "./MyPokemonCard";

export default function MyPokemonContainer({ onModalClick }) {
  const [myPokemons, setMyPokemons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/myPokemon")
      .then((response) => response.json())
      .then(setMyPokemons);
  }, []);

  console.log(myPokemons);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center px-32 mt-1">
      {myPokemons.map((myPokemon, idx) => {
        return (
          <MyPokemonCard
            key={idx}
            pokemon={myPokemon}
            onModalClick={onModalClick}
          />
        );
      })}
    </div>
  );
}
