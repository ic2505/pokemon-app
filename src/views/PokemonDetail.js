import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import DetailPage from "../components/pokemondetail/DetailPage";
import "../styles/PokemonDetail.css";

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [id]);

  return (
    <div>
      {/* <Header /> */}
      <DetailPage pokemon={pokemon} />
    </div>
  );
}
