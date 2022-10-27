import React from "react";
import { Link, useParams } from "react-router-dom";

export default function DetailPage({ pokemon }) {
  if (!pokemon)
    return (
      <div>
        {/* <Header /> */}
        <h2>{"Loading..."}</h2>
      </div>
    );

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  let typeArr = [];
  pokemon.types.map((type) => {
    typeArr.push(capitalizeString(type.type.name));
  });

  console.log(typeArr.includes("Water"));

  let bgClass = "";
  if (
    typeArr.includes("Fairy") ||
    typeArr.includes("Psychic") ||
    typeArr.includes("Ghost") ||
    typeArr.includes("Dragon")
  ) {
    bgClass = "cosmic-background";
  } else if (typeArr.includes("Ice")) {
    bgClass = "ice-background";
  } else if (typeArr.includes("Water")) {
    bgClass = "water-background";
  } else if (typeArr.includes("Electric")) {
    bgClass = "electric-background";
  } else if (typeArr.includes("Fire")) {
    bgClass = "fire-background";
  } else if (typeArr.includes("Flying")) {
    bgClass = "flying-background";
  } else if (typeArr.includes("Grass")) {
    bgClass = "grass-background";
  } else if (typeArr.includes("Poison")) {
    bgClass = "poison-background";
  } else {
    bgClass = "default-background";
  }

  return (
    <div className={bgClass}>
      <Link to={`/pokedex`} className="btn m-10">
        {"<- Back"}
      </Link>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={pokemon.sprites.other.home.front_default}
            className=" max-w-sm md:max-w-md lg:max-w-lg rounded-lg backdrop-blur-md shadow-2xl p-6 lg:p-8"
            alt={pokemon.name}
          />
          <div>
            <div className="type-icons">
              <h1 className="text-6xl font-bold mr-6 mt-2 text-white">
                {capitalizeString(pokemon.name)}
              </h1>
              <div className="flex">
                {typeArr.map((type) => {
                  return (
                    <img
                      src={require(`../../assets/PokeTypes/${type}.png`)}
                      alt={"bug"}
                      className="h-24"
                    />
                  );
                })}
              </div>
            </div>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Add to Favorites</button>
          </div>
        </div>
      </div>

      <div className="bg-strech"></div>
    </div>
  );
}
