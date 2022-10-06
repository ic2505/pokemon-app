import React, { useEffect, useState } from "react";

export default function PokemonCard({ pokemon }) {
  const [poke, setPoke] = useState(null);
  const [toggleImage, setToggleImage] = useState(true);

  console.log(pokemon);

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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
    <div className="card">
      {poke ? (
        <>
          <p>{capitalizeString(poke.name)}</p>
          {toggleImage ? (
            <img
              src={poke.sprites.front_default}
              alt={poke.name}
              onClick={handleImageClick}
            />
          ) : (
            <img
              src={poke.sprites.back_default}
              alt={poke.name}
              onClick={handleImageClick}
            />
          )}
        </>
      ) : null}
    </div>
  );
}
