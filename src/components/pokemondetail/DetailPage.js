import React from "react";
import { Link, useParams } from "react-router-dom";
import Abilities from "./Abilities";

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

  let bgClass = "";
  let textColor = "";
  if (
    typeArr.includes("Fairy") ||
    typeArr.includes("Psychic") ||
    typeArr.includes("Ghost") ||
    typeArr.includes("Dragon")
  ) {
    bgClass = "cosmic-background";
    textColor = "text-slate-100";
  } else if (typeArr.includes("Ice")) {
    bgClass = "ice-background";
    textColor = "text-slate-100";
  } else if (typeArr.includes("Water")) {
    bgClass = "water-background";
    textColor = "text-slate-100";
  } else if (typeArr.includes("Electric")) {
    bgClass = "electric-background";
    textColor = "text-slate-100";
  } else if (typeArr.includes("Fire")) {
    bgClass = "fire-background";
    textColor = "text-slate-100";
  } else if (typeArr.includes("Flying")) {
    bgClass = "flying-background";
    textColor = "text-gray-800";
  } else if (typeArr.includes("Grass")) {
    bgClass = "grass-background";
    textColor = "text-gray-800";
  } else if (typeArr.includes("Poison")) {
    bgClass = "poison-background";
    textColor = "text-slate-100";
  } else {
    bgClass = "default-background";
    textColor = "text-gray-800";
  }

  console.log(pokemon);

  return (
    <div className={`${bgClass} `}>
      <Link to={`/pokedex`} className="btn m-10">
        {"<- Back"}
      </Link>

      <div className="flex justify-center">
        <div
          className={`card ${textColor} lg:card-side shadow-xl w-11/12 backdrop-blur-md lg:flex-row-reverse p-4 pb-20`}
        >
          <figure>
            <img
              src={pokemon.sprites.other.home.front_default}
              className=" max-w-sm md:max-w-md lg:max-w-lg rounded-lg  p-6 lg:p-8"
              alt={pokemon.name}
            />
          </figure>
          <div className="card-body">
            <div>
              <div className="type-icons">
                <h1 className="text-6xl font-bold mr-6 mt-2 ">
                  {capitalizeString(pokemon.name)}
                </h1>
                <div className="flex">
                  {typeArr.map((type) => {
                    return (
                      <img
                        key={type}
                        src={require(`../../assets/PokeTypes/${type}.png`)}
                        alt={"bug"}
                        className="h-24"
                      />
                    );
                  })}
                </div>
              </div>
              <Abilities abilities={pokemon.abilities} />
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Add to Favorites</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-strech"></div>
    </div>
  );
}
