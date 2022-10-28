import React, { useState, useEffect } from "react";

export default function Ability({ url }) {
  const [ability, setAbility] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAbility(data));
  }, []);

  if (!ability)
    return (
      <div>
        {/* <Header /> */}
        <p>{"Loading..."}</p>
      </div>
    );

  //   console.log(ability);
  let entry = "";
  for (const i of ability.effect_entries) {
    if (i.language.name === "en") {
      entry = i.effect;
    }
  }
  //   if (ability.effect_entries[0].language.name === "en");

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="pb-1">
      <p>
        <b> {capitalizeString(ability.name)}:</b> {entry}
      </p>
    </div>
  );
}
