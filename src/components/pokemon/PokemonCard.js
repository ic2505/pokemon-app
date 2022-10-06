import React, { useEffect, useState } from "react";
import { Button } from "react-daisyui";

export default function PokemonCard({ pokemon }) {
  const [poke, setPoke] = useState(null);
  const [toggleImage, setToggleImage] = useState(true);

  console.log(pokemon);

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPoke(data);
      });
  }, [pokemon.url]);

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleImageClick = () => {
    setToggleImage(!toggleImage);
  };

  return (
    <div>
      {poke ? (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            {toggleImage ? (
              <img
                src={poke.sprites.front_default}
                alt={poke.name}
                onMouseEnter={handleImageClick}
              />
            ) : (
              <img
                src={poke.sprites.back_default}
                alt={poke.name}
                onMouseLeave={handleImageClick}
              />
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title">{capitalizeString(poke.name)}</h2>
            <p>PokeID: {poke.id}</p>
            <p>Base Experience: {poke.base_experience}</p>
            <p>Base Weight: {poke.weight}</p>
            <div className="card-actions justify-end">
              <Button color="ghost">More Information</Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
