import React, { useEffect, useState } from "react";
import { Button, Card } from "react-daisyui";

export default function PokemonCard({ pokemon, onModalClick }) {
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

  return (
    <div>
      {poke ? (
        <div>
          <div className="mb-3"></div>
          <label htmlFor="my-modal-4" onClick={handleClick}>
            <Card className="card w-96 bg-base-100 shadow-xl" side="lg">
              {!poke.sprites.back_default ? (
                <Card.Image
                  className="pl-7"
                  src={poke.sprites.front_default}
                  alt={poke.name}
                  onMouseEnter={handleImageClick}
                />
              ) : toggleImage ? (
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
                <p>
                  <b>PokéID: </b>
                  {poke.id}
                </p>
                <Card.Actions className="justify-end">
                  <a
                    color="ghost"
                    className="btn modal-button btn-ghost"
                    href={`pokedex/${poke.id}`}
                  >
                    More Information
                  </a>
                </Card.Actions>
              </Card.Body>
            </Card>
          </label>
        </div>
      ) : null}
    </div>
  );
}
