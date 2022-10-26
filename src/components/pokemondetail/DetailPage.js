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

  console.log(typeArr);

  return (
    <div className="default-background">
      <Link to={`/pokedex`} className="btn m-6">
        {"<- Back"}
      </Link>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={pokemon.sprites.other.home.front_default}
            className="max-w-sm rounded-lg backdrop-blur-md shadow-2xl"
            alt={pokemon.name}
          />
          <div>
            <div className="type-icons">
              <h1 className="text-6xl font-bold mr-6">
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
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="bg-strech"></div>
    </div>
  );
}