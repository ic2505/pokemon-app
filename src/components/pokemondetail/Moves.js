import React from "react";
import Move from "./Move";

export default function Moves({ moves }) {
  return (
    <div>
      <h1 className="text-xl py-2">
        <b>Moves:</b>
      </h1>
      {moves.map((move, idx) => {
        return <Move key={idx} move={move} />;
      })}
    </div>
  );
}
