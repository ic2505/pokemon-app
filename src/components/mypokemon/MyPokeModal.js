import React, { useEffect, useState } from "react";

export default function MyPokeModal({ modalState, selectedPokemon }) {
  // console.log(modalState);
  // console.log(isEmpty(modalState));

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);

  useEffect(() => {
    if (!isEmpty(modalState)) {
      setPokemonName(modalState.name);
      setPokemonImage(modalState.sprites.front_default);
      setPokemonAbilities(modalState.abilities);
      setPokemonStats(modalState.stats);
    } else {
      console.log("Object is Empty");
    }
  }, [modalState]);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // console.log(typeof modalState.name, modalState.name);
  // console.log(capitalizeString(pokemonName));

  // ! ADD POKEMON TO DATABASE
  const handleRemove = () => {
    console.log("TODO remove", selectedPokemon);
    // fetch("http://localhost:6001/myPokemon", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(selectedPokemon),
    // });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {/* MODAL INFORMATION */}
          <h3 className="text-lg font-bold">{capitalizeString(pokemonName)}</h3>
          <img src={pokemonImage} alt={pokemonName} />
          <p className="py-4">
            <b>{"Pokemon Abilities:"}</b>
          </p>
          {/* Map abilities, initially state will be an empty object, only map when object is not empty */}
          {pokemonAbilities.map((ability, idx) => {
            return <p key={idx}>{capitalizeString(ability.ability.name)}</p>;
          })}
          <p className="py-4">
            <b>{"Pokemon Stats:"}</b>
          </p>
          {/* Map stats*/}
          {pokemonStats.map((stat, idx) => {
            return (
              <p key={idx}>
                <b>{capitalizeString(stat.stat.name)}</b> : {stat.base_stat}
              </p>
            );
          })}
          <div className="modal-action " onClick={handleRemove}>
            <a href="#" className="btn btn-ghost">
              {"Remove from favorites"}
            </a>
          </div>
        </label>
      </label>
    </div>
  );
}
