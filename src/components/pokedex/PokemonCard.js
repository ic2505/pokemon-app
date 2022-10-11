import React, { useEffect, useState } from "react";
import { Button, Card } from "react-daisyui";

export default function PokemonCard({ pokemon }) {
  const [poke, setPoke] = useState(null);
  const [toggleImage, setToggleImage] = useState(true);

  // console.log(pokemon);

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => {
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
        <div>
          <div className="mb-3"></div>

          <Card className="card w-96 bg-base-100 shadow-xl" side="lg">
            {/* {!poke.sprites.back_default ? (
              <Card.Image
                className="pl-7"
                src={poke.sprites.front_default}
                alt={poke.name}
              />
            ) : null} */}
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
                <Button color="ghost">More Information</Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        </div>
      ) : null}

      {/* {poke ? (
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
      ) : null} */}
    </div>
  );
}
