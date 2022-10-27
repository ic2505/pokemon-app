import React from "react";
import Ability from "./Ability";

export default function Abilities({ abilities }) {
  const abilityNames = [];
  const abilityUrls = [];
  abilities.map((ability) => {
    abilityNames.push(ability.ability.name);
    abilityUrls.push(ability.ability.url);
  });

  //   console.log(abilities);
  return (
    <div>
      <h1>
        <b>Abilities:</b>
      </h1>
      {abilityUrls.map((url, idx) => {
        return <Ability key={idx} url={url} />;
      })}
    </div>
  );
}
