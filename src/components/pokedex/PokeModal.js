import React, { useEffect, useState } from "react";

export default function PokeModal({ modalState }) {
  console.log(modalState);
  console.log(isEmpty(modalState));

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
      console.log("empty obj");
    }
  }, [modalState]);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  console.log(typeof modalState.name, modalState.name);
  console.log(capitalizeString(pokemonName));

  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {/* MODAL INFORMATION */}
          <h3 className="text-lg font-bold">{capitalizeString(pokemonName)}</h3>
          <img src={pokemonImage} alt={pokemonName} />
          <p className="py-4">{"Abilities:"}</p>
          {/* Map abilities, initially state will be an empty object, only map when object is not empty */}
          {pokemonAbilities.map((ability) => {
            return <p>{capitalizeString(ability.ability.name)}</p>;
          })}
          <p className="py-4">{"Stats:"}</p>
          {/* Map stats*/}
          {pokemonStats.map((stat) => {
            return (
              <div>
                <p>{`${stat.stat.name} : ${stat.base_stat}`}</p>
              </div>
            );
          })}
          <div className="modal-action">
            <a href="#" className="btn">
              Add to Team!
            </a>
          </div>
        </label>
      </label>
    </div>
  );
}
