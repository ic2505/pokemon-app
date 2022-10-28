import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import PokemonContainer from "../components/pokedex/PokemonContainer";
import PokeModal from "../components/pokedex/PokeModal";

export default function Pokemon() {
  // modalState is the pokemon object containing details of the pokemon, eg. abilities, stats
  const [modalState, setModalState] = useState({});
  // selectedPokemon containes the URL of the pokemon pointing to pokemon
  const [selectedPokemon, setSelectedPokemon] = useState({});

  const handleModalClick = (poke, pokemon) => {
    // console.log("click", poke.id, poke.name);
    setModalState(poke);
    setSelectedPokemon(pokemon);
  };

  // contains selectedPokemon.name and selectedPokemon.url
  // console.log(selectedPokemon);
  // console.log(modalState);


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
        // console.log([...pokemons, ...data.results]);
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

    // console.log("fetch more");
    setIsFetching(true);
  }

  return (
    <div>
      <Header />
      <PokeModal modalState={modalState} selectedPokemon={selectedPokemon} />
      <PokemonContainer pokemons={pokemons} onModalClick={handleModalClick} />
    </div>
  );
}
