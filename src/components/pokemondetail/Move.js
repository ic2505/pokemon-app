import React from "react";

export default function Stat({ move }) {
  if (!move)
    return (
      <div>
        {/* <Header /> */}
        <p>{"Loading..."}</p>
      </div>
    );

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return <a href={move.move.url}>{`${capitalizeString(move.move.name)}, `}</a>;
}
