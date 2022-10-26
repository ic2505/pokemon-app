import React, { useEffect, useState } from "react";
import { Card } from "react-daisyui";

export default function MyPokemonCard({ pokemon, onModalClick }) {
  const [poke, setPoke] = useState(null);
  const [toggleImage, setToggleImage] = useState(true);

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => {
        setPoke(data);
        // console.log(data);
      });
  }, [pokemon.url]);

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleImageClick = () => {
    setToggleImage(!toggleImage);
  };

  const handleClick = () => {
    onModalClick(poke, pokemon);
  };

  const handleRemove = () => {
    console.log(
      "TODO ",
      poke.name,
      " - remove from DB, rerender in MyPokemonContainer using filter"
    );
  };

  return (
    <div>
      {poke ? (
        <div>
          <div className="mb-3"></div>
          <label htmlFor="my-modal-4" onClick={handleClick}>
            <Card className="card w-96 bg-base-100 shadow-xl" side="lg">
              {toggleImage ? (
                <Card.Image
                  className="pl-7"
                  src={poke.sprites.front_default}
                  alt={poke.name}
                  onMouseEnter={handleImageClick}
                />
              ) : (
                <Card.Image
                  className="pl-7"
                  src={poke.sprites.back_default}
                  alt={poke.name}
                  onMouseLeave={handleImageClick}
                />
              )}

              <Card.Body>
                <Card.Title tag="h2">{capitalizeString(poke.name)}</Card.Title>
                <p>PokeID: {poke.id}</p>
                <p>Base Experience: {poke.base_experience}</p>
                <p>Base Weight: {poke.weight}</p>
                <Card.Actions className="justify-end">
                  <label
                    color="ghost"
                    // htmlFor="my-modal-4"
                    className="btn modal-button btn-ghost"
                    onClick={handleRemove}
                  >
                    Remove
                  </label>
                  <label color="ghost" className="btn modal-button btn-ghost">
                    More Information
                  </label>
                </Card.Actions>
              </Card.Body>
            </Card>
          </label>
        </div>
      ) : null}
    </div>
  );
}
