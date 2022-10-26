import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon)
    return (
      <div>
        <Header />
        <h2>{"Loading..."}</h2>
      </div>
    );

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  console.log(pokemon);

  console.log(pokemon.sprites.other.home);

  // let spriteArray = [];
  // for (const key in pokemon.sprites) {
  //   if (pokemon.sprites[key]) {
  //     console.log(`${key}: ${pokemon.sprites[key]}`);
  //     spriteArray.push(pokemon.sprites[key]);
  //   }
  // }
  // console.log(spriteArray);

  return (
    <div>
      <Header />
      <Link to={`/pokedex`} className="btn btn-ghost">
        {"<- Back"}
      </Link>
      <h1>
        <b>{capitalizeString(pokemon.name)}</b>
      </h1>
      <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
    </div>
  );
}
