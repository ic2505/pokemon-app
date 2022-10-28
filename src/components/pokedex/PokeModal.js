import React, { useEffect, useState } from "react";
import "../../styles/PokeModal.css";

export default function PokeModal({ modalState, selectedPokemon }) {
  // console.log(modalState);
  // console.log(isEmpty(modalState));

  const [pokemonId, setPokemonId] = useState(null);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonBaseXp, setPokemonBaseXp] = useState(null);
  const [pokemonWeight, setPokemonWeight] = useState(null);
  const [pokemonType, setPokemonType] = useState([]);

  useEffect(() => {
    if (!isEmpty(modalState)) {
      setPokemonId(modalState.id);
      setPokemonName(modalState.name);
      setPokemonImage(modalState.sprites.front_default);
      setPokemonAbilities(modalState.abilities);
      setPokemonStats(modalState.stats);
      setPokemonBaseXp(modalState.base_experience);
      setPokemonWeight(modalState.weight);
      let typeArr = [];
      modalState.types.map((type) => {
        typeArr.push(capitalizeString(type.type.name));
      });
      setPokemonType(typeArr);
      console.log(modalState);
    } else {
      // console.log("Object is Empty");
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
  const handleFavorite = () => {
    console.log("favoriting", selectedPokemon);
    fetch("http://localhost:6001/myPokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedPokemon),
    });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {/* MODAL INFORMATION */}
          <h3 className="text-2xl font-bold">
            {capitalizeString(pokemonName)}
          </h3>

          <div className="row">
            <div className="modal-image column">
              {/* IMAGE */}
              <img src={pokemonImage} alt={pokemonName} />
            </div>
            {/* BASE STATS */}
            <div className="modal-information column">
              <p>
                <b>{"Base Experience:"}</b> {pokemonBaseXp}
              </p>
              <p>
                <b>{"Base Weight:"}</b> {pokemonWeight}
              </p>

              {/* TYPE */}
              <div className="pokemon-type">
                <p className="py-4">
                  <b>{"Pokemon Type:"}</b>
                </p>
                <p>{pokemonType.join(", ")}</p>
              </div>

              {/* ABILITIES */}
              <p className="py-4">
                <b>{"Pokemon Abilities:"}</b>
              </p>
              {pokemonAbilities.map((ability, idx) => {
                return (
                  <p key={idx}>{capitalizeString(ability.ability.name)}</p>
                );
              })}

              {/* STATS*/}
              <p className="py-4">
                <b>{"Pokemon Stats:"}</b>
              </p>
              {pokemonStats.map((stat, idx) => {
                return (
                  <p key={idx}>
                    <b>{capitalizeString(stat.stat.name)}</b>: {stat.base_stat}
                  </p>
                );
              })}

              {/* FAVORITE BUTTON, when pressed, pokemon will be POSTED to database */}

              <div className="modal-action " onClick={handleFavorite}>
                <a
                  color="ghost"
                  className="btn modal-button btn-ghost"
                  // onClick={navigateToPokemonPage}
                  href={`pokedex/${pokemonId}`}
                >
                  More Information
                </a>
                <a href="#" className="btn btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="red"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0.5"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* {"Favorite"} */}
                </a>
              </div>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
}
