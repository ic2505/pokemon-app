import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonContainer() {
  const [pokemons, setPokemons] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchCount, setFetchCount] = useState(1);

  const POKE_NUM = 50;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${POKE_NUM}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function fetchMoreListItems() {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${POKE_NUM}&offset=${
        POKE_NUM * fetchCount
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log([...pokemons, ...data.results]);
        setPokemons([...pokemons, ...data.results]);
      });
    setIsFetching(false);
    setFetchCount(fetchCount + 1);
  }

  function handleScroll() {
    // if you reach the bottom of the page, set isFetch to true, to fetch more data
    if (
      Math.abs(
        window.innerHeight +
          document.documentElement.scrollTop -
          document.documentElement.offsetHeight
      ) > 1.5
    ) {
      return;
    }

    console.log("fetch more");
    setIsFetching(true);
  }

  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center px-72 mt-6">
      {pokemons.map((pokemon, idx) => {
        return <PokemonCard key={idx} pokemon={pokemon} />;
      })}
    </div>
  );
}
