import React, { useEffect, useRef, useState } from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonContainer({ pokemons, onModalClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center px-32 mt-1">
      {pokemons.map((pokemon, idx) => {
        return (
          <PokemonCard
            key={idx}
            pokemon={pokemon}
            onModalClick={onModalClick}
          />
        );
      })}
    </div>
  );
}
