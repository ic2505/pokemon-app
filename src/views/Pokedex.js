import React, { useState } from "react";
import Header from "../components/Header";
import PokemonContainer from "../components/pokedex/PokemonContainer";

export default function Pokemon() {
  const [modalState, setModalState] = useState({});

  const onModalClick = (poke) => {
    console.log("click", poke.id, poke.name);
    setModalState(poke);
  };

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  console.log(typeof modalState.name, modalState.name);
  console.log(capitalizeString("modalState.name"));

  return (
    <div>
      <Header />

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">{modalState.name}</h3>
          <p className="py-4">{"Abilities:"}</p>
          <div className="modal-action">
            <a href="#" className="btn">
              Add to TEam!
            </a>
          </div>
        </label>
      </label>
      <PokemonContainer onModalClick={onModalClick} />
    </div>
  );
}
