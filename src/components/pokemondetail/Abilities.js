import React from "react";
import Ability from "./Ability";

export default function Abilities({ abilities }) {
  const abilityUrls = [];
  abilities.map((ability) => {
    abilityUrls.push(ability.ability.url);
  });

  return (
    <div>
      <h1 className="text-xl pt-2 pb-2">
        <b>Abilities:</b>
      </h1>
      {abilityUrls.map((url, idx) => {
        return <Ability key={idx} url={url} />;
      })}
    </div>
  );
}
