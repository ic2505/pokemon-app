import React from "react";
import { Link, useParams } from "react-router-dom";
import Abilities from "./Abilities";
import Stats from "./Stats";
import Moves from "./Moves";

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

  let bgClass = "default-background";
  let textColor = "text-gray-800";
  let progressColor = "progress-success";
  if (
    typeArr.includes("Fairy") ||
    typeArr.includes("Psychic") ||
    typeArr.includes("Ghost") ||
    typeArr.includes("Dragon")
  ) {
    bgClass = "cosmic-background";
    textColor = "text-slate-100";
    progressColor = "progress-secondary";
  } else if (typeArr.includes("Ice")) {
    bgClass = "ice-background";
    textColor = "text-slate-100";
    progressColor = "progress-info";
  } else if (typeArr.includes("Water")) {
    bgClass = "water-background";
    textColor = "text-slate-100";
    progressColor = "progress-info";
  } else if (typeArr.includes("Electric")) {
    bgClass = "electric-background";
    textColor = "text-slate-100";
    progressColor = "progress-warning";
  } else if (typeArr.includes("Fire")) {
    bgClass = "fire-background";
    textColor = "text-slate-100";
    progressColor = "progress-error";
  } else if (typeArr.includes("Flying")) {
    bgClass = "flying-background";
    textColor = "text-gray-800";
    progressColor = "progress-info";
  } else if (typeArr.includes("Grass")) {
    bgClass = "grass-background";
    textColor = "text-gray-800";
    progressColor = "progress-success";
  } else if (typeArr.includes("Poison")) {
    bgClass = "poison-background";
    textColor = "text-slate-100";
    progressColor = "progress-accent";
  } else {
    bgClass = "default-background";
    textColor = "text-gray-800";
    progressColor = "progress-success";
  }

  console.log(pokemon);

  return (
    <div className={`${bgClass} bg-scroll `}>
      <Link to={`/pokedex`} className="btn m-10">
        {"<- Back"}
      </Link>

      <div className={`flex justify-center ${textColor}`}>
        <div className="shadow-xl w-11/12 backdrop-blur-md pb-20 mb-20">
          <div>
            <div className={`card lg:card-side  lg:flex-row-reverse px-4 pt-4`}>
              <figure>
                <img
                  src={pokemon.sprites.other.home.front_default}
                  className=" max-w-sm md:max-w-md lg:max-w-lg rounded-lg  px-6 pt-6 lg:px-8 lg:pt-8"
                  alt={pokemon.name}
                />
              </figure>
              <div className="card-body px-8 pt-8 pb-0">
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
                  <div className="pb-4">
                    <Stats
                      stats={pokemon.stats}
                      progressColor={progressColor}
                    />
                  </div>
                  <div className="divider"></div>
                  <div className="pb-3">
                    <Abilities abilities={pokemon.abilities} />
                  </div>
                  <div className="divider"></div>
                  {/* <p className="py-6"></p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="px-12 pb-12">
            <div className="pt-2">
              <Moves moves={pokemon.moves} />
              <div className="flex justify-start pt-8">
                <button className="btn btn-primary ">Add to Favorites</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-strech"></div> */}
    </div>
  );
}
